<template>
  <div class="app_buttons">

    <my-button @click="active = true">Создать пост</my-button>

    <my-select
      v-model:optionValue="filter"
      :value="filter"
      @change="setFilter($event.target.value)"
      :defaultValue="`Выберите фильтр`"
      :options="options"
    ></my-select>
  </div>


  <my-input :value="search" @input="setSearch($event.target.value)" placeholder="Найти" v-focus />


  <my-dialog v-model:show="active">
    <form-create @createLesson="createLesson" />
  </my-dialog>
  <lessons-list :lessons="sortedSearchLessons" @deleteLesson="deleteLesson" />

  <h2>Посты</h2>
  <div v-if="isLoading === false">
    <posts-list :posts="posts" v-show="posts !== null && posts.length > 0" />
    <!-- my-pagination v-model:page="page" :totalPages="totalPages" /-->
  </div>
  <div v-else="isLoading === true">Загрузка</div>
  <div
    v-if="totalPages > 0"
    v-intersection="{
      loadMorePosts: loadMorePosts,
      page: page,
      totalPages: totalPages,
    }"
    class="observer"
  ></div>
</template>

<script>
import lessons from "@/components/lessons-list.vue";
import form from "@/components/form.vue";
import postsList from "@/components/post-list.vue";
import axios from "axios";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    LessonsList: lessons,
    FormCreate: form,
    PostsList: postsList,
  },
  data() {
    return {
      active: false,
      options: [{ title: "Имя", value: "title" }],
    };
  },
  methods: {
    ...mapMutations({
      setPage: "posts/setPage",
      deleteLesson:"posts/deleteLesson",
      setSearch:"posts/setSearch",
      setFilter:"posts/setFilter"
    }),
    ...mapActions({
      loadMorePosts: "posts/loadMorePosts",
      getPosts: "posts/getPosts",
    }),
    /*createLesson(post) {
      this.lessons.push(post);
    },*/
  },
  mounted() {
    this.getPosts();
  },
  computed: {
    ...mapState({
      lessons: state => state.posts.lessons,
      posts: state => state.posts.posts,
      isLoading: state => state.posts.isLoading,
      filter: state => state.posts.filter,
      totalPages: state => state.posts.totalPages,
      limit: state => state.posts.limit,
      page: state => state.posts.page,
      search: state => state.posts.search,
    }),
    ...mapGetters({
      sortedLessons:"posts/sortedLessons",
      sortedSearchLessons:"posts/sortedSearchLessons",
    }),
  },
  watch: {
    /*page(newValue) {
        this.getPosts(newValue, this.limit);
      },*/
  },
};
</script>

<style>
.app_buttons {
  display: flex;
  align-items: center;
  gap: 15px;
}

.observer {
  height: 30px;
  background-color: green;
}
</style>
