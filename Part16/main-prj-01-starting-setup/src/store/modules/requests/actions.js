export default {
  async contactCoach(context, payload) {
    const new_request = {
      user_email: payload.email,
      message: payload.message,
    };

    const response = await fetch(
      `https://vue-main-project-a28d9-default-rtdb.firebaseio.com/requests/${payload.coach_id}.json`,
      {
        method: 'POST',
        body: JSON.stringify(new_request),
      }
    );

    const response_data = await response.json();

    if (!response.ok) {
      const error = new Error(
        response_data.message || 'Failed to send request.'
      );
      throw error;
    }

    new_request.id = response_data.name;
    new_request.coach_id = payload.coachId;

    context.commit('addRequest', new_request);
  },
  async fetchRequests(context) {
    const coach_id = context.rootGetters.getUserId;
    const response = await fetch(
      `https://vue-main-project-a28d9-default-rtdb.firebaseio.com/requests/${coach_id}.json`
    );
    const response_data = await response.json();
    if (!response.ok) {
      const error = new Error(
        response_data.message || 'Failed to fetch requests.'
      );
      throw error;
    }

    const requests = [];

    for (const key in response_data) {
      const request = {
        id: key,
        coach_id: coach_id,
        user_email: response_data[key].user_email,
        message: response_data[key].message,
      };
      requests.push(request);
    }
    context.commit('setRequests', requests);
  },
};
