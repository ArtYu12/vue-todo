<template>
    <div v-if="lessons.length > 0">
      <transition-group name="lessons" >
        <lesson-item v-for="lesson in lessons" :lesson="lesson" :key="lesson.id" @deleteLesson="$emit('deleteLesson', lesson.id)"/>
      </transition-group>
    </div>
    <h2 v-else="lessons.length <= 0">Уроки не найдены</h2>
</template>

<script>
import postitem from "@/components/post-item.vue"

export default {
  components: {
    LessonItem: postitem
  },
  props:{
    lessons:{
      type: Array,
      required:true
    }
  }
}
</script>

<style scoped>
.lessons-move,
.lessons-enter-active,
.lessons-leave-active {
  transition: all 0.5s ease;
}
.lessons-enter-from,
.lessons-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.lessons-leave-active {
  position: absolute;
}
</style>