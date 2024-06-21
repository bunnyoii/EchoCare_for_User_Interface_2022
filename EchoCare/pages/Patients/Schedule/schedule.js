// pages/Guardians/Health Management/reminder/calendarReminder.js
Page({
  data: {
    tasks: [], // 存储所有任务的数组
    taskIndexByDate: {}, // 日期到任务数组索引的映射
    list: [],
    weekList: ['日', '一', '二', '三', '四', '五', '六'],
    date: {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate()
    },
    extraData: [
      {date: '2022-7-20', value: '签到', status: true, dot: true, active: false},
      {date: '2022-7-19', value: '未签到', status: false, dot: true, active: true}
    ],
    show: false,
    title: '',
    content: '--',
    confirmText: '确认',
    cancelText: '取消',
    showConfirmButton: true,
    showCancelButton: false,
    showModal: false,
    newEventTitle: '',
    newEventDetail: '',
    confirmColor: '#2979ff',
    cancelColor: '#606266',
    closeOnClickOverlay: true,
    width: '650rpx',
    isShrink: false,
    isOpen: false,
    dayList: [],
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate()
  },

  onLoad: function() {
    console.log("Modal show state at onLoad:", this.data.showAddEventModal);
    this.initTime();
    this.initApi(this.data.year, this.data.month);
    const tasks = wx.getStorageSync('tasks') || [];
    const taskIndexByDate = wx.getStorageSync('taskIndexByDate') || {};
    this.setData({ tasks, taskIndexByDate });
  },

  initTime: function() {
    const now = new Date();
    this.setData({
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate()
    });
  },

  toShrink: function() {
    let flag = null;
    const dateArr = this.getTime(this.data.year, this.data.month);
    dateArr.forEach((item, index) => {
      if (index % 7 === 0 && this.data.day === item.day) {
        flag = Math.floor(index / 7);
      }
    });
    this.setData({
      dayList: dateArr.slice(flag * 7, (flag + 1) * 7),
      isOpen: true
    });
  },

  toShrinkClose: function() {
    this.setData({
      dayList: this.getTime(this.data.year, this.data.month),
      isOpen: false
    });
  },

  initApi: function(year, month) {
    const dateArr = this.getTime(year, month);
    this.setData({
      dayList: dateArr
    });
  },

  getTime: function(year, month) {
    return this.creatDayList(year, month);
  },

  creatDayList: function(year, month) {
    const count = this.getDayNum(year, month);
    const week = new Date(year + '/' + month + '/1').getDay();
    let list = [];
    for (let i = 1; i <= count; i++) {
      let data = {};
      this.data.extraData.forEach(item => {
        const dateArr = item.date.split('-');
        if (dateArr.length === 3 && Number(dateArr[0]) === year && Number(dateArr[1]) === month && Number(dateArr[2]) === i) {
          data = item;
        }
      });
      list.push({ day: i, data: data });
    }
    for (let i = 0; i < week; i++) {
      list.unshift({ day: null, data: {} });
    }
    return list;
  },

  getDayNum: function(year, month) {
    const dayNum = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      dayNum[1] = 29;
    }
    return dayNum[month - 1];
  },

  LastMonth: function() {
    if (this.data.month > 1) {
      this.setData({
        month: this.data.month - 1
      });
      this.initApi(this.data.year, this.data.month);
    } else {
      this.LastYear(false);
      this.setData({
        month: 12
      });
      this.initApi(this.data.year, this.data.month);
    }
  },

  NextMonth: function() {
    if (this.data.month < 12) {
      this.setData({
        month: this.data.month + 1
      });
    } else {
      this.NextYear(false);
      this.setData({
        month: 1
      });
    }
    this.initApi(this.data.year, this.data.month);
  },

  LastYear: function(flag = true) {
    if (this.data.year > 2000) {
      this.setData({
        year: this.data.year - 1
      });
      if (flag) {
        this.initApi(this.data.year, this.data.month);
      }
    }
  },

  NextYear: function(flag = true) {
    this.setData({
      year: this.data.year + 1
    });
    if (flag) {
      this.initApi(this.data.year, this.data.month);
    }
  },

  // 事件处理函数
  toActive: function(event) {
    const index = event.currentTarget.dataset.index;
  },

  selectDate: function(event) {
    let day = event.currentTarget.dataset.day;
    let month = event.currentTarget.dataset.month;
    let year = event.currentTarget.dataset.year;
  
    // 更新当前选中的日期
    this.setData({
      day: day,
      month: month,
      year: year
    });
  
    // 调用函数加载当前日期的待办事项
    this.loadTasksForDate(year, month, day);
  },
  
  loadTasksForDate: function(year, month, day) {
    let tasks = this.getTasksByDate(year, month, day);
    this.setData({
      tasks: tasks
    });
  },
  
  getTasksByDate: function(year, month, day) {
    const dateKey = `${year}-${month}-${day}`;
    const { tasks, taskIndexByDate } = this.data;
    const taskIndexes = taskIndexByDate[dateKey] || [];
    return taskIndexes.map(index => tasks[index]);
  },  

  showAddEventModal: function() {
    this.setData({
      showModal: true
    });
  },

  hideModal: function() {
    this.setData({
      showModal: false
    });
  },

  inputEventTitle: function(event) {
    this.setData({
      newEventTitle: event.detail.value
    });
  },

  inputEventDetail: function(event) {
    this.setData({
      newEventDetail: event.detail.value
    });
  },

  saveEvent: function() {
    const { year, month, day, newEventTitle, newEventDetail, tasks, taskIndexByDate } = this.data;
    if (!newEventTitle.trim() || !newEventDetail.trim()) {
      wx.showToast({
        title: '标题和详情不能为空',
        icon: 'none'
      });
      return;
    }
  
    const dateKey = `${year}-${month}-${day}`;
    const newEvent = {
      title: newEventTitle,
      detail: newEventDetail,
      date: dateKey,
      created: new Date().toISOString(),
      completed: false,
      priority: 'normal'
    };
  
    tasks.push(newEvent);
    if (!taskIndexByDate[dateKey]) {
      taskIndexByDate[dateKey] = [];
    }
    taskIndexByDate[dateKey].push(tasks.length - 1);
  
    this.setData({
      showModal: false,
      tasks: tasks,
      taskIndexByDate: taskIndexByDate
    });
  
    // 存储到本地
    wx.setStorageSync('tasks', tasks);
    wx.setStorageSync('taskIndexByDate', taskIndexByDate);
  
    wx.showToast({
      title: '事项已保存',
      icon: 'success'
    });
  },

  deleteTask: function(e) {
    const index = e.currentTarget.dataset.index; // 获取任务索引
    const tasks = this.data.tasks;
    const task = tasks[index];
    const dateKey = task.date;

    wx.showModal({
        title: '确认删除',
        content: '您确定要删除这个任务吗？',
        success: (res) => {
            if (res.confirm) {
                // 用户确认删除
                tasks.splice(index, 1); // 删除选定的任务

                // 更新日期到任务索引的映射
                const indexes = this.data.taskIndexByDate[dateKey];
                const newIndexes = indexes.filter(idx => idx !== index).map(idx => idx > index ? idx - 1 : idx);
                this.data.taskIndexByDate[dateKey] = newIndexes;

                // 更新所有任务索引
                Object.keys(this.data.taskIndexByDate).forEach(key => {
                    this.data.taskIndexByDate[key] = this.data.taskIndexByDate[key].map(idx => idx > index ? idx - 1 : idx);
                });

                this.setData({
                    tasks: tasks,
                    taskIndexByDate: this.data.taskIndexByDate
                });

                // 异步更新存储并在完成后显示提示
                wx.setStorage({
                    key: 'tasks',
                    data: tasks,
                    complete: () => {
                        wx.setStorage({
                            key: 'taskIndexByDate',
                            data: this.data.taskIndexByDate,
                            complete: () => {
                                wx.showToast({
                                    title: '任务已删除',
                                    icon: 'success',
                                    duration: 2000
                                });
                            }
                        });
                    }
                });
            }
        }
    });
}
})