<template>
    <learning-survey @submit-form="storeSurvey"></learning-survey>
    <user-experience :results="savedSurveyResults"></user-experience>
</template>

<script>
import LearningSurvey from './components/survey/LearningSurvey.vue';
import UserExperience from './components/survey/UserExperience.vue';

export default {
    components: {
        LearningSurvey,
        UserExperience,
    },
    data() {
        return {
            savedSurveyResults: [],
        };
    },
    methods: {
        storeSurvey(data) {
            const surveyResult = {
                name: data.user_name,
                rating: data.user_experience,
                id: new Date().toISOString(),
            };
            this.savedSurveyResults.push(surveyResult);

        }
    },
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>