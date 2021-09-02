import axios from 'axios';

export default class Maage {
  constructor() {
    this.baseUrl = 'http://interview.agileengine.com';
  }

  getAuthToken(apiKey) {
    return axios.post(this.baseUrl, apiKey);
  }

  getImages(token) {
    return axios.get(`${this.baseUrl}/images`, {
      headers: `Bearer ${token}`,
    });
  }

  getImageById(token, id) {
    return axios.get(`${this.baseUrl}/images/${id}`, {
      headers: `Bearer ${token}`,
    });
  }
}
