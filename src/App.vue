<template>
    <main id="fd-main">
        <router-view  v-slot="{ Component , route}">
            <component :is="Component" />
        </router-view>
    </main>
</template>

<script>
    export default {
        name: 'Main',
    }
</script>

<style lang="less">
    #fd-main{
        width: 100%;
        height: 100%;
    }
</style>
