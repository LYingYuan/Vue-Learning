export default {
  async registerCoach(context, data) {
    const user_id = context.rootGetters.getUserId;
    const coach = {
      first_name: data.first_name,
      last_name: data.last_name,
      areas: data.areas,
      description: data.description,
      hourly_rate: data.hourly_rate,
    };
    const response = await fetch(
      `https://vue-main-project-a28d9-default-rtdb.firebaseio.com/coaches/${user_id}.json`,
      {
        method: 'PUT',
        header: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(coach),
      }
    );

    // const response_data = await response.json();

    if (!response.ok) {
      // TODO:处理错误
    }

    context.commit('registerCoach', {
      ...coach,
      id: user_id,
    });
  },
  async loadCoaches(context) {
    const response = await fetch(
      `https://vue-main-project-a28d9-default-rtdb.firebaseio.com/coaches/.json`
    );
    const response_data = await response.json();

    if (!response.ok) {
      // TODO:处理错误
      const error = new Error(response_data.message || 'Failed to fetch!');
      throw error;
    }

    const coaches = [];

    for (const key in response_data) {
      const coach = {
        id: key,
        first_name: response_data[key].first_name,
        last_name: response_data[key].last_name,
        areas: response_data[key].areas,
        description: response_data[key].description,
        hourly_rate: response_data[key].hourly_rate,
      };
      coaches.push(coach);
    }
    context.commit('setCoach', coaches);
  },
};
