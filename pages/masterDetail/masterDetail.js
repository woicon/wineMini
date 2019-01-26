// pages/masterDetail/masterDetail.js
Page({

    data: {
        detail:{
            name:"李美玉",
            masterImg:'../../images/master.jpg',
            tag:['日本酒讲师','待酒师4级'],
            intro:'一位好的侍酒师不仅要具备专业酒水基础知识和技能，还要懂得设计葡萄酒配菜、具有葡萄酒的鉴赏能力、有深厚的葡萄酒品评基础、熟悉酒品采购要求以及善于对酒窖进行管理。侍酒师要有基本的美学修养，有敏感的时尚感知，有高尚的品位，才能有好的鉴赏力，才能真的懂酒。',
            like:9002,
            clas:[
                {
                    classCover:'../../images/clas.jpg',
                    title:'苏格兰官方威士忌大使认证课程',
                    subtitle:"专为餐饮人士打造",
                    salePrice:'1999',
                    originalPrice:'2500',
                    type:1,
                }, {
                    classCover: '../../images/clas.jpg',
                    title: '苏格兰官方威士忌大使认证课程',
                    salePrice: '1999',
                    originalPrice: '2500',
                    type: 2,
                }
            ],
            recommended: [
                {
                    classCover: '../../images/clas.jpg',
                    title: '苏格兰官方威士忌大使认证课程',
                    subtitle: "专为餐饮人士打造",
                    salePrice: '1999',
                    originalPrice: '2500',
                    salseTotal:2911,
                    type: 1,
                }, {
                    classCover: '../../images/clas.jpg',
                    title: '苏格兰官方威士忌大使认证课程',
                    salePrice: '1999',
                    originalPrice: '2500',
                    salseTotal: 2911,
                    type: 2,
                }
            ]
        }
    },

   
    onShareAppMessage: function () {

    }
})