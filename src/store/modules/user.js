const state = {
    dailyBankroll: parseInt(localStorage.getItem('daily-bankroll') || 0)
};

const getters = {
    dailyBankroll: state => state.dailyBankroll
};

const actions = {
    updateDailyBankroll({ commit }, val) {
        localStorage.setItem('daily-bankroll', val);
        commit('setDailyBankroll', val);
    }
};

const mutations = {
    setDailyBankroll(state, val) {
        state.dailyBankroll = val;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
