<template>
  <div>
    <h1>Find A Coach</h1>
    <div>
      <button class="btn-selected">All Coach</button>
      <button>Request</button>
    </div>
  </div>
</template>

<style scoped>
div {
  padding: 0 10rem;
  color: white;
  background-color: #660099;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  height: 3rem;
  font: inherit;
  /* border: 1px solid #360032; */
  border: none;
  background-color: #660099;
  color: white;
  padding: 0.5rem 2rem;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #5c0556;
  border-color: #5c0556;
}

.btn-selected {
  border: 2px solid #a956d2;
}
</style>
