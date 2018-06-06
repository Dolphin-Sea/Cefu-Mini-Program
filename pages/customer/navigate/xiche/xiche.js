Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: 'https://480289686.dolphinsea.club/weapp/weather',

      data: {
        x: ' ',
        y: ' '
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method:'GET',
      //dataType:'JSON',
      success: function (res) {
        console.log(res.data)
        that.setData({
          weather:res.data
        })
      },
      fail: function (res) {
        console.log('404')
        console.log(res.data)
      },
      complete: function () {
        console.log('完成服务器端请求')
      }
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