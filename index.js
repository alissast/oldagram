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
        <article id="post-0" class="post">
        <header class="post-header">
            <img class="avatar" src="images/avatar-vangogh.jpg" alt="Avatar of Vincent Van Gogh">
            <div class="user-info">
                <h2 id="name-0" class="accent-text">Vincent van Gogh</h2>
                <p id="location-0" class="small-text">Zudert, Netherlands</p>
            </div>
        </header>
        <figure>
            <img class="post-image" src="images/post-vangogh.jpg" alt="Self-portrait of Vincent van Gogh in oil on canvas from September 1889.">
            <div class="post-image-btn-info">
                <div class="btn-container">
                    <button id="heart-btn-0" class="icon-btn" aria-label="Like image"><img class="btn-img" src="images/icon-heart.png" alt=""></button>
                    <button id="comment-btn-0" class="icon-btn" aria-label="Add a comment"><img class="btn-img" src="images/icon-comment.png" alt=""></button>
                    <button id="dm-btn-0" class="icon-btn" aria-label="Send a message"><img class="btn-img" src="images/icon-dm.png" alt=""></button>
                </div>
                <figcaption class="post-caption">
                    <p id="likes-text-0" class="accent-text">21,492 likes</p>
                    <p id="caption-text-0" class="username"><span id="username-0" class="accent-text"><a href="#">vincey1853</a></span> just took a few mushrooms lol</p>
                </figcaption>
            </div>
        </figure>
    </article>
    `
}

mainEl.innerHTML = html