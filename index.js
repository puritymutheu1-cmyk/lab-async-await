// Write your code here!
function getPosts() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', false);
  xhr.send();

  const posts = JSON.parse(xhr.responseText);
  const postList = document.getElementById('post-list');

  posts.forEach(function(post) {
    const h1 = document.createElement('h1');
    h1.textContent = post.title;

const p = document.createElement('p');
p.textContent = post.body;

postList.appendChild(h1);
postList.appendChild(p);
  });
}

getPosts();

 

