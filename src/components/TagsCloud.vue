
<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div v-for="tag in tags" :key="tag">
      <router-link :to="{name: 'Tags', params:{tag} }" class="tag">
        #{{tag}}
      </router-link>
    </div>
  </div>
</template>

<script>
import tagsInCloud from '../composables/tagsInCloud'
import { ref } from 'vue'

export default {
    props: [ 'posts' ],
    setup(props){
        const { tags } = tagsInCloud(props.posts)
        const tag2 = ref(tags.value)

        console.log(tag2.value)

        return { tags,tag2 } 
    }

}
</script>

<style scoped>
.tag{
    margin: 30px;
    padding:5px 10px;
    background-color: #D7726A;
    border-radius: 1rem;
}
</style>