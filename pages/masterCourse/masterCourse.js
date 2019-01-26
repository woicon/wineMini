// pages/masterCourse/masterCourse.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [
            {
                classCover: '../../images/clas.jpg',
                title: '苏格兰官方威士忌大使认证课程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                salseTotal: 2911,
                type: 1,
            }, {
                classCover: '../../images/clas.jpg',
                title: '苏格兰官方威士忌大使认证课程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                salseTotal: 2911,
                type: 1,
            }, {
                classCover: '../../images/clas.jpg',
                title: '苏格兰官方威士忌大使认证课程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                salseTotal: 2911,
                type: 1,
            }, {
                classCover: '../../images/clas.jpg',
                title: '苏格兰官方威士忌大使认证课程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                salseTotal: 2911,
                type: 1,
            }, {
                classCover: '../../images/clas.jpg',
                title: '苏格兰官方威士忌大使认证课程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                salseTotal: 2911,
                type: 1,
            }, {
                classCover: '../../images/clas.jpg',
                title: '苏格兰官方威士忌大使认证课程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                salseTotal: 2911,
                type: 1,
            }
        ]
    },

    toPlay(){
        wx.navigateTo({
            url: '/pages/play/play',
        })
    },
    onShareAppMessage () {

    }
})