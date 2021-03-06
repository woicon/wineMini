let app = getApp()
Page({
    data: {
        currentBanner:0,
        currentTab:0,
        classList: [
            {
                classCover: '../../images/clas.jpg',
                title: '苏格兰官方威士忌大使认证课程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                salseTotal: 2911,
                type: 1,
                viewAmt:'29万'
            }, {
                classCover: '../../images/clas.jpg',
                title: '苏格兰官方威士忌大使认证课程',
                salePrice: '1999',
                originalPrice: '2500',
                salseTotal: 2911,
                type: 2,
                viewAmt: '29万'
            }
        ], 
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
            }
        ], 
        masterList: [
            {
                name: '李美宇',
                tag: ['三级酒师', '日本讲酒师'],
                img: '../../images/master.jpg',
                price:2311.00
            },
            {
                name: '李美宇',
                tag: ['三级酒师', '日本讲酒师'],
                img: '../../images/master.jpg',
                price: 2311.00
            }, {
                name: '李美宇',
                tag: ['三级酒师', '日本讲酒师'],
                img: '../../images/master.jpg',
                price: 2311.00
            }, {
                name: '李美宇',
                tag: ['三级酒师', '日本讲酒师'],
                img: '../../images/master.jpg',
                price: 2311.00
            }, {
                name: '李美宇',
                tag: ['三级酒师', '日本讲酒师'],
                img: '../../images/master.jpg',
                price: 2311.00
            },
        ]
    },

    onLoad (options) {

    },
    bannerChange(e){
        console.log(e)
        this.setData({
            currentBanner:e.detail.current
        })
    },
    toggleLesson(e){
        console.log(e)
        this.setData({
            currentTab: e.target.dataset.index
        })
    }
})