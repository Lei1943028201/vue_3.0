<template>
    <div class="fd-box">
        <div class="fd-box-left">
            <el-image style="height: 100%;" :src="data.img" fit="scale-down"></el-image>
        </div>
        <div class="fd-box-right">
            <div class="fd-tag fd-box-row">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-label-01"></use>
                </svg>
                <span>笔记</span>
            </div>
            <h2 class="fd-box-title">
                {{data.title}}
            </h2>
            <el-divider content-position="right"></el-divider>
            <div class="fd-box-footer">
                <p class="fd-box-row">
                    <svg class="icon icon-shijian" aria-hidden="true">
                        <use xlink:href="#icon-shijian"></use>
                    </svg>
                    <span>post on 2021-3-23</span>
                </p>
                <p class="fd-box-row">
                    <svg class="icon fd-font-22" aria-hidden="true">
                        <use xlink:href="#icon-yanjingmojing"></use>
                    </svg>
                    <span>0</span>
                    <el-divider direction="vertical"></el-divider>
                    <svg class="icon fd-font-22" aria-hidden="true">
                        <use xlink:href="#icon-biaoqiankuozhan_xiaoxi-334"></use>
                    </svg>
                    <span>0</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Box",
        props: ['data'],
        data() {
            return {
                num: [1, 2, 3, 4, 5, 6]
            }
        },
        computed: {},
    }
</script>

<style lang="less">
    .fd-lazy-box {
        width: 100%;
        height: 200px;

        .fd-box {
            box-sizing: border-box;
            display: flex;
            height: 100%;
            margin: 20px 0;
            padding: 10px;
            border-radius: 10px;
            box-shadow: 0 3px 6px rgb(19 84 122 / 49%);
            transition: all .2s;

            &:hover {
                box-shadow: 0 7px 14px rgb(128 208 199 / 62%), 0 3px 6px rgb(19 84 122 / 49%);
            }

            .fd-box-left {
                border: 1px solid rgb(19 84 122 / .1);
                width: 278px;
                height: 100%;
                border-radius: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .fd-box-right {
                position: relative;
                display: flex;
                flex-direction: column;
                margin-left: 10px;
                padding: 20px;
                border-radius: 5px;
                flex: 1;

                .fd-tag {
                    font-size: 14px;

                    .icon {
                        font-size: 18px;
                    }
                }

                .fd-box-title {
                    font-size: 18px;
                    color: #565656;
                    flex: 1;
                }

                .fd-box-footer {
                    font-size: 14px;
                    span {
                        text-transform: uppercase;
                        font-family: "Play";
                    }
                }

                .fd-box-row{
                    display: flex;
                    align-items: center;
                }

                .icon {
                    margin-right: 3px;
                }

                .icon-shijian {
                    color: #60ada9;
                }

                .fd-font-22 {
                    font-size: 22px;
                }
            }
        }
    }
</style>
