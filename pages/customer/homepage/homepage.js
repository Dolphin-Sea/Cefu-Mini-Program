Page({
  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,

    noticeHeight: 65,
    noticeUrl: ['', ''],
    interval1: 5000,
    duration1: 3000,

    testarrays: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
  },

  goCategory: function () {
    wx.navigateTo({
      url: '../category/category',
    })
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  customerLogin: function () {
    wx.navigateTo({
      url: '../../selection/customer-login/login',
    })
  },

  changeIt: function () {
    wx.showModal({
      title: '提示',
      content: '是否选择上门服务',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.navigateTo({
            url: '../navigate/shangmen/shangmen',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://480289686.dolphinsea.club/weapp/image',
      success: function (res) {
        console.log(res);
        that.setData({
          imgURLS: res.data.data
        })
      },
    })

    wx.request({
      url: 'https://480289686.dolphinsea.club/weapp/homepage1',
      success: function (res) {
        console.log(res);
        that.setData({
          homepage1: res.data.data
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
    wx.showToast({
      title: 'loading...',
      icon: 'loading',
      duration: 3000,
    })
    console.log('onPullDownRefresh', new Date())
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showToast({
      title: '加载更多',
      icon: 'loading',
      duration: 3000
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: 'DolphinSea测试标题',
      path: '/pages/customer/homepage'
    }
  },


  washCar: function (e) {
    wx.navigateTo({
      url: '../navigate/xiche/xiche',
    })
  },

  fixCar: function () {
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },

  parkCar: function () {
    wx.navigateTo({
      url: '../navigate/park/park',
    })
  },
  dateCar: function () {
    wx.navigateTo({
      url: '../navigate/appointment/appointment',
    })
  },

  titleText: function () {
    wx.showModal({
      title: '提示',
      content: '暂未开通此功能',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  oilCar: function () {
    wx.redirectTo({/*如果此处设置为nav导航，那么后面支付结果页面还可以返回到界面，是不可以的*/
      url: '../chongzhi/chongzhi',
    })
  },

  gosearch: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },

  introduce: function () {
    wx.navigateTo({
      url: '../introduce/introduce',
    })
  },

  toutiao: function () {
    wx.switchTab({
      url: '../toutiao/toutiao',
    })
  },

  test: function () {
    wx.navigateTo({
      url: '../test/test',
    })
  },

  practice: function () {
    wx.navigateTo({
      url: '../test1/test1',
    })
  },

  emergency: function () {
    wx.makePhoneCall({
      phoneNumber: '18801048715',
    })
  },

  locateCar: function () {
    wx.showModal({
      title: '未开启定位',
      content: '开启位置信息，可为您匹配最近的路线',
      confirmText: "去设置",
      cancelText: "暂不",
      duration: 1500,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})