export default {
  contactCoach(context, payload) {
    const new_request = {
      id: new Date().toISOString(),
      coach_id: payload.coach_id,
      user_email: payload.email,
      message: payload.message,
    };
    context.commit('addRequest',new_request);
  },
};
