// pages/Guardians/Helping/Helping.js
Page({
  data: {
    links: [
      { name: '丁香医生', url: 'https://dxy.com' },
      { name: '好大夫', url: 'https://www.haodf.com' }
    ]
  },
  openLink: function(event) {
    const url = event.currentTarget.dataset.url;
    console.log("Navigating to URL:", url); // 添加调试信息
    wx.navigateTo({
      url: `/pages/Guardians/Helping/webview/webview?url=${encodeURIComponent(url)}`
    });
  }
});

