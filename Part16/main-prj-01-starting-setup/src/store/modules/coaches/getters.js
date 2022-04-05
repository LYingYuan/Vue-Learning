export default {
  // 返回所有教师
  coaches(state) {
    return state.coaches;
  },
  // 返回是否有数据
  hasCoach(state) {
    return state.coaches && state.coaches.length > 0;
  },
};
