<template>
  <div class="hello">
    <ul class="imagesList">
      <li v-for="image in images" :key="image.id">
        <img :src="image.cropped_picture" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import imagesApi from '../api/imagesApi';

export default {
  name: 'ImagesGrid',
  data() {
    return {
      images: [],
    };
  },
  props: {
    msg: String,
  },
  methods: {
    getImages() {
      imagesApi.getAuthToken().then((tokenResponse) => {
        imagesApi.getImages(tokenResponse.data.token).then((imagesResponse) => {
          this.images = imagesResponse.data.pictures;
          console.log(this.images);
        });
      });
    },
  },
  mounted() {
    this.getImages();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
