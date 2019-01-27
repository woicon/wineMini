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
        isImgCat:false,
        category: ['分类1', '分类2', '分类3', '分类3'],
       // category: ['../../images/ic1.jpg', '../../images/ic2.jpg',  '../../images/ic3.jpg',  '../../images/ic4.jpg'],
    },
    toggleCat(e){
        this.setData({
            currentTab:e.target.dataset.index
        })
    },
    onShareAppMessage: function () {

    }
})