<template>
    <div id="fd-login">
        <Banner></Banner>
        <button class="btn-login fd-position-center" @click="login">
            Welcome
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-login"></use>
            </svg>
        </button>
    </div>
</template>

<script>
    import Banner from "../components/TheBanner.vue";
    export default {
        name: "Login",
        components: {
            Banner
        },
        methods: {
            login() {
                this.$router.replace('/home')
            }
        }
    }
</script>

<style lang="less">
    #fd-login {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(0deg, #13547a 0%, #80d0c7 100%);
    }
</style>
