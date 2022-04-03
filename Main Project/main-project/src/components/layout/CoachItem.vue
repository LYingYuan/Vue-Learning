<template>
  <li>
    <!-- <h2>{{ first_name }} {{ last_name }}</h2> -->
    <h2>Yingyuan Luo</h2>
    <h3>$39/hour</h3>
    <ul class="coach-class">
      <li>Frontend</li>
      <li>Backend</li>
      <li>Career</li>
    </ul>
    <div>
      <button>Contact</button>
      <button>View Details</button>
    </div>
  </li>
</template>

<style scoped>
li {
  border: 1px solid #3d008d;
  padding: 1rem;
  max-width: 36rem;
  display: flex;
  flex-direction: column;
}

.coach-class {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  color: white;
}

.coach-class li {
  height: 2rem;
  border: none;
  border-radius: 2rem;
  line-height: 1rem;
  padding: 00.5rem 1rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
}

.coach-class li:first-child {
  background-color: #3d008d;
}

.coach-class li:nth-child(2) {
  background-color: #5c0556;
}

.coach-class li:nth-child(3) {
  background-color: #3d008d;
}

div {
  display: flex;
  justify-content: flex-end;
}

div button {
  display: inline-block;
}
</style>
