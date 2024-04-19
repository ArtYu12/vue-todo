<template>
    <div class="card">
        <div class="card-body">
            <p class="card-text">{{ lesson.title }}</p>
            <div class="card-actions">
                <my-button @click="deletePost">Удалить</my-button>
                <my-button>Редактировать</my-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        lesson: {
            type: Object,
            required:true
        }
    },
    data() {
        return {
            edit:false
        }
    },
    methods:{
        deletePost() {
            this.$emit("deleteLesson")
        },
        openPost(id) {
            this.$router.push(`/lesson/${id}`)
        }
    }
}
</script>

<style scoped>
/* Общие стили карточки */
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