<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont search-icon">&#xe632;</span>
            输入城市/景点/游玩主题</div>
        <div class="header-right">
            城市
            <span class="iconfont arrow-icon">&#xe6aa;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home_header"
    }
</script>

<style lang="stylus" scoped>
    //正常引入
    /*@import "~@/assets/styles/varibles.styl"*/
    //别名引入，去webpack.base.conf.js配置
    @import "~styles/varibles.styl"
    .header
        display flex
        line-height: 86px
        background: $bgColor
        color: #ffffff

    .header-left
        width: 64px
        float: left
        .back-icon
            text-align center
            font-size 40px
    .header-input
        flex: 1
        height: 64px
        margin-top: 12px
        margin-left: 20px
        line-height: 64px
        background: #ffffff
        -webkit-border-radius: 10px
        -moz-border-radius: 10px
        border-radius: 10px
        color: #cccccc
        padding-left 20px
        .search-icon
            font-size:40px
            vertical-align middle

    .header-right
        width: 124px
        float: right
        text-align: center
        .arrow-icon
            vertical-align middle
            margin-left -4px
            font-size 34px
</style>
