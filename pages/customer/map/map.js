Page({
  data: {
    address: '地址：无',
    name: '名称：无',
    longitude: '经度：无',
    latitude: '纬度：无',
    scale: 16,
    huoqu:'获取当前位置',
    xuanze:'选择位置',

    markers: [{
      id: 0,
      longitude: 123.44972,
      latitude: 41.71482,
      title: "我的位置",
      width: 50,
      height: 50
    },
    {
      id: 1,
      longitude: 123.49105,
      latitude: 41.72749,
      title: "沈阳理工大学图书馆",
      width: 50,
      height: 50
    },
    {
      id: 2,
      longitude: 123.41684,
      latitude: 41.76417,
      title: "东北大学",
      width: 50,
      height: 50
    }
    ],

    polyline: [{
      points: [
        {/**当前经纬度 */
          longitude: 123.44972,
          latitude: 41.71482
        }, {/**东北大学 */
          longitude: 123.41684,
          latitude: 41.76417
        },
        {/**沈阳理工大学 */
          longitude: 123.49105,
          latitude: 41.72749,
        }
      ],
      color: "#008000DD",
      width: 4,
      dottedLine: false,
    },
    ],

    controls: [{
      id: 1,
      iconPath: '/icons/1.jpg',
      position: {
        left: 0,
        top: 400 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },


  regionchange(e) {
    console.log(e.type)
  },

  markertap(e) {
    console.log(e.markerId)
  },

  controltap(e) {
    console.log(e.controlId)
    this.setData({
      scale: this.data.scale -= 1,
    })
  },


  test1: function () {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        console.log(res)
        that.setData({
          longitude1: longitude,
          latitude1: latitude
        })
      }
    })
  },

  test2: function () {
    var that = this
    wx.chooseLocation({
      success: function (res) {
        var address = res.address
        var latitude = res.latitude
        var longitude = res.longitude
        var name = res.name
        console.log(res)
        that.setData({
          address: '地址：' + address,
          name: '名称：' + name,
          longitude: "经度：" + longitude,
          latitude: "纬度：" + latitude
        })
      },
    })
  },

  onLoad: function () {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        console.log(res)
        that.setData({
          longitude1: longitude,
          latitude1: latitude
        })
      }
    })
  }
})