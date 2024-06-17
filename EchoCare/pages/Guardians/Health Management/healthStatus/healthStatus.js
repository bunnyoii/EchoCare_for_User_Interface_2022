// pages/Guardians/Health Management/healthStatus/healthStatus.js
Page({
  data: {
    currentDate: ''
  },
  onLoad: function() {
    this.setCurrentDate();
  },
  setCurrentDate: function() {
    const date = new Date();
    const month = date.getMonth() + 1; // getMonth() 返回的月份从0开始，因此需要加1
    const day = date.getDate();
    const formattedDate = `${month}月${day}日`;
    this.setData({
      currentDate: formattedDate
    });
  }
})