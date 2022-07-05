<template>
  <Nav />
  <div v-if="!error">
    <List :posts="posts" />
  </div>
  <div v-else>
    Fetch failure
  </div>
  <!-- <div v-for="p in posts" :key="p">
    <TagsCloud :posts="posts" />
  </div> -->


</template>

<script>
import getPosts from '../composables/getPosts'
import List from '../components/List.vue'
import Nav from '../components/Nav.vue'
import TagsCloud from '../components/TagsCloud.vue'
import {ref} from 'vue'



export default {
  name: 'HomeView',
  components: {
    List, Nav, TagsCloud
  },
  setup(){
        const { posts, error, load } = getPosts()
        const arr = ref['1']

        
        load()
        return { posts, error,arr }
    }
}
</script>

<style scoped>

</style>
