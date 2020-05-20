
const API_URL = "http://localhost:8080/posts/";
window.onload = () => {
    getPosts();
}

const getPosts = () => {
    fetch(API_URL, {
        method: 'GET'
    }).then((response) => {
        return response.json();
    }).then((data) => {
        buildPosts(data);
    });
}

const buildPosts = (blogPosts) => {
    let blogPostsContent = "";
    for(var blogPost of blogPosts) {
        const postDate = new Date(parseInt(blogPost.added_date)).toDateString();
        const postLink = `post.html=${blogPost.id}`;

        blogPostsContent += `
            <a class="post-link" href="${postLink}">
                <div class="post">
                    <div class="post-content">
                        <div class="post-date">${postDate}</div>
                        <div class="post-title">
                            <h4>${blogPost.title}</h4>
                        </div>
                        <div class="post-text">
                            <p>${blogPost.content}</p>
                        </div>
                    </div>
                </div>
            </a>
        `;
    }
    document.querySelector(".blog-posts").innerHTML = blogPostsContent;
}
