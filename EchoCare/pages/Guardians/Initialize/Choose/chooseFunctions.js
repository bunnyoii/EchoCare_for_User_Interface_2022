// pages/Guardians/Initialize/Choose/chooseFunctions.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },

  goToSafetyTracking(){
    wx.navigateTo({
      url: '/pages/Guardians/Safety Tracking/safetyTracking'
    })
  },

  goToHealthManagement(){
    wx.navigateTo({
      url: '/pages/Guardians/Health Management/initialize/initialize'
    })
  },

  goToHelping(){
    wx.navigateTo({
      url: '/pages/Guardians/Helping/Helping'
    })
  }
})