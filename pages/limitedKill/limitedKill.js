// pages/limitedKill/limitedKill.js
Page({

    data: {
        currentTab:1,
        showCouponDetail:false
    },

   toggleTab(e){
       this.setData({
           currentTab:e.target.dataset.index
       })
   },
    toSkuDetail(){
        wx.navigateTo({
            url: '/pages/skuDetail/skuDetail?isKillSku=true',
        })
    },
    onShareAppMessage: function () {

    },
    getCoupon(){
        this.setData({
            showCouponDetail: true

        })
    },
    closeCoupon(){
        this.setData({
            showCouponDetail:false

        })
    }
})