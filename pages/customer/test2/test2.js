// pages/tab1/tab1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    judge1: true,
    judge2: false,
    judge3: false,
    judge4: false,
    judge5: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  test1: function () {
    this.setData({
      judge1: true,
      judge2: false,
      judge3: false,
      judge4: false,
      judge5: false,
    })
  },


  test2: function () {
    this.setData({
      judge1: false,
      judge2: true,
      judge3: false,
      judge4: false,
      judge5: false,
    })
  },

  test3: function () {
    this.setData({
      judge1: false,
      judge2: false,
      judge3: true,
      judge4: false,
      judge5: false,
    })
  },
  test4: function () {
    this.setData({
      judge1: false,
      judge2: false,
      judge3: false,
      judge4: true,
      judge5: false,
    })
  },
  test5: function () {
    this.setData({
      judge1: false,
      judge2: false,
      judge3: false,
      judge4: false,
      judge5: true,
    })
  }


})