
// const apiUrl = 'https://jsonplaceholder.typicode.com/users';


fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error.message));

