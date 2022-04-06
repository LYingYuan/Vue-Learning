<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !first_name.is_valid }">
      <label for="first-name">First Name</label>
      <input
        type="text"
        id="first-name"
        v-model.trim="first_name.val"
        @blur="clearValidity('first_name')"
      />
      <p v-if="!first_name.is_valid">First name must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !last_name.is_valid }">
      <label for="last-name">Last Name</label>
      <input
        type="text"
        id="last-name"
        v-model.trim="last_name.val"
        @blur="clearValidity('last_name')"
      />
      <p v-if="!last_name.is_valid">Last name must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.is_valid }">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
      ></textarea>
      <p v-if="!description.is_valid">Description must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !hourly_rate.is_valid }">
      <label for="hourly-rate">Hourly Rate</label>
      <input
        type="number"
        id="hourly-rate"
        v-model.number="hourly_rate.val"
        @blur="clearValidity('hourly_rate')"
      />
      <p v-if="!hourly_rate.is_valid">Rate must be greater than 0.</p>
    </div>
    <div class="form-control" :class="{ invalid: !areas.is_valid }">
      <h3>Area of Experience</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="career">Career Advisory</label>
      </div>
      <p v-if="!areas.is_valid">At least one expertise must be selected.</p>
    </div>
    <p v-if="!form_is_valid">Please fix the above error and submit again.</p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['submit-form'],
  data() {
    return {
      first_name: {
        val: '',
        is_valid: true,
      },
      last_name: {
        val: '',
        is_valid: true,
      },
      description: {
        val: '',
        is_valid: true,
      },
      hourly_rate: {
        val: null,
        is_valid: true,
      },
      areas: {
        val: [],
        is_valid: true,
      },
      form_is_valid: true,
    };
  },
  methods: {
    // 用户输入正确的数据之后取消样式
    clearValidity(input) {
      this[input].is_valid = true;
    },
    validateForm() {
      // 重置为默认值
      this.first_name.is_valid = true;
      // this.last_name.is_valid = true;
      // this.description.is_valid = true;
      // this.hourly_rate.is_valid = true;
      // this.areas.is_valid = true;
      // this.form_is_valid = true;

      if (this.first_name.val === '') {
        this.first_name.is_valid = false;
        this.form_is_valid = false;
      }
      if (this.last_name.val === '') {
        this.last_name.is_valid = false;
        this.form_is_valid = false;
      }
      if (this.description.val === '') {
        this.description.is_valid = false;
        this.form_is_valid = false;
      }
      if (!this.hourly_rate.val || this.hourly_rate.val < 0) {
        this.hourly_rate.is_valid = false;
        this.form_is_valid = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.is_valid = false;
        this.form_is_valid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.form_is_valid) {
        return;
      }

      const form_data = {
        first_name: this.first_name.val,
        last_name: this.last_name.val,
        description: this.description.val,
        hourly_rate: this.hourly_rate.val,
        areas: this.areas.val,
      };
      this.$emit('submit-form', form_data);
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
