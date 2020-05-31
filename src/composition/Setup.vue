<template>
  <div>
    名字相同默认取setup的值， props 使用 setup(props)
    <h1> this title: {{title}}</h1>
    <slot></slot>
    <p>this $data title(the some name of setup() or data(), must get by $data ): {{$data.title}}</p>
    <p>this dataTitle(non some name ): {{dataTitle}}</p>
  </div>
</template>

<script>
import { watchEffect } from 'vue'
export default { 
  name: 'Setup',
  props: {
    name: {
      type: String,
      default: 'test'
    }
  },
  setup(props, context) {
    console.log(context, props, context.attrs, context)
    let watchName
    watchEffect(() => {
      watchName = props.name + 'watching'
      console.log('watchEffect', watchName)
    })
    console.log( props.name, 'in setup')
    return {
      title: 'setup is the hook of beforCreate',
      status: () => ok,
      watchName
    }
  },
  beforeCreate() {
    console.log('before create')
  },
  created() {
    console.log(' created')
  },
  data: () => {
    return {
      title: 'setup is the hook of beforeCreate, will rewrite by data()',
      dataTitle: 1
    }
  },
  mounted() {
    console.log(this, this.dataTitle, 'in mounted')
    this.log()
    fetch('/api/shop/areas?shopId=39')
  },
  methods: {
    log() {
      console.log(this, this.$data.title, this.title, this.status, 'in methods')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>