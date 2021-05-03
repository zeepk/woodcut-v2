import Vue from "vue";
import Vuex from "vuex";
import { gainsUrl } from "../utils/constants"
import requestWrapper from "../utils/requestWrapper"

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    loadingCounter: 0,
    currentUsername: null,
    currentDisplayname: null,
    currentUserSkillGains: [],
    currentUserMinigameGains: []
  },

  getters: {
    isLoading: (state) => state.loadingCounter > 0,
    isDev: () => process.env.NODE_ENV === 'development',
    getCurrentUsername: state => {
      return state.currentUsername
    },
    getCurrentDisplayname: state => {
      return state.currentDisplayname
    },
    currentUserSkillGains: state => {
      return state.currentUserSkillGains
    },
    currentUserMinigameGains: state => {
      return state.currentUserMinigameGains
    },
  },

  mutations: {
    incrementLoadingCounter(state) {
      state.loadingCounter = state.loadingCounter + 1;
    },
    decrementLoadingCounter(state) {
      state.loadingCounter = Math.max(state.loadingCounter - 1, 0);
    },
    updateCurrentUsername(state, username) {
      state.currentUsername = username;
    },
    updateCurrentDisplayname(state, displayname) {
      state.currentDisplayname = displayname
    },
    updateCurrentUserSkillGains(state, gains) {
      state.currentUserSkillGains = gains
    },
    updateCurrentUserMinigameGains(state, gains) {
      state.currentUserMinigameGains = gains
    }
  },

  actions: {
    setCurrentUsername(context, payload) {
      if (payload.username) {
        context.commit('updateCurrentUsername', payload.username)
      }
    },
    async getCurrentUserStatRecords(context) {
      context.commit('incrementLoadingCounter')
      try {
        const options = {
          url: `${gainsUrl}${context.state.currentUsername}`,
          method: 'get',
        };
        const res = await requestWrapper(options);
        context.commit('updateCurrentUserSkillGains', res.data.skillGains || [])
        context.commit('updateCurrentUserMinigameGains', res.data.minigameGains || [])
        context.commit('updateCurrentDisplayname', res.data.displayName || null)        
        context.commit('decrementLoadingCounter')
      } catch {
        context.commit('decrementLoadingCounter')
      }
    }
  }
});
