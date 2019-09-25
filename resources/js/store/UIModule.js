export default {
    state: {
        count: 0,
        showSidebar: false,
        showHeader: false
    },
    getters: {
        doubleCount(state) {
            return state.count * 2;
        }
    },
    mutations: {
        increment(state) { state.count++ }
    },
    actions: {

    },
};
