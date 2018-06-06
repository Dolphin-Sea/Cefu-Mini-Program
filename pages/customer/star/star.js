var util = require('../../../utils/util.js')/*star文件夹，customer文件夹，pages文件夹，utils文件夹，util.js文件*/
// pages/customer/star/star.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'my_template',
    myObj: {
      key1: '000',
      key2: '111',
      key3: '222',
    },
    myObj2: {
      key1: 'aaa',
      key2: 'bbb',
      key3: 'ccc',
    }
  },
  
  exit: function () {
    wx.redirectTo({
      url: '../../selection/selection',
    })
  },
  /**成功上传图片！！！ */

  click: function () {
    var that = this
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        util.showBusy('正在上传')
        var filePath = res.tempFilePaths[0]
        // 上传图片
        wx.uploadFile({
          url: 'https://480289686.dolphinsea.club/weapp/upload',
          filePath: filePath,
          name: 'file',
          success: function (res) {
            util.showSuccess('上传图片成功')
            console.log(res)
            res = JSON.parse(res.data)
            console.log(res)
            that.setData({
              imgUrl: res.data.imgUrl
            })
          },
          fail: function (e) {
            util.showModel('上传图片失败')
          }
        })
      },
      fail: function (e) {
        console.error(e)
      }
    })
  },
  /**以上部分为上传图片代码 */



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