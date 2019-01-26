// pages/professional/professional.js
Page({

    data: {
        detail: {
            cover:'../../images/masters.jpg',
            intro: "一位好的侍酒师不仅要具备专业酒水基础知识和技能，还要懂得设计葡萄酒配菜、具有葡萄酒的鉴赏能力、有深厚的葡萄酒品评基础、熟悉酒品采购要求以及善于对酒窖进行管理。",
            name: '刘玉梅',
            masterTitle: "日本讲酒师",
            skill: [
                ['日本酒', '讲师', '待酒师5级'],
                ['日本酒', '讲师', '待酒师5级']
            ],
            intro:'一位好的侍酒师不仅要具备专业酒水基础知识和技能，还要懂得设计葡萄酒配菜、具有葡萄酒的鉴赏能力、有深厚的葡萄酒品评基础、熟悉酒品采购要求以及善于对酒窖进行管理。',
            clas: [
                {
                    classCover: '../../images/clas.jpg',
                    title: 'SSI国际日本酒讲师教程',
                    subtitle: "专为餐饮人士打造",
                    salePrice: '1999',
                    originalPrice: '2500',
                    type: 1,
                }, {
                    classCover: '../../images/clas.jpg',
                    title: 'SSI国际日本酒讲师教程',
                    salePrice: '1999',
                    originalPrice: '2500',
                    type: 2,
                },
                {
                    classCover: '../../images/clas.jpg',
                    title: 'SSI国际日本酒讲师教程',
                    salePrice: '1999',
                    originalPrice: '2500',
                    type: 2,
                }
                
            ],
        },
        skillType: ['主修', '辅修']
    },

    onLoad(options) {

    },
    toPlay(){
        wx.navigateTo({
            url: '/pages/play/play',
        })
    },
    onShareAppMessage() {

    }
})