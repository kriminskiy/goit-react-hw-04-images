function fetchSearchbar(searchName, page) {
  const API_KEY = '27628279-3e18d904f0feb804923cb7efd';
  return fetch(
    `https://pixabay.com/api/?q=${searchName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(r => {
    if (!r.ok) {
      return Promise.reject(new Error(`нет запроса ${searchName}`));
    }
    return r.json();
  });
}

const api = {
  fetchSearchbar,
};

export default api;
