<template>
    <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
        <template #default>
            <p>Unfortunately, at least one input value is invalid.</p>
            <p>Please check all inputs and make sure you enter at least a few characters into each input field.</p>
        </template>
        <template #actions>
            <base-button @click="confirmError">Okay</base-button>
        </template>
    </base-dialog>
    <base-card>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input id="title" name="title" type="text" ref="input_title">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea name="description" id="description" rows="3" ref="input_description"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input id="link" name="link" type="url" ref="input_link">
            </div>
            <base-button type="submit">Add Resource</base-button>
        </form>
    </base-card>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseDialog from '../UI/BaseDialog.vue';
export default {
  components: { BaseDialog, BaseButton },
    inject: ['addResource'],
    data() {
        return {
            inputIsInvalid: false,
        }
    },
    methods: {
        submitData() {
            const entered_title = this.$refs.input_title.value;
            const entered_description = this.$refs.input_description.value;
            const entered_link = this.$refs.input_link.value;

            if(entered_title.trim() === '' || entered_description.trim() === '' || entered_link.trim() === ''){
                this.inputIsInvalid = true;
                return;
            }

            this.addResource(entered_title,entered_description,entered_link);
        },
        confirmError() {
            this.inputIsInvalid = false;
        }
    },
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>