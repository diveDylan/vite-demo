<template>
<div>
  <WaterMark />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <Setup name="setup test" title="my test"/>
  <ReactivityApi/>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import WaterMark from './components/WaterMark.vue'
import Setup from './composition/Setup.vue'
import ReactivityApi from './composition/ReactivityApi.vue'
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
