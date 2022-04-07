import coachesActions from './actions';
import coachesGetters from './getters';
import coachesMutations from './mutations';

export default {
  namespaced: true,
  state() {
    return {
      last_fetch_time: null,
      coaches: [
        {
          id: 'c1',
          first_name: 'Maximilian',
          last_name: 'Schwarzmüller',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourly_rate: 30,
        },
        {
          id: 'c2',
          first_name: 'Julie',
          last_name: 'Jones',
          areas: ['frontend', 'career'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourly_rate: 30,
        },
      ],
    };
  },
  actions: coachesActions,
  getters: coachesGetters,
  mutations: coachesMutations,
};
