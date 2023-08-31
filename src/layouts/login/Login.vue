<template>
  <prototype/>
</template>

<script>
import { defineComponent } from 'vue'
import Prototype from 'src/prototype/components/Prototype'
import Login from 'layouts/login/prototype/Login'

export default defineComponent({
  name: 'Login',
  components: { Prototype },
  provide: Login.build().provide()
})
</script>

<style scoped>
.content {
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  width: 960px;
  border-radius: 10px;
  overflow: hidden;
  padding: 30px;
}

</style>
