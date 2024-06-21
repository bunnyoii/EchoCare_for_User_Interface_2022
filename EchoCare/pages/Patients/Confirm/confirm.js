// pages/Patients/Confirm/confirm.js
Page({
  navigateToEmergency: function () {
    wx.navigateTo({
      url: '/pages/Patients/Emergency Contact/emergencyContact'
    });
  },

  navigateToLocation: function () {
    wx.navigateTo({
      url: '/pages/Patients/Location/location'
    });
  },

  navigateToSchedule: function () {
    wx.navigateTo({
      url: '/pages/Patients/Schedule/schedule'
    });
  },

  navigateToImportant: function () {
    wx.navigateTo({
      url: '/pages/Patients/Important Things/importantThings'
    });
  }
});
