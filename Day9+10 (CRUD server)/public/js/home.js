const output = document.querySelector('#output');
const getButton = document.querySelector('#get');
const addButton = document.querySelector('#add');
const inputField = document.querySelector('#field');

async function getPosts() {
  try {
    const res = await fetch('http://localhost:8000/api/posts');
    if (!res.ok) {
      throw new Error('fetching failed');
    }

    const posts = await res.json();
    output.innerHTML = '';

    posts.forEach((post) => {
      const postEl = document.createElement('div');
      postEl.textContent = post.title;
      output.appendChild(postEl);
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    output.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
}

async function addPost() {
  const title = inputField.value.trim();

  if (!title) {
    alert('Please enter a post title');
    return;
  }

  try {
    const res = await fetch('http://localhost:8000/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: title }),
    });

    if (!res.ok) {
      throw new Error('Adding post failed');
    }

    const newPost = await res.json();
    console.log('Post added:', newPost);

    inputField.value = '';
    await getPosts();
  } catch (error) {
    console.error('Error adding post:', error);
    alert(`Error: ${error.message}`);
  }
}

getButton.addEventListener('click', getPosts);
addButton.addEventListener('click', addPost);
