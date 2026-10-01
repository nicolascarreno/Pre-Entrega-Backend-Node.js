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
    } else {
      const data = await request(`${BASE_URL}/${resource}`);
      console.log(data);
    }
  } else if (method === "POST") {
      const [title, ...body] = args;
      const [price , category] = body;

      console.log(body);

      if (!title || !body) {
        throw new Error(
          `Title and body are required for POST requests on ${resource}`,
        );
      }

      const data = await request(`${BASE_URL}/${resource}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, price, category }),
      });
      console.log(data);
  } else if (method === "DELETE") {
      const data = await request(`${BASE_URL}/${resource}/${id}`, { method: "DELETE" })
      console.log(data);
  } else {
    throw new Error(`Unsupported method: ${method}`);
  }
} catch (error) {
  console.log(error.message);
}