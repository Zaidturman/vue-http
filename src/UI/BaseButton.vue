<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  
  border-radius: 10px;
  border: 1px solid var(--first-color);
  background-color: var(--text-color);
  color: var(--first-color);
  padding: 0.5rem 2rem;
  cursor: pointer;
  height: 10%;
}

button:hover,
button:active {
  background-color: var(--first-color);
  border-color: var(--text-color);
  color:var(--text-color);
  
}
</style>