import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPost = (id) => {

  const post = ref(null)
  const error = ref(null)
  const title1 = ref(null)
  const body1 = ref(null)
  const tags1 = ref(null)


  const load = async () => {
    try {
      let res = await projectFirestore.collection('posts').doc(id).get()
      // console.log(res)
      // console.log(res.data)

      if (!res.exists) {
        throw Error('That post does not exist')
      }
      post.value = { ...res.data(), id: res.id }

      title1.value = post.value.title
      body1.value = post.value.body
      tags1.value = post.value.tags

    }
    catch(err) {
      error.value = err.message
    }
  }

  return { post, error, load,title1, body1, tags1 } 
}

export default getPost