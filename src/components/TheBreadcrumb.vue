<template>
    <div class="fd-breadcrumb">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shenghuo"></use>
        </svg>
        <span class="bubbling">{{breadcrumb}}</span>
    </div>
</template>

<script>
    export default {
        name: "TheBreadcrumb",
        props: ['breadcrumb'],
        mounted() {

        }
    }
</script>

<style lang="less">
    .fd-breadcrumb {
        margin-left: -30px;
        display: flex;
        justify-content: left;
        text-shadow: #b9b9b9 0.031em 0.031em 0.051em;
        font-family: "Play";
        color: #5d6f84;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 1px;

        .icon {
            margin-right: 10px;
            font-size: 20px;
        }
    }
</style>
