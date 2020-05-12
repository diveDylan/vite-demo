<template>
<div>
  <WaterMark />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import WaterMark from './components/WaterMark.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    WaterMark
  }
}
</script>
