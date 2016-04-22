/**
 * Created by zhoupeng on 16/4/22.
 */

var data = {
    swicthLogin: true,
    sendSMSTime: 60
}
var vm  = new Vue({
    el: '#app',
    data: data,
    methods: {
        switchLoginAction:function (event) {
            if(event.srcElement.className == 'action') return;
            if(this.$data.swicthLogin) {
                this.$data.swicthLogin = false
            }
            else{
                this.$data.swicthLogin = true
            }

        },
        sendSMS:function (event) {
            if(event.srcElement.className.indexOf('action')>-1) return;
            event.srcElement.className += ' action'
            countDown(event.srcElement);
        }
    }
})

//发送短信倒计时
var timer = null;
function countDown(e) {
    if(vm.$data.sendSMSTime) {
        vm.$data.sendSMSTime--;
        timer = setTimeout(function () {
            countDown(e)
        }, 1000)
    }
    else{
        clearTimeout(timer);
        vm.$data.sendSMSTime = 60;
        e.className = e.className.replace(' action','')
    }
}