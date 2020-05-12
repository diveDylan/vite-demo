<template>
<div>
  <img src="../logo.png" alt="">
   <canvas></canvas>
</div>
 
</template>

<script>
import { reactive } from 'vue'
export default { 
  name: 'WaterMarker',
  setup() {
    const state = reactive({
      canvas: null
    })
    return {
      state
    }
    
  },
  mounted() {
    this.drawImage()
  },
  methods: {
    waterMark(ctx, w, maxW) {
      while (w < maxW) {
        const REPEAT_NUM = 3; //  取巧重复x方向
        const text = `潜水党专用    `; // 水印文本 空格用于x间隙
        const waterMarkText = text.repeat(REPEAT_NUM);
        ctx.translate(w, 200);
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = '#000';
        ctx.font = '12px Josefin Slab';
        ctx.rotate(-40 * Math.PI / 180);
        ctx.fillText(waterMarkText, 0, 0);
        ctx.rotate(40 * Math.PI / 180); // 画笔角度恢复
        w = w + 10;
      }
    },
    drawImage() {
      this.$nextTick(() => {
      const canvas = document.querySelector('canvas')
      const img = document.querySelector('img')
      img.onload = e => {
        const ctx = canvas.getContext('2d')
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0)
        this.waterMark(ctx, -50, 200)
      }
      
    })
     
    }
  }
}
</script>

<style scoped>
canvas {
  width:200px;
  height: 200px;
}
</style>