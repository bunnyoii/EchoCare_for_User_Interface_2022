// pages/Guardians/Health Management/initialize/initialize.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  goToPhysicalConditionEnquiry(){
    wx.navigateTo({
      url: '/pages/Guardians/Health Management/healthStatus/healthStatus'
    })
  },

  goToHealthReminder(){
    wx.navigateTo({
      url: '/pages/Guardians/Health Management/reminder/calendarReminder'
    })
  }
})