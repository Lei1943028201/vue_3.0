<template>
    <div id="fd-menu" :style="menuStyle">
        <menu class="fd-menu-wrap">
            <router-link tag="span"
                         class="fd-menu"
                         v-for="(menu , index) in menuList"
                         :key="index"
                         :to="menu.path"
            >{{menu.name}}</router-link>
<!--            <span class="fd-menu" v-for="(menu , index) in menuList" :key="index">{{menu.name}}</span>-->
        </menu>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        props: ['scrollTop'],
        data() {
            return {
                menuList: [
                    {
                        name: '首页',
                        path: '/home'
                    },
                    {
                        name: '新闻',
                        path: '/news'
                    },
                    {
                        name: '游戏',
                        path: '/games'
                    },
                    {
                        name: '音乐',
                        path: '/music'
                    },
                    {
                        name: '电影',
                        path: '/movie'
                    },
                    {
                        name: '笔记',
                        path: '/note'
                    },
                    {
                        name: '留言板',
                        path: '/message'
                    },
                    {
                        name: 'Search',
                        path: '/search'
                    },
                ]
            }
        },
        computed: {
            menuStyle(){
                let rgb = 0.3 + 0.7/400 * this.scrollTop
                return `background-image: linear-gradient(to right, rgb(19 84 122 / ${rgb}) 0%, rgb(128 208 199 / ${rgb}) 100%)`
            }
        }
    }
</script>

<style lang="less">
    #fd-menu{
        width: 100%;
        height: 60px;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 9999;
        .fd-menu-wrap {
            margin: 0 auto;
            display: flex;
            justify-content: flex-end;
            box-sizing: border-box;
            width: 60%;
            max-width: 750px;
            padding: 10px 0;
            .fd-menu {
                display: inline-block;
                height: 40px;
                margin: 0 8px;
                padding: 0 10px;
                line-height: 40px;
                font-weight: bold;
                border-radius: 5px;
                color: #fff;
                font-size: 14px;
                font-family: Open Sans,sans-serif;
                transition: all .3s;
                cursor: pointer;
                user-select: none;
                &:hover {
                    background: rgb(255 255 255 / .2);
                }
            }
        }
    }



</style>
