// pages/Guardians/Health Management/reminder/calendarReminder.js
Page({
  data: {
    eventData: {
      title: '',
      location: '',
      startTime: '',
      endTime: ''
    },
    startDate: new Date().toISOString().slice(0, 10),  // 当天日期
    endDate: new Date().toISOString().slice(0, 10),    // 当天日期
    startTime: '12:00',
    endTime: '13:00'
  },
  inputChange: function(e) {
    const param = e.currentTarget.dataset.param;
    this.setData({
      [`eventData.${param}`]: e.detail.value
    });
  },
  onStartChange: function(e) {
    console.log('Selected start date:', e.detail.value);
    this.setData({
      startDate: e.detail.value,
      'eventData.startTime': e.detail.value + ' ' + this.data.startTime
    });
  },
  onStartTimeChange: function(e) {
    this.setData({
      startTime: e.detail.value,
      'eventData.startTime': `${this.data.startDate} ${e.detail.value}`
    });
  },
  onEndChange: function(e) {
    console.log('Selected end date:', e.detail.value);
    this.setData({
      endDate: e.detail.value,
      'eventData.endTime': e.detail.value + ' ' + this.data.endTime
    });
  },
  onEndTimeChange: function(e) {
    this.setData({
      endTime: e.detail.value,
      'eventData.endTime': `${this.data.endDate} ${e.detail.value}`
    });
  },
  addEvent: function() {
    const { title, location, startTime, endTime } = this.data.eventData;
    wx.addPhoneCalendar({
      title: title,
      location: location,
      startTime: new Date(startTime.replace(/-/g, '/')),  // 转换日期格式，以适配 iOS
      endTime: new Date(endTime.replace(/-/g, '/')),    // 同上
      success(res) {
        wx.showToast({
          title: '已添加到日历',
          icon: 'success',
          duration: 2000
        });
      },
      fail(err) {
        wx.showToast({
          title: '添加失败',
          icon: 'none',
          duration: 2000
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})