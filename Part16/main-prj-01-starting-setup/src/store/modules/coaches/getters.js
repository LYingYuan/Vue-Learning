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
};
