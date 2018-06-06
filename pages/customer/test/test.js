// pages/customer/test/test.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    test: "aaa",
    messages: [],
    connect:'开启连接',
    send:'发送消息',
    close:'关闭连接',
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://4byo6pb2.qcloud.la/weapp/hello',
      success: function (res) {
        console.log(res);
        that.setData({
          movie: res.data
        })
      },
    })

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
      url: 'wss://4byo6pb2.ws.qcloud.la',
    })
  },


  sendBtnClick: function () {
    wx.sendSocketMessage({
      data: '你好，我是小程序',
    })
  },

  closeBtnClick: function () {
    wx.closeSocket({

    })
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

  },

})