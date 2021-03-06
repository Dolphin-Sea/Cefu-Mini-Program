Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  returnSelection: function () {
    wx.redirectTo({
      url: '../../selection/selection',
    })
  },

  goMember:function(){
    wx.navigateTo({
      url: '../member/member',
    })
  },
  goPrice:function(){
    wx.navigateTo({
      url: '../price/price',
    })
  },
  goStorage:function(){
    wx.navigateTo({
      url: '../storage/storage',
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