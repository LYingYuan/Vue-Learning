export default {
  // 返回所有教师
  coaches(state) {
    return state.coaches;
  },
  // 返回是否有数据
  hasCoach(state) {
    return state.coaches && state.coaches.length > 0;
  },
  // 判断该用户是否是教师
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches;
    const user_id = rootGetters.getUserId;
    return coaches.some((coach) => coach.id === user_id);
  },
  shouldUpdate(state) {
    const last_fetch_time = state.last_fetch_time;
    if (!last_fetch_time) {
      return true;
    }
    const current_time = new Date().getTime();
    return (current_time - last_fetch_time) / 1000 > 60;
  },
};
