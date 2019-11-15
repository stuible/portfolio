export const state = () => ({
    home: undefined, // Object
    postList: undefined, // Object Array

    posts: [], // Object Array
    technology: [], // Object Array
    test: undefined // String
});

export const mutations = {
    home(state, {home, postList}) {
        state.home = home;
        state.postList = postList;
    },
    post(state, post) {
        console.log(post.slug)
        state.posts.push(post)
    },
};

export const getters = {

    home: state => {
        return state.home && state.postList ? {
            info: state.home,
            posts: state.postList
        } : undefined
    },

    posts: state => {
        return state.posts
    },

};

export const actions = {
    async nuxtServerInit({ commit }) {
    },
    async home({ commit }) {
        const posts = await this.$axios.$get("/posts");
        const home = await this.$axios.$get("/pages/home");

        await commit('home', {home: home, postList: posts.data});
    },
    async post({ commit }, slug) {
        const post = await this.$axios.$get('/posts/' + slug)

        await commit('post', post);
    }
    
};