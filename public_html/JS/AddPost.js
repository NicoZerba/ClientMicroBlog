  
const API_URL = "http://localhost:8080/posts/";

const submitNewPost = () => {
    const title = document.getElementById("form-post-title").value;
    const content = document.getElementById("form-post-content").value;

    let data = new FormData();
    data.append('title', title);
    data.append('content', content);

    fetch(API_URL, {
        method: 'POST',
        body: data
    }).then(() => {
        setTimeout(() => {
            window.location.href= "index.html";
        }, 1000);
    });

};


