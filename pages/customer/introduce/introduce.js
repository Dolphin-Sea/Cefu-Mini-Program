Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*imglist: ['https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1526741337519-SyGvFhpRG.jpg', 'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1526178685567-S18YmQBRf.jpg',
      'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1526958702130-BkUd5--JQ.jpg',
      'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1525934942942-H1vviwZRf.jpg',
      'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1525937036014-rJ4cXOWRG.jpg',
      'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1525937052194-SyVi7_bCM.jpg'],*/
    arrays: ['', '', '', '', '', ''],
  },

  preview1: function (e) {
    wx.previewImage({
      //当前显示下表
      current: 'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1526741337519-SyGvFhpRG.jpg',
      //数据源
      urls: ['https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1526741337519-SyGvFhpRG.jpg', 'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1526178685567-S18YmQBRf.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1526958702130-BkUd5--JQ.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1525934942942-H1vviwZRf.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1525937036014-rJ4cXOWRG.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1525937052194-SyVi7_bCM.jpg'],
    })
  },

  preview2: function (e) {
    wx.previewImage({
      //当前显示下表
      current: 'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1526178685567-S18YmQBRf.jpg',
      //数据源
      urls: ['https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1526741337519-SyGvFhpRG.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1526178685567-S18YmQBRf.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1526958702130-BkUd5--JQ.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1525934942942-H1vviwZRf.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1525937036014-rJ4cXOWRG.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1525937052194-SyVi7_bCM.jpg'],
    })
  },


  preview3: function (e) {
    wx.previewImage({
      //当前显示下表
      current: 'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1526958702130-BkUd5--JQ.jpg',
      //数据源
      urls: ['https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1526741337519-SyGvFhpRG.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1526178685567-S18YmQBRf.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1526958702130-BkUd5--JQ.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1525934942942-H1vviwZRf.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1525937036014-rJ4cXOWRG.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1525937052194-SyVi7_bCM.jpg'],
    })
  },



  preview4: function (e) {
    wx.previewImage({
      //当前显示下表
      current: 'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1525934942942-H1vviwZRf.jpg',
      //数据源
      urls: ['https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1526741337519-SyGvFhpRG.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1526178685567-S18YmQBRf.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1526958702130-BkUd5--JQ.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1525934942942-H1vviwZRf.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1525937036014-rJ4cXOWRG.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1525937052194-SyVi7_bCM.jpg'],
    })
  },

  preview5: function (e) {
    wx.previewImage({
      //当前显示下表
      current: 'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1525937036014-rJ4cXOWRG.jpg',
      //数据源
      urls: ['https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1526741337519-SyGvFhpRG.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1526178685567-S18YmQBRf.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1526958702130-BkUd5--JQ.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1525934942942-H1vviwZRf.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1525937036014-rJ4cXOWRG.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1525937052194-SyVi7_bCM.jpg'],
    })
  },

  preview6: function (e) {
    wx.previewImage({
      //当前显示下表
      current: 'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1525937052194-SyVi7_bCM.jpg',
      //数据源
      urls: ['https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1526741337519-SyGvFhpRG.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1526178685567-S18YmQBRf.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1526958702130-BkUd5--JQ.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1525934942942-H1vviwZRf.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1525937036014-rJ4cXOWRG.jpg',
        'https://qcloudtest-1256509124.cos.ap-guangzhou.myqcloud.com/1525937052194-SyVi7_bCM.jpg'],
    })
  },

  fankui: function () {
    wx.navigateTo({
      url: '../fankui/fankui',
    })
  },

  dial: function () {
    wx.makePhoneCall({
      phoneNumber: '18801048715',
    })
  },

  goLocation: function () {
    wx.chooseLocation({
      success: function (res) {
        console.log(res)
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://480289686.dolphinsea.club/weapp/introduce',
      success: function (res) {
        console.log(res);
        that.setData({
          introduce: res.data.data
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
  onShareAppMessage: function (res) {
    return {
      title: '车福汽修地址及联系方式',
      path: '/pages/customer/introduce'
    }
  }
})