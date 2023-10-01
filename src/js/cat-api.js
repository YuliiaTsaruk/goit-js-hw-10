import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_FSbrVVdV1KveLIxw1A3Sv3BEOuNoZ5PbYRfGT8FTe4L7bu3QhSxm43yocnRP8Mk8';

export function fetchBreeds() {
  return axios('https://api.thecatapi.com/v1/breeds').then(response => {
    if (response.status !== 200) {
      throw new Error(error);
    }
    return response.data;
  });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error(error);
      }
      return response.data;
    });
}
