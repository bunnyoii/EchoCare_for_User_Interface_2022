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
    console.log(options); // 打印查看传递过来的所有参数
    // 确定按钮的逻辑处理
    wx.navigateTo({
      url: '/pages/home/home', // 假设点击确定后返回首页
      fail: function(error) {
        console.log("跳转失败:", error);  // 查看跳转失败的错误信息
      }
    });
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