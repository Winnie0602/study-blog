<template>
<Nav />
<div class="error" v-if="error">
ERROR!
</div>
<div class="posts" v-else>
<List :posts="postsWithTags" />
</div>
</template>

<script>
import getPosts from '../composables/getPosts'
import List from '../components/List.vue'
import Nav from '../components/Nav.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'


export default {
  components:{ List, Nav },
  setup(){
    const route = useRoute()

    const { posts, error, load } = getPosts()

    load()

    const postsWithTags = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag))
    })

    return { posts, error, postsWithTags }
  }

}
</script>

<style>
</style>