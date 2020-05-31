<template>
<div>
  <WaterMark />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <Setup name="setup test" title="my test" :onclick="() => console.log(1)">
    我是slot
  </Setup>
  <ReactivityApi/>
</div>
</template>

<script>
import HelloWorld from './src/components/HelloWorld.vue'
import WaterMark from './src/components/WaterMark.vue'
import Setup from './src/composition/Setup.vue'
import ReactivityApi from './src/composition/ReactivityApi.vue'
// import { a, map }from './src/module/a'
// map.addA()
// console.log(a, map)
export default {
  name: 'App',
  components: {
    HelloWorld,
    WaterMark,
    Setup,
    ReactivityApi
  }
}
</script>
