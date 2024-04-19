import axios from "axios";

export const postModule = {
    state() {
        return {
            lessons: [
                { id: 1, title: "Урок 1" },
                { id: 2, title: "Урок 2" },
                { id: 3, title: "Урок 3" },
                { id: 4, title: "Урок 1" },
                { id: 5, title: "Урок 2" },
                { id: 6, title: "Урок 3" },
            ],
            posts: null,
            isLoading: false,
            filter: "",
            totalPages: 0,
            limit: 10,
            page: 1,
            search: "",
            options: [{ title: "Имя", value: "title" }],
        }
    },
    getters: {
        sortedLessons(state) {
            return [...state.lessons].sort((a, b) =>
                a[state.filter]?.localeCompare(b[state.filter])
            );
        },
        sortedSearchLessons(state, getters) {
            return getters.sortedLessons.filter((i) =>
                i.title.toLowerCase().includes(state.search.toLowerCase())
            );
        },
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts
        },
        setLessons(state, lessons) {
            state.lessons = lessons
        },
        deleteLesson(state, id) {
            state.lessons = state.lessons.filter((o) => o.id !== id);
        },
        setLoading(state, bool) {
            state.isLoading = bool
        },
        setPage(state, page) {
            state.page = page
        },
        setFilter(state, filter) {
            state.filter = filter
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        },
        setSearch(state, search) {
            state.search = search
        },

    },
    actions: {
        async getPosts({ state, commit, dispatch }) {
            try {
                commit("setLoading", true)
                const res = await axios.get(
                    "https://jsonplaceholder.typicode.com/todos",
                    {
                        params: {
                            _limit: state.limit,
                            _page: state.page,
                        },
                    }
                );
                commit("setTotalPages", Math.ceil(res.headers["x-total-count"] / state.limit))
                commit("setPosts", res.data)
            } catch (e) {
                console.log(e);
            } finally {
                commit("setLoading", false)
            }
        },
        async loadMorePosts({state,commit}) {
            try {
                commit("setPage",state.page + 1)
                const res = await axios.get(
                    "https://jsonplaceholder.typicode.com/todos",
                    {
                        params: {
                            _limit: state.limit,
                            _page: state.page,
                        },
                    }
                );
                commit("setPosts",[...state.posts, ...res.data])
            } catch (e) {
                console.log(e);
            }
        },
    },
    namespaced: true
}