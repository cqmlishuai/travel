<template>
    <div class="wrapper">
        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
            <swiper-slide v-for="banner of banners" :key="banner.id">
                <img :src="banner.imgUrl" alt="图片">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
    export default {
        name: 'HomeSwiper',
        data (){
            return {
                swiperOption: { 
                    pagination: '.swiper-pagination',
                    loop: true
                },
                banners:[{
                    id:'0001',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1812/a8/90d66a621daf6802.jpg_750x200_d479b789.jpg'
                },
                {
                    id:'0002',
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1811/f7/72ce947f4dff4c02.jpg_750x200_aa583dba.jpg'
                }
                ]
            }
        }

    }
</script>
<style lang='stylus' scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background #fff
    .wrapper
        width: 100%
        height: 0
        padding-bottom 26.67%
        overflow hidden
        background #ccc
        .swiper-img
            width 100%
            height 100%

    
</style>
