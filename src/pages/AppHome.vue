<template>
    <div id="fd-home" class="fd-position-center" @scroll="scrollBox($event)">
        <header>
            <Menu :scroll-top="scrollTop"></Menu>
            <Banner></Banner>
        </header>
        <main>
            <div class="fd-news-list">
                <Breadcrumb :breadcrumb="breadcrumb"></Breadcrumb>
                <LazyBox v-for="(data, index) in dataList"
                         :key="index"
                         :scroll-top="scrollTop"
                         :window-height="windowHeight">
                    <HomeBox :data="data"></HomeBox>
                </LazyBox>
            </div>
            <el-pagination
                    hide-on-single-page="false"
                    layout="prev, pager, next"
                    :total="100">
            </el-pagination>
            <el-backtop target="#fd-home" right="80" bottom="120"/>
        </main>
        <el-divider><i class="el-icon-moon"/></el-divider>
        <Footer></Footer>
    </div>
</template>

<script>
    import Menu from '../components/TheMenu.vue'
    import LazyBox from '../components/common/LazyBox.vue'
    import HomeBox from '../components/Home/HomeBox.vue'
    import Banner from '../components/TheBanner.vue'
    import Footer from '../components/TheFooter.vue'
    import Breadcrumb from '../components/TheBreadcrumb.vue'
    export default {
        name: "Home",
        components: {
            Menu,
            LazyBox,
            HomeBox,
            Banner,
            Footer,
            Breadcrumb,
        },
        data() {
            return {
                breadcrumb: 'Home',
                windowHeight: document.body.offsetHeight,
                scrollTop: 0,
                dataList: [
                    {
                        tag: 'note',
                        title: '水球图组件',
                        explain: '通过canvas进行绘制',
                        img: 'public/水球图-01.png'
                    },
                    {
                        tag: 'note',
                        title: '水球图组件',
                        explain: '通过canvas进行绘制',
                        img: 'public/水球图-01.png'
                    },
                    {
                        tag: 'note',
                        title: '水球图组件',
                        explain: '通过canvas进行绘制',
                        img: 'public/水球图-01.png'
                    },
                    {
                        tag: 'note',
                        title: '水球图组件',
                        explain: '通过canvas进行绘制',
                        img: 'public/水球图-01.png'
                    },
                    {
                        tag: 'note',
                        title: '水球图组件',
                        explain: '通过canvas进行绘制',
                        img: 'public/水球图-01.png'
                    }
                ]
            }
        },
        methods: {
            scrollBox($event) {
                this.scrollTop = $event.target.scrollTop
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                // 通过 `vm` 访问组件实例
                vm.breadcrumb = to.path.replace('/','')
            })
        }
    }
</script>

<style lang="less">
    #fd-home {
        background: url("../assets/images/bg-01.jpeg") center/100% no-repeat;
        background: #fff;
        overflow: auto;
        display: flex;
        flex-direction: column;
        >div{
            flex-shrink: 0;
        }
        main{
            display: flex;
            flex-direction: column;
            flex: 1;
            .fd-news-list {
                width: 60%;
                max-width: 750px;
                margin: 0 auto;
                flex: 1;
            }
            .el-pagination{
                margin: 30px auto 0;
            }
        }
    }
</style>
