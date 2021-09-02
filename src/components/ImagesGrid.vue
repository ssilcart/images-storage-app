<template>
  <div class="container">
    <button v-on:click="prevPage()">Previous page</button>
    &nbsp;
    <button v-on:click="nextPage()">next page</button>
    <ul class="images-list col-12">
      <li v-for="image in images" :key="image.id">
        <img :src="image.cropped_picture" v-on:click="openImageModal(image.id)" alt="">
      </li>
    </ul>
    <div v-if="selectedImage">
      <ImagePopupModal :imageId="selectedImage" @close="closeImageModal()"/>
    </div>
  </div>
</template>

<script>
import imagesApi from '@/api/imagesApi';
import ImagePopupModal from '@/components/ImagePopupModal.vue';

export default {
  name: 'ImagesGrid',
  components: {
    ImagePopupModal,
  },
  data() {
    return {
      images: [],
      selectedImage: null,
      page: 1,
    };
  },
  props: {
    msg: String,
  },
  methods: {
    closeImageModal() {
      this.selectedImage = null;
    },
    openImageModal(imageId) {
      this.selectedImage = imageId;
    },
    nextPage() {
      this.page += 1;
      this.getImages();
      console.log(this.page);
    },
    prevPage() {
      this.page = this.page > 1 ? this.page - 1 : 1;
      this.getImages();
    },
    getImages() {
      imagesApi.getAuthToken().then((tokenResponse) => {
        imagesApi.getImages(tokenResponse.data.token, this.page).then((imagesResponse) => {
          this.images = imagesResponse.data.pictures;
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
