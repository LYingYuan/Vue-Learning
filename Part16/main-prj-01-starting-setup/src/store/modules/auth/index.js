import actions from './actions';
import getters from './getters';
import mutations from './getters';

export default {
  namespaced: true,
  state() {
    return {
      // TODO:添加身份验证
      userId: 'c3',
    };
  },
  getters,
  mutations,
  actions,
};
