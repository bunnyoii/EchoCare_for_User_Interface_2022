var util = require('util.js');

function getLocation() {
  return new Promise(function (resolve, reject) {
    wx.getSetting({
      success: (res) => {
        //console.log(JSON.stringify(res))
        // res.authSetting['scope.userLocation'] == undefined    表示 初始化进入该页面
        // res.authSetting['scope.userLocation'] == false    表示 非初始化进入该页面,且未授权
        // res.authSetting['scope.userLocation'] == true    表示 地理位置授权
        if (res.authSetting['scope.userLocation'] === false) {
          wx.showModal({
            title: '请求授权当前位置',
            content: '需要获取您的地理位置，请确认授权',
            success: function (res) {
              if (res.cancel) {
                wx.showToast({
                  title: '拒绝授权',
                  icon: 'none',
                  duration: 1000
                });
                getCurrentLocation(resolve, reject);
              } else if (res.confirm) {
                wx.openSetting({
                  success: function (dataAu) {
                    if (dataAu.authSetting["scope.userLocation"] == true) {
                      wx.showToast({
                        title: '授权成功',
                        icon: 'success',
                        duration: 1000
                      })
                      //再次授权，调用wx.getLocation的API
                      getCurrentLocation(resolve, reject);
                    } else {
                      wx.showToast({
                        title: '授权失败',
                        icon: 'none',
                        duration: 1000
                      });
                      getCurrentLocation(resolve, reject);
                    }
                  }
                })
              }
            }
          })
        } else if (res.authSetting['scope.userLocation'] == undefined) {
          wx.authorize({
            scope: 'scope.userLocation',
            success() { //用户同意开启授权
              //进行地理位置授权完成后的逻辑操作
              getCurrentLocation(resolve, reject);
            },
            fail(res) { //用户拒绝开启授权
              wx.hideLoading()
              wx.showToast({
                title: '授权失败',
                icon: 'none',
                duration: 2000
              });
              getCurrentLocation(resolve, reject);
            }
          })
        } else if (res.authSetting['scope.userLocation'] == true) {
          getCurrentLocation(resolve, reject);
        }
      }
    });
  });
}


function getCurrentLocation(resolve, reject) {
  wx.getLocation({
    // type: 'gcj02',
    type: 'wgs84',
    success: function (res) {
      var longitude = res.longitude //经度
      var latitude = res.latitude //纬度
      wx.setStorageSync("longitude", longitude);
      wx.setStorageSync("latitude", latitude);
      if (resolve) {
        resolve(res);
      }
    },
    fail: function (res) { 
      //用户授权获取地理位置失败，默认怀化市鹤城区人民政府 
      res = {longitude:110.040001,latitude:27.57862};
      if (resolve) {
         resolve(res);
      }
    }
  })  
}

// 打开地图选择位置
function chooseLocation() {
	var that = this;
    return new Promise(function (resolve, reject) {
        that.getLocation().then(res => {
            if (res) {
              wx.chooseLocation({
                latitude: res.latitude,
                longitude: res.longitude,
                success: function (addressInfo) {
                  resolve(addressInfo);
                },
                fail: function (res) {
                  reject(res);
                }
              });
            } else {
              util.showMsg('定位失败');
            }
        });
    });
}

/**
 * 导出
 */
module.exports = {
  getLocation: getLocation,
  chooseLocation: chooseLocation,
}