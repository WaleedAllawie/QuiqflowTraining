const output = document.querySelector("#output");
const getButton = document.querySelector("#get");
const input = async function getPosts() {
  const res = await fetch("http://localhost:8000/api/posts");
  if (!res.ok) {
    throw new Error("fetching failed");
  }

  const posts = await res.json();
  document.innerHTML = "";

  posts.forEach((post) => {
    const postEl = document.createElement("div");
    postEl.textContent = post.title;
    output.appendChild(postEl);
  });
};

async function addPost(input) {}
getButton.addEventListener("click", getPosts);
