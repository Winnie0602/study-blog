<template>
<Nav />
<div v-if="!error">
  <div class="whiteBG">
    <div class="post-head">
      <h2>{{post.title}}</h2>
      <div>
        <span v-for="tag in post.tags" :key="tag">
        <router-link :to="{name: 'Tags', params:{tag} }">
            # {{ tag }}
        </router-link>
      </span> 
      </div>
    </div>
    <div class="body">
      <p>{{post.body}}</p>  
      
    </div>
    
    
  </div>
</div>
<div v-else>
    {{error}}
</div>
</template>

<script>
import Nav from '../components/Nav.vue'
import getPost from '../composables/getPost'
import { useRoute } from 'vue-router'

export default {
    components:{ Nav },
    setup(){
      const route = useRoute()
      const { post, error, load } = getPost(route.params.id)

      load()
        
      return { post, error, load }
    }

}
</script>

<style scoped>
a{
    text-decoration: none;
    color: white;
    background-color: #275660;
    padding: 0.4rem;
    border-radius: 1rem;
    margin: 0 5px;

}
.whiteBG{
  background-color: #fff;
  border-radius: 2rem;
  height: 70vh;
  margin: 20px auto;
  padding: 20px;
}
h2{
  margin: 1rem 0rem;
}
P{
  line-height: 2rem;
}
.post-head{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>