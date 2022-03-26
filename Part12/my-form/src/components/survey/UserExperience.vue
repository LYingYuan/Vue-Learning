<template>
    <base-card>
        <h2>
            Submitted Experiences
        </h2>
        <base-button>Load Submitted Experiences</base-button>
        <ul>
            <survey-result
            v-for="result in results"
            :key="result.id"
            :name="result.name"
            :rating="result.rating"
            ></survey-result>
        </ul>
    </base-card>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
    props: ['results'],
    components: {
        SurveyResult,
    },
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>