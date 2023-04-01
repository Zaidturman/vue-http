<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  margin: 2rem auto;
  width: 15rem;
  padding: 1rem;
  border-radius: 12px;
  
  background-color: rgba(49, 49, 49, 0.473);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
div:hover{
  box-shadow: 5px 5px 15px var(--text-color),
    -5px -5px 15px var(--text-color);  
}
</style>