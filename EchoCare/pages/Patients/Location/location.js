// location.js

Page({
  goToHome: function () {
    wx.navigateTo({
      url: '/pages/Patients/Location Image/location1/location1' 
    })
  },
  goToHospital: function () {
    wx.navigateTo({
      url: '/pages/Patients/Location Image/location2/location2' 
    })
  },
  goToPark: function () {
    wx.navigateTo({
      url: '/pages/Patients/Location Image/location3/location3' 
    })
  }
})
