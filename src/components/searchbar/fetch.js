

function fetchImg(name) {
  return fetch(`https://pixabay.com/api/?q=${name}&page=1&key=29731703-4e8659812dd82e74a79e4fb84&image_type=photo&orientation=horizontal&per_page=12`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`images is not exist ${name}`));
  });
}

const api = {
  fetchImg,
};

export default api;


