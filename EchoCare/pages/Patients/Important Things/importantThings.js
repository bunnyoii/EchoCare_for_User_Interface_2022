// pages/Patients/Important Things/importantThings.js
Page({
  gotoContactPage: function() {
    wx.navigateTo({
      url: '/pages/Patients/Emergency Contact/emergencyContact'
    })
  },
  gotoMedicinePage: function() {
    wx.navigateTo({
      url: '/pages/Patients/Medicine/medicine'
    })
  },
  gotoItemPage: function() {
    wx.navigateTo({
      url: '/pages/Patients/FindThings/FindThings'
    })
  }
})