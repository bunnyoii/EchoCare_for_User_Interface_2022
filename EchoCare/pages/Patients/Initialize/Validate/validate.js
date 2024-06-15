// pages/passwordInput/passwordInput.js
Page({
  data: {
    password: '',  // 存储输入的密码
  },

  // 处理输入框输入事件
  inputPassword: function (e) {
    this.setData({
      password: e.detail.value
    });
  },

  // 处理确认按钮点击事件
  confirmPassword: function () {
    // 获取输入的密码
    const password = this.data.password;

    // 验证密码是否正确
    if (password === '114514') {
      // 输出日志提示密码正确
      console.log('密码正确！');
      // 验证码正确，跳转到下一个页面
      wx.navigateTo({
        url: '/pages/Patients/Confirm/confirm'
      });
    } else {
      // 密码错误，提示用户重新输入
      wx.showToast({
        title: '验证码错误，请重新输入',
        icon: 'none'
      });
    }
  }
});
