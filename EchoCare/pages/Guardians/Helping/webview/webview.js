Page({
  onLoad: function(options) {
    const decodedUrl = decodeURIComponent(options.url);
    console.log("Loaded URL:", decodedUrl); // 添加调试信息
    this.setData({
      url: decodedUrl
    });
  }
})
