<template>
    <div class="fd-lazy-box" ref="box">
        <transition name="bounce">
            <slot v-if="isShow"></slot>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "lazyBox",
        props: ['windowHeight', 'scrollTop'],
        data() {
            return {
                $box: null,
                isShow: false
            }
        },
        watch: {
            scrollTop(){
                if(!this.isShow){
                    this.showBox()
                }
            }
        },
        methods: {
            showBox() {
                let {top} = this.$box.getBoundingClientRect()
                if (top < this.windowHeight - 100) {
                    this.isShow = true
                }
            }
        },
        mounted() {
            this.$box = this.$refs.box
            this.showBox()
        }
    }
</script>

<style lang="less">

</style>
