// pages/skuRanking/skuRanking.js
Page({

    data: {
        list: [{
                classCover: '../../images/clas.jpg',
                title: 'SSI国际日本酒讲师教程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                type:2,
                salseTotal: 334,
                viewAmt: 232
            }, {
                classCover: '../../images/clas.jpg',
                title: 'SSI国际日本酒讲师教程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                type:2,
                salseTotal: 334,
                salseTotal: 122,
                viewAmt: 232
            },
            {
                classCover: '../../images/clas.jpg',
                title: 'SSI国际日本酒讲师教程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                type:2,
                salseTotal: 334,
                salseTotal: 1,
                viewAmt: 232
            }, {
                classCover: '../../images/clas.jpg',
                title: 'SSI国际日本酒讲师教程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                type:2,
                salseTotal: 334,
                viewAmt: 232
            },
            {
                classCover: '../../images/clas.jpg',
                title: 'SSI国际日本酒讲师教程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                type:2,
                salseTotal: 334,
                viewAmt: 232
            },
            {
                classCover: '../../images/clas.jpg',
                title: 'SSI国际日本酒讲师教程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                type:2,
                salseTotal: 334,
                viewAmt: 232
            }, {
                classCover: '../../images/clas.jpg',
                title: 'SSI国际日本酒讲师教程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                type:2,
                salseTotal: 334,
                viewAmt: 232
            },
            {
                classCover: '../../images/clas.jpg',
                title: 'SSI国际日本酒讲师教程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                type:2,
                salseTotal: 334,
                viewAmt: 232
            }

        ],
    },

    toggleCat(e) {
        wx.setNavigationBarTitle({
            title: e.target.dataset.title,
        })
        this.setData({
            currentTab: e.target.dataset.index
        })
    },
    
    onShareAppMessage: function() {

    }
})