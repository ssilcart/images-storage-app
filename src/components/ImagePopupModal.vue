<template>
  <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">
                Image Popup
              </slot>
            </div>
            <div class="modal-body">
              <img class="full-width-image" :src="imageUrl" alt="">
              <button class="modal-default-button" v-on:click="$emit('close')">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
</template>

<script>
import imagesApi from '@/api/imagesApi';

export default {
  name: 'ImagePopupModal',
  props: {
    imageId: String,
  },
  emits: ['close'],
  data() {
    return {
      imageUrl: '',
    };
  },
  methods: {
    getImages() {
      imagesApi.getAuthToken().then((tokenResponse) => {
        imagesApi.getImageById(tokenResponse.data.token, this.imageId).then((imageResponse) => {
          this.imageUrl = imageResponse.data.full_picture;
        });
      });
    },
  },
  mounted() {
    this.getImages();
  },
};
</script>

<style scoped>
#app {
  padding: 1rem;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 50%;
  max-height: 90vh;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  display: block;
  margin-top: 1rem;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.full-width-image {
  max-width: 100%;
  max-height: 100%;
}
</style>
