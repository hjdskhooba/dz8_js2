export let user = {
  login: '',
  email: '',
};

export const getUserFromLocalStorage = () => {
  if (localStorage.getItem('user') !== null) {
    user = JSON.parse(localStorage.getItem('user'));
  } else {
    user = null;
  }
};

export const changeUser = (data) => {
  user = { ...data };
  console.log(user)
  localStorage.setItem('user', JSON.stringify(user));
  location.href = 'http://localhost:63342/new%20project/index.html';
};

