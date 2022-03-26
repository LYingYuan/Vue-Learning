<template>
    <section>
        <base-card>
            <h2>How was your learning experience?</h2>
            <form @submit.prevent="submitForm">
                <div class="form-control">
                    <label for="name">Your Name</label>
                    <input type="text" name="name" v-model.trim="user_name">
                </div>
                <h3>My learning experience was...</h3>
                <div class="from-control">
                    <input type="radio" id="rating-poor" name="rating" value="poor" v-model="user_experience">
                    <label for="rating-poor">Poor</label>
                </div>
                <div class="form-control">
                    <input type="radio" id="rating-average" name="rating" value="average" v-model="user_experience">
                    <label for="rating-average">Average</label>
                </div>
                <div class="form-control">
                    <input type="radio" id="rating-great" name="rating" value="great" v-model="user_experience">
                    <label for="rating-great">Great</label>
                </div>
                <p v-if="invalid_input">
                    One or more input fields are invalid. Please check your provided data.
                </p>
                <div>
                    <base-button>Submit</base-button>
                </div>
            </form>
        </base-card>
    </section>
</template>

<script>
export default {
    data() {
        return {
            user_name: "",
            user_experience: null,
            invalid_input: false,
        };
    },
    emits: ['submit-form'],
    methods: {
        submitForm() {
            // console.log(this.user_name);
            // console.log(this.user_experience);
            if(this.user_name === '' || !this.user_experience) {
                this.invalid_input = true;
                return;
            }
            this.invalid_input = false;

            this.$emit('submit-form',{
                user_name: this.user_name,
                user_experience: this.user_experience,
            });

            this.user_name = '';
            this.user_experience = null;
        },
    },
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>