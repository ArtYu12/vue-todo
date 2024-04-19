<template>
    <div v-if="post == null">
        Получение поста
    </div>
    <div v-else="post != null" class="post">
        <div>Пост № {{post.id}}</div>
        <div>Название {{post.title}}</div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props:{

    },
    data() {
        return {
            post: null
        }
    },
    methods: {
        async getPost(id) {
            try {
                console.log(id)
                const res = await axios.get("https://jsonplaceholder.typicode.com/todos/"+id)
                return this.post = res.data
            } catch (e) {
            console.log(e)
            }
        }
    },
    mounted() {
        this.getPost(this.$route.params.id)
    },
}
</script>

<style scoped>
.post {
    display: flex;
    flex-direction: column;
    gap:5px;
    padding: 0 15px;
}
</style>