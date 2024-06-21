// index.js

Page({
  data: {
    items: [
      { name: '笔记本电脑', description: '放置在办公桌上', imgUrl: 'https://minmuslin-oss-bucket.oss-cn-shanghai.aliyuncs.com/EchoCare/laptop.png' },
      { name: '手机', description: '放置在充电器旁边', imgUrl: 'https://minmuslin-oss-bucket.oss-cn-shanghai.aliyuncs.com/EchoCare/phone.png' },
      { name: '钥匙', description: '挂在钥匙架上', imgUrl: 'https://minmuslin-oss-bucket.oss-cn-shanghai.aliyuncs.com/EchoCare/keys.png' }
    ],
    showInput: false,
    inputNameValue: '',
    inputDescriptionValue: ''
  },

  // 添加物品按钮点击事件
  showAddItemInput: function () {
    this.setData({
      showInput: true,
      inputNameValue: '',
      inputDescriptionValue: ''
    });
  },

  // 输入物品名称
  inputName: function (e) {
    this.setData({
      inputNameValue: e.detail.value
    });
  },

  // 输入物品位置
  inputDescription: function (e) {
    this.setData({
      inputDescriptionValue: e.detail.value
    });
  },

  // 确认添加物品
  addItem: function () {
    const newItem = {
      name: this.data.inputNameValue,
      description: this.data.inputDescriptionValue,
      imgUrl: 'https://minmuslin-oss-bucket.oss-cn-shanghai.aliyuncs.com/EchoCare/default.png' // 默认图片路径，根据实际情况替换
    };
    this.data.items.push(newItem);
    this.setData({
      items: this.data.items,
      showInput: false,
      inputNameValue: '',
      inputDescriptionValue: ''
    });
  },

  // 删除物品
  deleteItem: function (e) {
    const index = e.currentTarget.dataset.index;
    this.data.items.splice(index, 1);
    this.setData({
      items: this.data.items
    });
  }
});