<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="is_loading">Loading...</p>
      <p v-else-if="!is_loading && error">
        {{ error }}
      </p>
      <p v-else-if="!is_loading && (!results || results.length === 0)">No stored experiences found. Start adding some survey results first.</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      is_loading: false,
      error: null,
    };
  },
  methods: {
    loadExperiences() {
      this.is_loading = true;
      this.error = null;
      fetch('https://vue-http-demo-8ddeb-default-rtdb.firebaseio.com/surveys.json').then((res) => {
          if(res.ok) {
            // 自带的ok
            return res.json(); // 解析JSON格式的数据
          }
        }
      ).then((data) => {
        // console.log(data);
        this.is_loading = false;
        const results = [];
        for(const id in data){
          results.push({
            id: id,
            name: data[id].name,
            rating: data[id].rating,
          });
        }
        this.results = results;
      }).catch((error) => {
        console.log(error);
        this.is_loading = false;
        this.error = 'Failed to fetch data - please try again later.';
      });
    }
  },mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>