export const state = () => ({
    portfolioItems: [],
    technology: []
  });
  
  export const mutations = {
    setPortfolioItems(state, list) {
      state.portfolioItems = list;
    },
    setTechnologies(state, list) {
        state.technology = list;
      },
  };
  
  export const actions = {
    async nuxtServerInit({ commit }) {


    //   let techFiles = await require.context('~/content/tech/', false, /\.md$/);
    //   let techItems = techFiles.keys().map(key => {
    //     let res = files(key);
    //     res.slug = key.slice(2, -5);
    //     return res;
    //   });
    //   await commit('setTechnologies', techItems);
    },
  };