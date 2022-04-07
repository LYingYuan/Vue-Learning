export default {
  requests(state, _, _2, rootGetters) {
    const user_id = rootGetters.getUserId;
    return state.requests.filter((req) => req.coach_id === user_id);
  },
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0;
  },
};
