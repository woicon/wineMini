// pages/question/question.js
Page({

    data: {
        indexs: ['A', 'B', 'C', 'D'],
        showPanel:true,
        quesitons: [{
                title: '一位好的侍酒师需要具备哪些专业技能？',
                list: [
                    '专业酒水基础知识和技能',
                    '设计葡萄酒配菜、具有葡萄酒的鉴赏能力',
                    '有深厚的葡萄酒品评基础',
                    '有深厚的葡萄酒品评基础',
                ]
            }, {
                title: '一位好的侍酒师需要具备哪些专业技能1111？',
                list: [
                    '专业酒水基础知识和技能',
                    '设计葡萄酒配菜、具有葡萄酒的鉴赏能力',
                    '有深厚的葡萄酒品评基础',
                    '有深厚的葡萄酒品评基础',
                ]
            }, {
                title: '一位好的侍酒师需要具备哪些专业技能222？',
                list: [
                    '专业酒水基础知识和技能',
                    '设计葡萄酒配菜、具有葡萄酒的鉴赏能力',
                    '有深厚的葡萄酒品评基础',
                    '有深厚的葡萄酒品评基础',
                ]
            },
            {
                title: '一位好的侍酒师需要具备哪些专业技能222？',
                list: [
                    '专业酒水基础知识和技能',
                    '设计葡萄酒配菜、具有葡萄酒的鉴赏能力',
                    '有深厚的葡萄酒品评基础',
                    '有深厚的葡萄酒品评基础',
                ]
            },
        ],
        stepIndex: 0,
        currentQuestion: 0,
    },


    onLoad(options) {
        this.setData({
            step: this.data.quesitons.length,
        })

    },
    prevQuestion(e) {
        let stepIndex = this.data.stepIndex,
            step = this.data.step
        this.setData({
            currentQuestion: '',
            stepIndex: stepIndex == step-1 ? stepIndex : stepIndex - 1
        })
    },
    nextQuestion(e) {
        let stepIndex = this.data.stepIndex,
            step = this.data.step
        this.setData({
            currentQuestion:'',
            stepIndex: stepIndex == step-1 ? stepIndex : stepIndex + 1
        })
    },
    getQuestion(e){
        this.setData({
            currentQuestion: e.target.dataset.index
        })
    },
    submitQuestion(e){
        this.setData({
            showPanel:true
        })
    },
    closePanel(){
        this.setData({
            showPanel: false
        })
    },
    viewResult(){
        wx.navigateTo({
            url: '/pages/questionRes/questionRes',
        })
    },
    onShareAppMessage() {

    }
})