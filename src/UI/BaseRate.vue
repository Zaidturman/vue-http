<template>
    <div class="rating">
                <input type="radio" id="star1" name="rating" value="1" />
                <label for="star1">&#9733;</label>
                <input type="radio" id="star2" name="rating" value="2" />
                <label for="star2">&#9733;</label>
                <input type="radio" id="star3" name="rating" value="3" />
                <label for="star3">&#9733;</label>
                <input type="radio" id="star4" name="rating" value="4" />
                <label for="star4">&#9733;</label>
                <input type="radio" id="star5" name="rating" value="5" />
                <label for="star5">&#9733;</label>
</div>
</template>
<style scoped>
.rating {
  display: flex;
  justify-content: space-around;
  font-size: 0;
}

.rating input {
  display: none;
}

.rating label {
  display: inline-block;
  margin: 0 0.25rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: #ccc;
}

.rating input:checked ~ label {
  color: #ffc107;
}

</style>