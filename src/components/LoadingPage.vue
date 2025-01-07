<template>
  <div class="loading-indicator">
    <!-- Indicateur de chargement, vous pouvez personnaliser cet élément -->
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push('/home');
    }, 3000);
  },
};
</script>

<style scoped>

.loading-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    margin-top: 40vh!important;
}

.loading-indicator::after {
    content: "";
    display: inline-block;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 13px solid white;
    border-top-color: rgb(16, 91, 128);
    border-bottom-color: rgb(16, 91, 128);
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>