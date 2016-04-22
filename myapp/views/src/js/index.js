/**
 * Created by zhoupeng on 16/4/14.
 */
var swiper = new Swiper('#loop', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    width: $('#loop').width()
});
var swiper = new Swiper('#adBanner', {
    pagination: '.swiper-pagination',
    paginationClickable: true
});
var swiper = new Swiper('.famousR-List', {
    pagination: '.swiper-pagination',
    paginationClickable: true
});
var data = { 
    message: '',
    job :[
        '护士',
        'B超',
        '骨科',
        '妇产科',
        '儿科',
        '中医',
        '内科',
        '外科',
        '五官科',
        '普外科'
    ],
    brandBanner:brandArr
}
var vm = new Vue({
    el: '#app',
    data: data
})

vm.$data === data // -> true
vm.$el === document.getElementById('app') // -> true




$('.refresh').on('click',function(){
    $.post('/refresh',function (data) {
        if(data.status.code==1001){
            vm.$data.brandBanner = data.result
        }
    },'json')
})