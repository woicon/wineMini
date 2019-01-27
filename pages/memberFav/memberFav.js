// pages/memberFav/memberFav.js
Page({

    data: {
        currentTab:2,
        course: [
            {
                classCover: '../../images/clas.jpg',
                title: '苏格兰官方威士忌大使认证课程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                type: 1,
            }, {
                classCover: '../../images/clas.jpg',
                title: '苏格兰官方威士忌大使认证课程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                type: 2,
            }, {
                classCover: '../../images/clas.jpg',
                title: '苏格兰官方威士忌大使认证课程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                type: 2,
            }, {
                classCover: '../../images/clas.jpg',
                title: '苏格兰官方威士忌大使认证课程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                type: 2,
            }, {
                classCover: '../../images/clas.jpg',
                title: '苏格兰官方威士忌大使认证课程',
                subtitle: "专为餐饮人士打造",
                salePrice: '1999',
                originalPrice: '2500',
                type: 2,
            }
        ],
        post:[
            {
                cover:'../../images/sku.jpg',
                title:'经典传承碰撞创意灵感',
                exports:'带给更多消费者极致的葡萄酒体验的愿景，发掘葡萄酒与美食之间味蕾的碰撞'
            }, {
                cover: '../../images/sku.jpg',
                title: '经典传承碰撞创意灵感',
                exports: '带给更多消费者极致的葡萄酒体验的愿景，发掘葡萄酒与美食之间味蕾的碰撞'
            },
            {
                cover: '../../images/sku.jpg',
                title: '经典传承碰撞创意灵感',
                exports: '带给更多消费者极致的葡萄酒体验的愿景，发掘葡萄酒与美食之间味蕾的碰撞'
            },
            {
                cover: '../../images/sku.jpg',
                title: '经典传承碰撞创意灵感',
                exports: '带给更多消费者极致的葡萄酒体验的愿景，发掘葡萄酒与美食之间味蕾的碰撞'
            }, {
                cover: '../../images/sku.jpg',
                title: '经典传承碰撞创意灵感',
                exports: '带给更多消费者极致的葡萄酒体验的愿景，发掘葡萄酒与美食之间味蕾的碰撞'
            }, {
                cover: '../../images/sku.jpg',
                title: '经典传承碰撞创意灵感',
                exports: '带给更多消费者极致的葡萄酒体验的愿景，发掘葡萄酒与美食之间味蕾的碰撞'
            }, {
                cover: '../../images/sku.jpg',
                title: '经典传承碰撞创意灵感',
                exports: '带给更多消费者极致的葡萄酒体验的愿景，发掘葡萄酒与美食之间味蕾的碰撞'
            }, {
                cover: '../../images/sku.jpg',
                title: '经典传承碰撞创意灵感',
                exports: '带给更多消费者极致的葡萄酒体验的愿景，发掘葡萄酒与美食之间味蕾的碰撞'
            }
        ],
        list: [{
            classCover: '../../images/clas.jpg',
            title: 'SSI国际日本酒讲师教程',
            subtitle: "专为餐饮人士打造",
            salePrice: '1999',
            originalPrice: '2500',
            type: 2,
            salseTotal: 334,
            viewAmt: 232
        }, {
            classCover: '../../images/clas.jpg',
            title: 'SSI国际日本酒讲师教程',
            subtitle: "专为餐饮人士打造",
            salePrice: '1999',
            originalPrice: '2500',
            type: 2,
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
            type: 2,
            salseTotal: 334,
            salseTotal: 1,
            viewAmt: 232
        }, {
            classCover: '../../images/clas.jpg',
            title: 'SSI国际日本酒讲师教程',
            subtitle: "专为餐饮人士打造",
            salePrice: '1999',
            originalPrice: '2500',
            type: 2,
            salseTotal: 334,
            viewAmt: 232
        },
        {
            classCover: '../../images/clas.jpg',
            title: 'SSI国际日本酒讲师教程',
            subtitle: "专为餐饮人士打造",
            salePrice: '1999',
            originalPrice: '2500',
            type: 2,
            salseTotal: 334,
            viewAmt: 232
        },
        {
            classCover: '../../images/clas.jpg',
            title: 'SSI国际日本酒讲师教程',
            subtitle: "专为餐饮人士打造",
            salePrice: '1999',
            originalPrice: '2500',
            type: 2,
            salseTotal: 334,
            viewAmt: 232
        }, {
            classCover: '../../images/clas.jpg',
            title: 'SSI国际日本酒讲师教程',
            subtitle: "专为餐饮人士打造",
            salePrice: '1999',
            originalPrice: '2500',
            type: 2,
            salseTotal: 334,
            viewAmt: 232
        },
        {
            classCover: '../../images/clas.jpg',
            title: 'SSI国际日本酒讲师教程',
            subtitle: "专为餐饮人士打造",
            salePrice: '1999',
            originalPrice: '2500',
            type: 2,
            salseTotal: 334,
            viewAmt: 232
        }

        ],
    },
  
    toggleTab(e){
        this.setData({
            currentTab:e.target.dataset.index
        })
    }
})