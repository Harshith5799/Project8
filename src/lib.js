export const APIURL = "https://jsonplaceholder.typicode.com/users"

export function callApi(method, url, body, callback) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.error(error))
}
