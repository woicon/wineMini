Page({
    data: {
        showPanel:true,
        detail: {
            classCover: '../../images/bs.jpg',
            title: "苏格兰官方威士忌大使认证课程",
            learnAmt: 3434,
            name: "李美玉",
            masterImg: '../../images/master.jpg',
            tag: ['日本酒讲师', '待酒师4级'],
            intro: '一位好的侍酒师不仅要具备专业酒水基础知识和技能，还要懂得设计葡萄酒配菜、具有葡萄酒的鉴赏能力、有深厚的葡萄酒品评基础、熟悉酒品采购要求以及善于对酒窖进行管理。一位好的侍酒师不仅要具备专业酒水基础知识和技能，还要懂得设计葡萄酒配菜、具有葡萄酒的鉴赏能力、有深厚的葡萄酒品评基础、熟悉酒品采购要求以及善于对酒窖进行管理。一位好的侍酒师不仅要具备专业酒水基础知识和技能，还要懂得设计葡萄酒配菜、具有葡萄酒的鉴赏能力、有深厚的葡萄酒品评基础、熟悉酒品采购要求以及善于对酒窖进行管理。',
            like: 9002,
        },
        playType: ['播放', '试看', '试看中', '未观看'],
        courseList: [{
            title: "苏格兰官方威士忌大使认证课程",
            url: 'https://sdfsf.com',
            type: 0,
        }, {
            title: "苏格兰官方威士忌大使认证课程",
            url: 'https://sdfsf.com',
            type: 0,
        }, {
            title: "苏格兰官方威士忌大使认证课程",
            url: 'https://sdfsf.com',
            type: 0,
        }, {
            title: "苏格兰官方威士忌大使认证课程",
            url: 'https://sdfsf.com',
            type: 0,
        }


        ],
        currentTab: 1,
        playId:2,
        free:false
    },
    onLoad(options) {

    },
    toggleTab(e) {
        this.setData({
            currentTab: e.target.dataset.index
        })
    },
    closePanel(){
        this.setData({
            showPanel:false
        })
    },
    onShareAppMessage () {

    }
})