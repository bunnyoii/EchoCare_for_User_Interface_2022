// pages/Guardians/Initialize/Selector/selectorConfirm.js
const allContacts = {
  '001': { name: 'A.Heins', avatar: 'assets/avatar1.jpg'},
  '002': { name: 'Al', avatar: 'assets/avatar2.jpg'},
  '003': { name: 'AirSupply', avatar: 'assets/avatar3.jpg'},
  '004': { name: '爱睡懒觉_', avatar: 'assets/avatar4.jpg' },
  '005': { name: 'Alan', avatar: 'assets/avatar5.jpg' },
  '006': { name: 'Alex', checked: false, avatar: 'assets/avatar6.jpg' },
  '007': { name: 'Amber', checked: false, avatar: 'assets/avatar7.jpg' }
};
Page({
  /**
   * 页面的初始数据
   */
  data: {
    selectedContacts: []
  },
  onConfirm: function() {
    // 确认按钮的逻辑处理
    console.log('确认选中');
  },
  onCancel: function() {
    // 取消按钮的逻辑处理
    console.log('取消操作');
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (options.selectedContacts) {
      const contacts = JSON.parse(decodeURIComponent(options.selectedContacts));
      this.setData({
        selectedContacts: contacts
      });
    }
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

  },
  
})