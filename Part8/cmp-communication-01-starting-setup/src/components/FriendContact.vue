<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFavorite"> Toggle Favorite </button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  // props:['name','phoneNumber','emailAddress'],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true, // 必须的
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false, // 如果是个可选的就设置一个默认值，也可以是hi个复杂的函数
      // default: function(){},
      // validator: function(value){ // 验证器:获取它得到的值并检验返回true or false
      //   return value === '1' || value === '0';
      // }
    },
  },
  emits: ['toggle-favorite'],
  // emits: {
  //   'toggle-favorite': function(id) {
  //     if(id){
  //       return true;
  //     }else{
  //       console.warn("ID is missing");
  //       return false;
  //     }
  //   }
  // },
  data() {
    return {
      detailsAreVisible: false,
      // friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite(){
      // this.friendIsFavorite = !this.friendIsFavorite;
      this.$emit('toggle-favorite', this.id);
    }
  }
};
</script>