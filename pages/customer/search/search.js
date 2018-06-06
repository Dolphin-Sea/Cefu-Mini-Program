Page({

  data: {
    title: 'search',
    searchText: null,/*搜索框中输入的文字；历史搜索数组，循环输出；chooseHistory为选中变色的index*/
    history: [],
    chooseHistory: null,
    judge: true,

    
  },


  /**
   * 清空搜索记录
   */
  cleanHistory: function () {
    this.setData({
      history: [],
      judge: false
    });
    wx.removeStorageSync('history');
  },


  /**
    * 改变标签选择，当前选择目标的序号
    */
  chooseTip: function (e) {
    var index = e.currentTarget.dataset.choose;
    this.setData({
      chooseHistory: index
    });
  },


  /**
   * 搜索查询
   */
  searchTest: function (e) {/*先定义searchText为空，然后有一个事件监听函数，来监听输入的文字，历史记录统一type为btn,点击搜索时分3种情况...1为空；2为等于btn；3为不等，则显示到下方历史记录*/
    var searchText = null;
    if (e.currentTarget.dataset.type === 'btn') {
      // 和下方历史记录相等
      console.log(this.data.searchText);
      searchText = this.data.searchText;
    }
    else {
      // 打字框不等于下方历史记录
      console.log(e.detail.value);
      searchText = e.detail.value;
    }

    if (searchText === null) {
      wx.showModal({
        title: '提示',
        content: '输入信息不可为空！',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }

    var that = this;
    // 设置缓存
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
    try {
      for (var _iterator = that.data.history[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var index = _step.value;
        if (index === searchText) return;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
    var history = that.data.history;
    console.log(history);
    if (!history) {
      history = [searchText];
      that.data.history = history;
    } else {
      var count = history.unshift(searchText);
      if (count >= 10) {
        that.data.history.pop();
      }
    }
    this.setData({
      chooseHistory: 0,
      judge: true
    });
    wx.setStorage({
      key: 'history',
      data: that.data.history,
      success: function success() {
        that.setData({
          history: wx.getStorageSync('history')
        });
      }
    });
  },
  /**
 * 键盘输入改变搜索结果
 */
  searchInput: function searchInput(e) {
    console.log(e.detail.value);
    this.setData({
      searchText: e.detail.value
    });
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
    // 读取搜索历史
    var history = wx.getStorageSync('history');
    if (!history) {
      this.setData({
        judge: false
      });
    }
    this.setData({
      history: history
    });
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
