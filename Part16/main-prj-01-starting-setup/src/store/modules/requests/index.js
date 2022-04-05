import requestsActions from './actions';
import requestsGetters from './getters';
import requestsMutations from './mutations';

export default {
  namespaced: true,
  state() {
    return {};
  },
  actions: requestsActions,
  getters: requestsGetters,
  mutations: requestsMutations,
};
