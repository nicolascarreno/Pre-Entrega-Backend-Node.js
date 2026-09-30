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

try {
  if (method === "GET") {
    if (id) {
      const data = await request(`${BASE_URL}/${resource}/${id}`);
      console.log(data);
    } 
  } else {
    throw new Error(`Unsupported method: ${method}`);
  }
} catch (error) {
  console.log(error.message);
}