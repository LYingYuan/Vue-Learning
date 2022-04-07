export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },
  setCoach(state, payload) {
    state.coaches = payload;
  },
  setFetchTime(state) {
    state.last_fetch_time = new Date().getTime();
  },
};
