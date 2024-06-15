// pages/Guardians/Safety Tracking/safetyTracking.js
Page({
  data: {
    provinces: ["广东省", "上海市", "北京市"],
    provinceIndex: 0,
    cities: [
        ["广州市", "深圳市", "珠海市"],
        ["上海市"],
        ["北京市"]
    ],
    cityIndex: 0,
    districts: [
        [["白云区", "天河区", "越秀区"], ["南山区", "福田区", "宝安区"], ["香洲区", "斗门区", "金湾区"]],
        [["黄浦区", "徐汇区", "长宁区"]],
        [["东城区", "西城区", "朝阳区"]]
    ],
    districtIndex: 0
},
  onLoad: function() {
    // 页面加载时设置默认值
    this.updatePickerView();
  },
  updatePickerView: function() {
    // 更新显示，确保与picker的初始索引值对应
    const { provinces, cities, districts, provinceIndex, cityIndex, districtIndex } = this.data;
    this.setData({
        province: provinces[provinceIndex],
        city: cities[provinceIndex][cityIndex],
        district: districts[provinceIndex][cityIndex][districtIndex]
    });
  },
  bindProvinceChange: function(e) {
    this.setData({
        provinceIndex: e.detail.value,
        cityIndex: 0,
        districtIndex: 0
    });
    this.updatePickerView();
  },
bindCityChange: function(e) {
    this.setData({
        cityIndex: e.detail.value,
        districtIndex: 0
    });
    this.updatePickerView();
},
bindDistrictChange: function(e) {
    this.setData({
        districtIndex: e.detail.value
    });
    this.updatePickerView();
},
  onSearch: function() {
      // 执行搜索逻辑
  }
});