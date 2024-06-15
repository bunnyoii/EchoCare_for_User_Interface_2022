// pages/Guardians/Initialize/Selector/selectorCertain.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userName: '',   // 用户名
    userImage: ''   // 用户头像
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 从导航参数中获取用户名和头像URL，并设置到data中
    this.setData({
      userName: options.userName,
      userImage: options.userImage
    });
  },

  onConfirm: function() {
    console.log("用户名: " + this.data.userName); // 正确使用在data中存储的用户名
    console.log("用户头像URL: " + this.data.userImage); // 正确使用在data中存储的用户头像URL
  // 使用绝对路径导航到B界面，并通过URL传递userName和userImage
    wx.navigateTo({
      url: '/pages/Guardians/Initialize/Choose/chooseFunctions?userName=' + encodeURIComponent(this.data.userName) + '&userImage=' + encodeURIComponent(this.data.userImage),
      fail: function(error) {
        console.log("跳转失败:", error);  // 如果导航失败，打印错误信息
      }
    });
  }  
})