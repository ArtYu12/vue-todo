<template>
    <div>
        <div v-for="post in posts">
            <div class="card">
                <div class="card-body">
                    <p class="card-text">{{ post.title }}</p>
                    <div class="card-actions">
                        <my-button @click="() => openPost(post.id)">Открыть</my-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        posts: Array
    },
    data() {
      
    },
    methods: {
      async openPost(id) {
        this.$router.push(`/lesson/`+id)
      }
    },
    
}
</script>

<style scoped>
.card {
  font-family: Arial, sans-serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  max-width: 100%; 
  margin: 20px; /* Отступ от других элементов */
}

.card-body {
  padding: 20px;
}

.card-text {
  margin-bottom: 20px; /* Отступ текста от кнопок */
}


.card-actions {
  display: flex;
  gap:20px;
}
</style>