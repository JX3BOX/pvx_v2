import { createStore } from "vuex";

let store = {
    state: {
        client: location.href.includes("origin") ? "origin" : "std",
        achievements: [],
        achievementsVirtual: [],
        role: null,
        viewAchievementsName: "",
        generalTotal: 0,
        armorTotal: 0,
    },
    mutations: {},
    getters: {},
    actions: {},
    modules: {},
};

export default createStore(store);
