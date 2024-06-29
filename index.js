const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainEl = document.getElementById("main")
let html = ""
for (let i = 0; i < posts.length; i++) {
    html += `
        <article id="post-${i}" class="post">
        <header class="post-header">
            <img class="avatar" src="${posts[i].avatar}" alt="Avatar of ${posts[i].name}">
            <div class="user-info">
                <h2 id="name-${i}" class="accent-text">${posts[i].name}</h2>
                <p id="location-${i}" class="small-text">${posts[i].location}</p>
            </div>
        </header>
        <figure>
            <img class="post-image" src="${posts[i].post}" alt="Self-portrait of ${posts[i].name} in oil on canvas from September 1889.">
            <div class="post-image-btn-info">
                <div class="btn-container">
                    <button id="heart-btn-${i}" class="icon-btn" aria-label="Like image"><img class="btn-img" src="images/icon-heart.png" alt=""></button>
                    <button id="comment-btn-${i}" class="icon-btn" aria-label="Add a comment"><img class="btn-img" src="images/icon-comment.png" alt=""></button>
                    <button id="dm-btn-${i}" class="icon-btn" aria-label="Send a message"><img class="btn-img" src="images/icon-dm.png" alt=""></button>
                </div>
                <figcaption class="post-caption">
                    <p id="likes-text-${i}" class="accent-text">${posts[i].likes === 1 ? posts[i].likes + ' like' : posts[i].likes + ' likes'}</p>
                    <p id="caption-text-${i}" class="username"><span id="username-${i}" class="accent-text"><a href="#">${posts[i].username}</a></span> ${posts[i].comment}</p>
                </figcaption>
            </div>
        </figure>
    </article>
    `
}

mainEl.innerHTML = html