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
        [['荔湾区', '越秀区', '海珠区', '天河区', '白云区', '黄埔区', '番禺区', '花都区', '南沙区', '增城区', '从化区'], ['罗湖区', '福田区', '南山区', '宝安区', '龙岗区', '盐田区', '龙华区', '坪山区', '光明区'], ["香洲区", "斗门区", "金湾区"]],
        [['黄浦区', '徐汇区', '长宁区', '静安区', '普陀区', '虹口区', '杨浦区', '浦东新区', '闵行区', '宝山区', '嘉定区', '金山区', '松江区', '青浦区', '奉贤区', '崇明区']],
        [['东城区', '西城区', '朝阳区', '海淀区', '丰台区', '石景山区', '门头沟区', '房山区', '通州区', '顺义区', '昌平区', '大兴区', '怀柔区', '平谷区', '密云区', '延庆区']]
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