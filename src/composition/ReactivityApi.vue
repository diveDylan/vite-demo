<template>
  <div></div>
</template>

<script>
import { reactive } from 'vue'
export default { 
  name: 'ReactivityApi',
  setup() {
    const stateWrap = reactive({ count: 0})
    const state = reactive(0)
    return {
      stateWrap,
      state
    }
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this, this.stateWrap, this.state, 'ReactivityApi in mounted')
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>