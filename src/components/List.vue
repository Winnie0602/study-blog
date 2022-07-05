<template>
<div v-for="post in posts" :key="post">
    <Post :post="post" />
</div>


</template>

<script>
import Post from './Post.vue'

export default {
    props:['posts'],
    components:{
        Post
    },
    setup(props){
    }
}
</script>

<style scoped>
.backGround{
    background-color: #fff;
}

</style>