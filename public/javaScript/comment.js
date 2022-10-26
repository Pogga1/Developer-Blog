const commentForm = async event => {
    event.preventDefault();

    const text = document
        .querySelector('input[name = "comment-info"]')
        .value.trim();


    const postId = window.location.toString().split("/")[
        window.location.toString().split("/").length -1];


    if (comment_text){
        const res = await fetch("/api/comments",{
            method: "POST",
            body: JSON.stringify({
                postId,
                text,
              }),
              headers: {
                "Content-Type": "application/json",
              },
        });
    if (res.ok){
        document.location.reload()
    } else {
        alert(res.statusText)
    }
    }
};

document
    .querySelector('#new-comment')
    .addEventListener('click', commentForm);