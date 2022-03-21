<template>
    <section>
        <h2>Name: {{ userName }}</h2>
        <h3>Age: {{ userAge }}</h3>
    </section>
</template>

<script>
export default {
    props:{
        userName:{
            type: String,
            required: true,
        },
        userAge:{
            type: Number,
            required: true,
        }
    },
}
</script>

<style>

</style>