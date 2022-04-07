export default {
  contactCoach(context, payload) {
    const new_request = {
      id: new Date().toISOString(),
      coach_id: payload.coach_id,
      user_email: payload.email,
      message: payload.message,
    };

    // TODO:添加fetch请求(POST)
    fetch(
      'https://vue-main-project-a28d9-default-rtdb.firebaseio.com/requests.json'
    );
    context.commit('addRequest', new_request);
  },
};
