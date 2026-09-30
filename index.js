const [, , method, route, ...args] = process.argv;

const [resource, id] = route.split("/");

const BASE_URL = "https://fakestoreapi.com";

const request = async (url, options = {}) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.json();
};