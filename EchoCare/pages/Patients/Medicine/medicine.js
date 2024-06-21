// pages/Patients/Emergency Contact/emergencyContact.js
Page({
  data: {
    showForm: false, // 控制输入表单的显示与隐藏
    contacts: [
      { name: '急救', phone: '110' },
      { name: '救护', phone: '120' } 
    ],
    newContactName: '', // 新建联系人表单中的姓名
    newContactPhone: '', // 新建联系人表单中的电话号码
  },

  showFormInput: function () {
    // 点击新建联系人按钮，显示输入表单
    this.setData({
      showForm: true,
    });
  },

  inputName: function (e) {
    // 输入姓名时更新数据
    this.setData({
      newContactName: e.detail.value,
    });
  },

  inputPhone: function (e) {
    // 输入电话号码时更新数据
    this.setData({
      newContactPhone: e.detail.value,
    });
  },

  saveContact: function () {
    // 点击确认按钮，保存联系人信息并隐藏输入表单
    let newContact = {
      name: this.data.newContactName,
      phone: this.data.newContactPhone,
    };

    let contacts = this.data.contacts;
    contacts.push(newContact);

    this.setData({
      contacts: contacts,
      showForm: false,
      newContactName: '',
      newContactPhone: '',
    });

    // 保存到缓存或云存储，示例使用小程序缓存
    wx.setStorageSync('contacts', contacts);
  },

  callContact: function (e) {
    // 获取点击的联系人索引
    let index = e.currentTarget.dataset.index;
    // 获取对应联系人的电话号码
    let phone = this.data.contacts[index].phone;

    // 调用小程序的拨打电话功能
    wx.makePhoneCall({
      phoneNumber: phone,
    });
  },

  deleteContact: function (e) {
    // 获取点击的联系人索引
    let index = e.currentTarget.dataset.index;
    // 获取联系人列表
    let contacts = this.data.contacts;

    // 删除指定索引的联系人
    contacts.splice(index, 1);

    // 更新数据并保存到缓存或云存储
    this.setData({
      contacts: contacts,
    });
    wx.setStorageSync('contacts', contacts);
  },

  longPressHandler: function (e) {
    let index = e.currentTarget.dataset.index;

    // 在这里可以实现你的长按逻辑，例如显示删除按钮或其他操作
    wx.showActionSheet({
      itemList: ['删除联系人'],
      success: (res) => {
        if (res.tapIndex === 0) {
          // 用户点击了删除联系人
          this.deleteContact({ currentTarget: { dataset: { index: index } } });
        }
      }
    });
  }
});