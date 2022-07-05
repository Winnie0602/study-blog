<template>

<Nav />
<div class="whiteBG">
<form @submit.prevent="handleSubmit1">
  <label for="title">標題</label>
  <input type="text" v-model="title1">
  <br>
  <label for="body">內容</label>
  <textarea v-model="body1"></textarea>
  <br>
  <label for="tags">選擇標籤：</label>
  <div>
    <input type="checkbox" v-model="tags1" value="HTML">
    <span for="tags"> HTML</span>
  </div><br>
  <div>
    <input type="checkbox" v-model="tags1" value="CSS">
    <span for="tags"> CSS</span>
  </div><br>
  <div>
    <input type="checkbox" v-model="tags1" value="Javascript">
    <span for="tags"> Javascript</span>
  </div><br>
  <div>
    <input type="checkbox" v-model="tags1" value="vue">
    <span for="tags"> Vue</span>
  </div>
  <br>
  <div>
    <input type="checkbox" v-model="tags1" value="前端知識">
    <span for="tags"> 前端知識</span>
  </div>
  <br><br>
  <button>提交</button>
</form>
</div>

</template>

<script>
import Nav from '../components/Nav.vue'
import { ref, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { projectFirestore } from '../firebase/config'
import getPost from '../composables/getPost'

export default {
  components: {
    Nav
  },
  setup(){
    const route = useRoute()
    const { title1, body1, tags1 ,post, error, load } = getPost(route.params.id)
    load()


    const router = useRouter()

    const handleSubmit1 = async () => {
        const data = {
        title : title1.value,
        body : body1.value,
        tags : tags1.value,
        }

        const res = await projectFirestore.collection("posts").doc(route.params.id).update(data)

        router.push('/')


    }
    return { title1, body1, tags1, post, error, handleSubmit1 }
  }

}
</script>

<style scoped>
.head{
  display: flex;
  justify-content: space-between;
  margin-bottom: 3px;
}
.btn , button{
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
;
}
form{
  padding: 10px 10px;
  display: flex;
  flex-direction: column;

}
label {
  display: block;
  color: black;
  text-transform: uppercase;
  font-size:18px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0px 10px 0px;
}
input[type=text] {
  padding: 10px;
  border: 0;
  border:1px solid rgb(191, 189, 189);
  width: 100%;
  box-sizing: border-box;
  height: 40px;
}
/* input[type=checkbox] {
  width: 50%;
  display: inline-block;
} */
textarea{
  border:1px solid rgb(191, 189, 189);
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
.whiteBG{
  background-color: #fff;
  border-radius: 2rem;
  height: 70vh;
  margin: 20px auto;
  padding: 20px
}
</style>