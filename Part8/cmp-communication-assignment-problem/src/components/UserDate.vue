<template>
    <form @submit.prevent="submitData">
        <div>
            <label>Name: </label>
            <input type="text" v-model="userName">
        </div>
        <div>
            <label>Age: </label>
            <input type="number" v-model="userAge">
        </div>
        <button>Submit</button>
    </form>
</template>

<script>
export default {
    emits: ['user-data'],
    data() {
        return {
            userName: '',
            userAge: 0,
        }
    },
    methods: {
        submitData() {
            this.$emit('user-data', this.userName, this.userAge);
        }
    },
}
</script>

<style>

</style>