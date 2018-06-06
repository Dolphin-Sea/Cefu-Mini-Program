// pages/customer/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrays: ['', '', '', ''],
    icons: ["/icons/25.jpg", '/icons/21.jpg', "/icons/22.jpg", "/icons/23.jpg"],
    bindtaps: ['goMap', 'goTest2'],
    arrays1: ['', '', '', ''],
    icons1: ["/icons/21.jpg", '/icons/22.jpg', "/icons/23.jpg", "/icons/24.jpg"],

  },

  goMap: function () {
    wx.navigateTo({
      url: '../../customer/map/map',/**catagory文件夹，pages文件夹，customer文件夹 */
    })
  },

  goTest2: function () {
    wx.navigateTo({
      url: '../../customer/test2/test2',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://480289686.dolphinsea.club/weapp/commonData',
      success: function (res) {
        console.log(res);
        that.setData({
          commonData: res.data.data
        })
      },
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

  }
})