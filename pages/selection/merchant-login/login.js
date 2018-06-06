
/*var countdown = 60;
var settime = function (that) {
  if (countdown == 0) {
    that.setData({
      is_show: true
    })
    countdown = 60;
    return;
  } else {
    that.setData({
      is_show: false,
      last_time: countdown
    })
    countdown--
  }
  setTimeout(function () {
    settime(that)

  }, 1000)
}*/
//以下为ES6语法，箭头函数
var countdown = 60;
var settime = that => {
  if (countdown == 0) {
    that.setData({
      is_show: true
    })
    countdown = 60;
    return;
  } else {
    that.setData({
      is_show: false,
      last_time: countdown
    })
    countdown--
  }
  setTimeout(function () {
    settime(that)

  }, 1000)
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    login: true,
    placeholder: 'placeholder',
    password: true,
    last_time: '',
    isShow: true,
    login1:'登录',
    regis:'注册',
    sub1:'登录',
    tip:'提示：用户名admin，密码123456',
    tuichu:'退出',
    sex1:'性别',
    radio1:'男',
    radio2:'女',
    job1:'职责',
    check1:'维修',
    check2:'清理打扫',
    check3:'洗车',
    check4:'收银',
    check5:'人事',
    check6:'老板不用干活！还有钱拿！',
    getcode:'获取验证码',
    again:'重新发送',
    s:'秒',
    tijiao:'提交',
    reset:'重置',
    unimportant:'暂时不写下方margin距离',
  },

  tuichu: function () {
    wx.navigateTo({
      url: '../selection',
    })
  },
  clickVerify: function () {
    this.setData({
      isShow: !this.data.isShow
    })
    settime(this);
  },

  //tab切换
  onLogin: function () {
    this.setData({
      login: true
    })
  },
  onRegister: function () {
    this.setData({
      login: false
    })
  },

  //点击登录
  formSubmit1: function (e) {
    var admin = e.detail.value.user;
    var password = e.detail.value.password;
    if (admin === 'admin' && password === "123456") {
      /*wx.navigateTo({
        url: '../../merchant/merchant',
      })*/
      wx.redirectTo({
        url: '../../merchant/homepage/homepage',
      })
      /*wx.switchTab({
        url: '../../merchant/homepage/homepage',
      })*/
    }
    console.log(e.detail.value);
  },

  formSubmit2: function (e) {
    var formdata = e.detail.value;
    console.log(formdata)
    this.setData({
      /*username:this.data.user,
      pass:this.data.password,
      name:this.data.name,
      telephone:this.data.telephone,
      code:this.data.code,*/

      username: e.detail.value.user,
      pass: e.detail.value.password,
      name: e.detail.value.name,
      telephone: e.detail.value.telephone,
      code: e.detail.value.code,
    })
  },

  formReset2: function (event) {
    console.log(event)
  },

  change: function () {
    this.setData({
      password: !this.data.password
    })
  },

  change1: function (e) {
    console.log(e.detail.value)
    this.setData({
      sex: e.detail.value
    })
  },

  change2: function (e) {
    console.log(e.detail.value)
    this.setData({
      job: e.detail.value
    })
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

  }
})