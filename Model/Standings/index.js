import { getStandingDataService } from '@luka.jez/npm-try/Model/Standings/Services'

// #region HELPERS
// #endregion

export default {
  namespaced: true,
  state: {
    loading: true,
    initialData: [],
    roundName: '',
    venueDetails: {},
    competitionId: '',
    sportType: '',
    isGameLive: false,
    sportTopicId: '',
    matchResultsPerPeriod: []
  },
  actions: {
    getStandingData: async ({ commit, rootState }, { vendorName }) => {
      const { competitionId, roundName } = rootState.sportsMode.InitialData
      const serviceOutput = await getStandingDataService({ vendorName, params: { competitionId, roundName } })

      commit('SET_STANDING', serviceOutput.standing)
      commit('SET_LOADING', serviceOutput.loading)

      return Promise.resolve(serviceOutput)
    }
  },
  mutations: {
    SET_STANDING (state, standing) {
      state.standing = Object.freeze(standing)
    },
    SET_LOADING: (state, loading) => {
      state.loading = loading
    },
  }
}
