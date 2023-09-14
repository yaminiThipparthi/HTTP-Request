const container = document.querySelector(".container");
const title = document.querySelector(".title");
const btn = document.querySelector("#btn");

//Making http request

//1. Get the endppoint of the server/api
const url = "https://jsonplaceholder.typicode.com/posts";
const fetchPosts = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    //display to DOM
    const results = data.map(post => {
      return `
        <div class="card">
        <div class="card-title">
          <h2>${post.title}</h2>
        </div>
        <div class="card-body">
          <p>
           ${post.body}
          </p>
        </div>
      </div>
        `;
    });
    container.innerHTML = results.join("");
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener("click", fetchPosts);
