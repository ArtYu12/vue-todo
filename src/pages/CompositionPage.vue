<template>
  
  <div class="app_buttons">
    <my-select
      v-model:optionValue="selectedSort"
      :defaultValue="`Выберите фильтр`"
      :options="options"
    ></my-select>
  </div>
  <my-input v-model:title="searchQuery" placeholder="Найти" v-focus />
  <lessons-list :lessons="sortedAndSearchedPosts" />
  <h2>Посты</h2>
  <div v-if="isLoading">
    Загрузка...
  </div>
  <div v-else>
    <posts-list :posts="posts" v-if="posts && posts.length > 0" />
  </div>
</template>

<script>
import lessonsList from "@/components/lessons-list.vue";
import form from "@/components/form.vue";
import postsList from "@/components/post-list.vue";
import { ref } from "vue";
import { usePosts } from "@/hooks/usePosts";
import sortLessons from "@/hooks/useSortedPosts";
import sortAndSearchLessons from "@/hooks/useSortedAndFindPosts";

export default {
  components: {
    LessonsList: lessonsList,
    FormCreate: form,
    PostsList: postsList,
  },
  data() {
    return {
      options: [{ title: "Имя", value: "title" }],
    };
  },
  setup(props) {
    const lessons = ref([
      { id: 1, title: "Урок 1" },
      { id: 2, title: "Урок 2" },
      { id: 3, title: "Урок 3" },
      { id: 4, title: "Урок 1" },
      { id: 5, title: "Урок 2" },
      { id: 6, title: "Урок 3" },
    ])

    const { posts, totalPages, isLoading } = usePosts(10);
    const { sortedPosts, selectedSort } = sortLessons(lessons);
    const { sortedAndSearchedPosts, searchQuery } = sortAndSearchLessons(sortedPosts);

    return {
      posts,
      totalPages,
      isLoading,
      lessons,
      sortedPosts,
      selectedSort,
      sortedAndSearchedPosts,
      searchQuery
    };
  },
};
</script>

<style>
.app_buttons {
  display: flex;
  align-items: center;
  gap: 15px;
}
</style>
