<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="first-name">First Name</label>
      <input type="text" id="first-name" v-model.trim="first_name" />
    </div>
    <div class="form-control">
      <label for="last-name">Last Name</label>
      <input type="text" id="last-name" v-model.trim="last_name" />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea id="description" rows="5" v-model.trim="description"></textarea>
    </div>
    <div class="form-control">
      <label for="hourly-rate">Hourly Rate</label>
      <input type="number" id="hourly-rate" v-model.number="hourly_rate" />
    </div>
    <div class="form-control">
      <h3>Area of Experience</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas" />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input type="checkbox" id="backend" value="backend" v-model="areas" />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model="areas" />
        <label for="career">Career Advisory</label>
      </div>
    </div>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      first_name: '',
      last_name: '',
      description: '',
      hourly_rate: null,
      areas: [],
    };
  },
  methods: {
    submitForm() {
      const form_data = {
        first_name: this.first_name,
        last_name: this.last_name,
        description: this.description,
        hourly_rate: this.hourly_rate,
        areas: this.areas,
      };
      console.log(form_data);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
