import moneyArr from '../../../utils/chongzhi.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentMoney: 10,
    moneyArr: moneyArr,
    //记录上一次点击的充值选项的id
    lastMoneyId: 0,
    judge: true,
  },

  //充值协议
  chargeAgree: function () {
    console.log("点击充值协议")
    wx.showModal({
      title: '提示',
      content: '查看充值协议',
    })
  },
  
  //点击去充值
  gotoRecharged: function () {
    console.log("充值按钮")
    wx.showModal({
      title: '提示',
      content: '是否确认充值？',
      success: function (res) {
        if (!res.confirm) {
          return;
        }
        wx.redirectTo({
          url: '../result/result',
        })
        wx.showToast({
          title: '充值成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },

  change: function () {
    var that = this
    that.setData({
      judge: !this.data.judge,
    })
  },

  //点击充值选项
  chioceAct: function (res) {
    var that = this
    console.log("点击充值选项")
    console.log(res.currentTarget.dataset.currentid)
    var id = res.currentTarget.dataset.currentid
    if (id == 10) {
      //10元
      that.setData({
        "moneyArr[0].color": "#FFFFFF",
        "moneyArr[0].background": "#34B5E3",
        "moneyArr[1].color": "#34B5E3",
        "moneyArr[1].background": "#FFFFFF",
        "moneyArr[2].color": "#34B5E3",
        "moneyArr[2].background": "#FFFFFF",
        "moneyArr[3].color": "#34B5E3",
        "moneyArr[3].background": "#FFFFFF",
        "lastMoneyId": 0,
        "currentMoney": 10
      })
    } else if (id == 20) {
      //20元
      that.setData({
        "moneyArr[1].color": "#FFFFFF",
        "moneyArr[1].background": "#34B5E3",
        "moneyArr[0].color": "#34B5E3",
        "moneyArr[0].background": "#FFFFFF",
        "moneyArr[2].color": "#34B5E3",
        "moneyArr[2].background": "#FFFFFF",
        "moneyArr[3].color": "#34B5E3",
        "moneyArr[3].background": "#FFFFFF",
        "lastMoneyId": 1,
        "currentMoney": 20
      })
    } else if (id == 50) {
      //50元
      that.setData({
        "moneyArr[2].color": "#FFFFFF",
        "moneyArr[2].background": "#34B5E3",
        "moneyArr[1].color": "#34B5E3",
        "moneyArr[1].background": "#FFFFFF",
        "moneyArr[0].color": "#34B5E3",
        "moneyArr[0].background": "#FFFFFF",
        "moneyArr[3].color": "#34B5E3",
        "moneyArr[3].background": "#FFFFFF",
        "lastMoneyId": 2,
        "currentMoney": 50
      })
    } else if (id == 100) {
      //100元
      that.setData({
        "moneyArr[3].color": "#FFFFFF",
        "moneyArr[3].background": "#34B5E3",
        "moneyArr[1].color": "#34B5E3",
        "moneyArr[1].background": "#FFFFFF",
        "moneyArr[2].color": "#34B5E3",
        "moneyArr[2].background": "#FFFFFF",
        "moneyArr[0].color": "#34B5E3",
        "moneyArr[0].background": "#FFFFFF",
        "lastMoneyId": 3,
        "currentMoney": 100
      })
    }
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