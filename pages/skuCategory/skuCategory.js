// pages/rankingFree/rankingFree.js
Page({

    data: {
        hasMore:true,
        currentTab:0,
        list: [
            {
                skuCover: '../../images/b1.jpg',
                title: 'SSI国际日本酒讲师教程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                type: 1,
                saleAmt: 232
            }, {
                skuCover: '../../images/b1.jpg',
                title: 'SSI国际日本酒讲师教程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                type: 1,
                saleAmt: 232
            },
            {
                skuCover: '../../images/b1.jpg',
                title: 'SSI国际日本酒讲师教程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                type: 1,
                saleAmt: 232
            }, {
                skuCover: '../../images/b1.jpg',
                title: 'SSI国际日本酒讲师教程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                type: 1,
                saleAmt: 232
            },
            {
                skuCover: '../../images/b1.jpg',
                title: 'SSI国际日本酒讲师教程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                type: 1,
                saleAmt: 232
            },
            {
                skuCover: '../../images/b1.jpg',
                title: 'SSI国际日本酒讲师教程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                type: 1,
                saleAmt: 232
            }, {
                skuCover: '../../images/b1.jpg',
                title: 'SSI国际日本酒讲师教程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                type: 1,
                saleAmt: 232
            },
            {
                skuCover: '../../images/b1.jpg',
                title: 'SSI国际日本酒讲师教程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                type: 1,
                saleAmt: 232
            }

        ],
    },
    toggleCat(e){
        this.setData({
            currentTab:e.target.dataset.index
        })
    },
    onShareAppMessage: function () {

    }
})