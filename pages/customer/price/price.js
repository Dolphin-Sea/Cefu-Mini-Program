import menus from '../../../utils/data.js'
/*price.js-price-customer-pages同级utils
import menus from '/utils/data.js'不可以像图片那样越过上级路径去使用*/

Page({

  data: {
    menus: menus,/*伪后端数据接口*/
    selectedMenuId: 1,/**最初的时候，将数组的第一个显示到视图，之后随着点击，修改id的值来继续显示之后的视图 */
    total: {
      count: 0,
      money: 0
    },
    sign: '¥'
  },

  selectMenu: function (event) {
    let data = event.currentTarget.dataset/**定义一个data对象，将事件对象当前目标的dataset赋值给data对象 */
    this.setData({
      toView: data.tag,
      selectedMenuId: data.id
    })
  },


  addCount: function (event) {/**添加 */
    console.log(event);
    let data = event.currentTarget.dataset
    let total = this.data.total
    let menus = this.data.menus
    //wxml中自定义data-id和cid,分别对应dish.id和menu.id，通过是事件绑定将这两个属性传递到js处理
    //menus指的是data.js中的menus数组
    /*这句话是es6中数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。*/

    /**返回的是数组成员对象 */
    let menu = menus.find((v) => v.id == data.cid)

    /**这个menu指的是前面menus给赋值的变量 */
    let dish = menu.dishs.find((v) => v.id == data.id)

    dish.count += 1;
    total.count += 1
    total.money += dish.price

    this.setData({
      'menus': menus,
      'total': total
    })
    console.log(this.data.menus)
  },

  minusCount: function (event) {/**减少 */
    let data = event.currentTarget.dataset
    let total = this.data.total
    let menus = this.data.menus
    let menu = menus.find(function (v) {
      return v.id == data.cid
    })
    let dish = menu.dishs.find(function (v) {
      return v.id == data.id
    })
    dish.count -= 1;
    total.count -= 1
    total.money -= dish.price
    this.setData({
      'menus': menus,
      'total': total
    })
  },



  pay: function () {
    wx.showModal({
      title: '提示',
      content: '是否确认付款？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.redirectTo({
            url: '../result/result',
          })
          wx.showToast({
            title: '付款成功',
            icon: 'success',
            duration: 2000
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
      url: 'https://480289686.dolphinsea.club/weapp/customerPrice',
      success: function (res) {
        console.log(res);
        that.setData({
          customerPrice: res.data.data
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