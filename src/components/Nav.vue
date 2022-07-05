<template>
<div class="head">
    <h1 class="title">前 端 筆 記</h1>
    <div>
      <router-link :to="{name: 'Home'}" v-if="showHomeBtn">回首頁</router-link>
      <router-link :to="{name: 'Create'}" v-if="!showHomeBtn">新增文章</router-link>
    </div>
</div>
<hr>
</template>

<script>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

export default {
  setup(){
    const route = useRoute()

    const path = route.path

    const showHomeBtn = ref()
    if ( path === '/' ){
      showHomeBtn.value = false
    } else {
      showHomeBtn.value = true
    }

    
    return { path, showHomeBtn }
  }
}
</script>

<style scoped>
.head{
  display: flex;
  justify-content: space-between;
  margin-bottom: 3px;
  align-items: center;
}
h1{
  color: #D7726A
}
.btn{
  text-decoration: none;
  background-color: #275660;
  border-radius: 1rem;
  font-size: 16px;
  color: white;
  font-weight: 700;
  display: inline;
  padding: 0.5rem;
}
.btn:hover{
  background-color: #2c6b79;
}
a{
  color: white;
  background-color: #D7726A;
  padding: 0.5rem;
  border-radius: 1rem;
  text-decoration: none;
  margin: 0 1rem ;
  font-weight: 700;

}
a:hover{
  background-color: #d7716aa9;
}
</style>