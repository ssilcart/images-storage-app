<template>
  <div class="home">
    <ImagesGrid/>
  </div>
</template>

<script>
// @ is an alias to /src
import ImagesGrid from '@/components/ImagesGrid.vue';

export default {
  name: 'Home',
  components: {
    ImagesGrid,
  },
};
</script>
