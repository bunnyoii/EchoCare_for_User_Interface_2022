// location.js

Page({
  goToHome: function () {
    wx.navigateTo({
      url: '/pages/Patients/Locations Image/location1/location1' 
    })
  },
  goToHospital: function () {
    wx.navigateTo({
      url: '/pages/Patients/Locations Image/location2/location2' 
    })
  },
  goToPark: function () {
    wx.navigateTo({
      url: '/pages/Patients/Locations Image/location3/location3' 
    })
  }
})
