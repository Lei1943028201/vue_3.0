<template>
    <div class="fd-banner">
        <canvas id="canvas" ref="canvas"></canvas>
    </div>
</template>

<script>
    export default {
        name: "banner",
        methods: {
            initCanvas(){
                let canvas = this.$refs.canvas,
                    ctx = canvas.getContext('2d')

                ctx.fillStyle = "rgba(255,255,255, 1)"
                ctx.beginPath()
                ctx.moveTo(0, canvas.height/2)
                ctx.lineTo(canvas.width, canvas.height/2)
                ctx.lineTo(canvas.width, canvas.height)
                ctx.lineTo(0, canvas.height)
                ctx.lineTo(0, canvas.height/2)
                ctx.closePath()
                ctx.fill()
                let step = 0
                function loop(){
                    //清空canvas
                    ctx.clearRect(0, 0, canvas.width, canvas.height)
                    ctx.clearRect(0, 0, canvas.width, canvas.height)
                    ctx.fillStyle = "rgba(255,255,255, 1)"
                    step++

                    const angle = step * Math.PI / 180
                    const deltaHeight = Math.sin(angle) * 20
                    const deltaHeightRight = Math.cos(angle) * 20

                    ctx.beginPath()
                    ctx.moveTo(0, canvas.height/2+deltaHeight)
                    ctx.bezierCurveTo(canvas.width /2, canvas.height/2+deltaHeight-50, canvas.width / 2, canvas.height/2+deltaHeightRight-50, canvas.width, canvas.height/2+deltaHeightRight)
                    ctx.lineTo(canvas.width, canvas.height)
                    ctx.lineTo(0, canvas.height)
                    ctx.lineTo(0, canvas.height/2+deltaHeight)
                    ctx.closePath()
                    ctx.fill()

                    requestAnimationFrame(loop)
                }
                loop()
            }
        },
        mounted() {
            this.initCanvas()
        },
    }
</script>

<style lang="less">
    .fd-banner {
        display: flex;
        flex-direction: column-reverse;
        height: 475px;
        width: 100%;
        background: #fff url("../assets/images/nothome_top_bg.webp") center center / cover no-repeat;
        #canvas {
            height: 80px;
        }
        svg {
            position: absolute;
            width: 100%;
            height: 80px;
        }
    }
</style>
