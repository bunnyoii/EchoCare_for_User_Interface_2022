// pages/Guardians/Initialize/Selector/selector.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contacts: [
      { id: '001', name: 'A.Heins', checked: false, avatar: 'assets/avatar1.jpg' },
      { id: '002', name: 'Al', checked: false, avatar: 'assets/avatar2.jpg' },
      { id: '003', name: 'AirSupply', checked: false, avatar: 'assets/avatar3.jpg' },
      { id: '004', name: '爱睡懒觉_', checked: false, avatar: 'assets/avatar4.jpg' },
      { id: '005', name: 'Alan', checked: false, avatar: 'assets/avatar5.jpg' },
      { id: '006', name: 'Alex', checked: false, avatar: 'assets/avatar6.jpg' },
      { id: '007', name: 'Amber', checked: false, avatar: 'assets/avatar7.jpg' }
    ],
    selectedContactId: null
  },
  onCheckboxChange: function(e) {
    const selectedIds = e.detail.value; // 获取当前选中的复选框的 id 数组
    const updatedContacts = this.data.contacts.map(contact => ({
      ...contact,
      checked: selectedIds.includes(contact.id)
    }));
    this.setData({
      contacts: updatedContacts
    });
  },

  onConfirm: function() {
    const selectedContacts = this.data.contacts.filter(contact => contact.checked);
    if (selectedContacts.length > 0) {
      wx.navigateTo({
        url: '/pages/Guardians/Initialize/Selector/selectorConfirm?selectedContacts=' + encodeURIComponent(JSON.stringify(selectedContacts)),
        fail: function(error) {
            console.log("跳转失败:", error);  // 查看跳转失败的错误信息
        }
    });
    } else {
        wx.showToast({
            title: '请选择至少一个联系人',
            icon: 'none',
            duration: 2000
        });
    }
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