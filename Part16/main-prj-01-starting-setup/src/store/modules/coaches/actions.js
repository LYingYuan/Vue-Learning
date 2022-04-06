export default {
  registerCoach(context, data) {
    const coach = {
      id: context.rootGetters.getUserId,
      first_name: data.first_name,
      last_name: data.last_name,
      areas: data.areas,
      description: data.description,
      hourly_rate: data.hourly_rate,
    };
    context.commit('registerCoach', coach);
  },
};
