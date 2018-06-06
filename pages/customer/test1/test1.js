// pages/customer/test1/test1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    test:"bbb",
    testdata: [], //服务集市列表
    scrolltop: null, //滚动位置
    page: 0,  //分页
    messages: [],
    connect: '开启连接',
    send: '发送消息',
    close: '关闭连接',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://480289686.dolphinsea.club/weapp/helloworld',
      success: function (res) {
        console.log(res);
        that.setData({
          movie: res.data
        })
      },
    })

    this.fetchTestData();
    //服务器监听发来的消息
    wx.onSocketMessage(function (res) {
      console.log(res)
      var msg = that.data.messages
      msg.push(res.data)
      console.log(msg)
      that.setData({
        messages: msg
      })
    })
  },


  openBtnClick: function () {
    wx.connectSocket({
      url: 'wss://pyoybq3v.ws.qcloud.la',
    })
  },


  sendBtnClick: function () {
    wx.sendSocketMessage({
      data: '生产环境你好，我是小程序',
    })
  },

  closeBtnClick: function () {
    wx.closeSocket({

    })
  },

  fetchTestData: function () {
    let _this = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })
    const perpage = 5;
    this.setData({
      page: this.data.page + 1
    })
    const page = this.data.page;
    const newlist = [];
    for (var i = (page - 1) * perpage; i < page * perpage; i++) {
      newlist.push({
        "id": i + 1,
        "name": "微信小程序上拉加载" + (i + 1)
      })
    }
    setTimeout(() => {
      _this.setData({
        testdata: _this.data.testdata.concat(newlist)
      })
    }, 1500)
  },

  scrollHandle: function (e) { //滚动事件
    this.setData({
      scrolltop: e.detail.scrollTop
    })
  },
  goToTop: function () { //回到顶部
    this.setData({
      scrolltop: 0
    })
  },
  scrollLoading: function () { //滚动加载
    this.fetchTestData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})