import axios from 'axios';

class ImagesApi {
  constructor() {
    this.baseUrl = 'http://interview.agileengine.com';
    this.apiKey = '23567b218376f79d9415';
  }

  getAuthToken() {
    return axios.post(`${this.baseUrl}/auth`, {
      apiKey: this.apiKey,
    });
  }

  getImages(token) {
    return axios.get(`${this.baseUrl}/images`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getImageById(token, id) {
    return axios.get(`${this.baseUrl}/images/${id}`, {
      headers: `Bearer ${token}`,
    });
  }
}

export default new ImagesApi();
