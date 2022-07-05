<template>
    <div class="post">
        <div class="titleAndButton">
            <router-link :to="{name: 'Description', params:{id: post.id} }">
                <h3>> {{post.title}}</h3>
            </router-link>
            <div>
                <img @click="handleDelete" src="../assets/img/delete.png" alt="">
                <router-link :to="{name: 'Edit', params:{id: post.id} }">
                    <img class="pencil" src="../assets/img/pencil.png" alt="">
                </router-link>
            </div>

        </div>
        <div>
            <div>
                {{snippet}}
            </div>
            <br>
            <span v-for="tag in post.tags" :key="tag">
                <router-link :to="{name: 'Tags', params:{tag} }" class="tag">
                    <img src="../assets/img/price-tag.png" class="tagIcon" alt="tag"> {{ tag }}
                </router-link>
            </span>
        </div>
    </div>
</template>

<script>
import { projectFirestore } from '../firebase/config'
import { computed } from 'vue'
import { useRouter } from 'vue-router'


export default {
    props:['post'],
    setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0,60) + '...'
    })

    const router = useRouter()

    const handleDelete = async () => {
        await projectFirestore.collection("posts").doc(props.post.id).delete()

        router.go(0)
    }

    return { snippet, handleDelete }
  }

}
</script>

<style scoped>
a{
    text-decoration: none;
}
.tag{
    background-color: #D7726A;
    margin: 0px 3px;
    color: white;
    padding: 0.1rem 0.3rem;
    border-radius: 0.6rem;
}
.tagIcon{
    width: 15px;
    height: 15px;
    margin: 0px;
}


h3{
   color: #2c6b79; 
   font-weight: 700;
   border-bottom: 1.5px solid #2c6b79
}
.post {
    margin:0.5rem auto;
    padding:1rem;
    background-color:  rgba(164, 159, 159, 0.7);
    border-radius: 1rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}
.post:hover{
   background-color: rgba(164, 159, 159, 0.9);
   border-radius: 1rem;
}
.titleAndButton{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
button{
  text-decoration: none;
  border: none;
  background-color: #27556000;
}
img {
    width:35px;
    height: 35px;
    cursor: pointer;
    margin-left: 5px;
}

.pencil{
    width:28px;
    height: 28px;
}

</style>