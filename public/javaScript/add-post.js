const newPostHandler = async event => {
    event.preventDefault();
    
    const postTitle = document.querySelector('input[name = "title"]').value;
    const postInfo = document.querySelector('input[name = "Info"]').value;

    const res = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            postTitle,
            postInfo,
        }),
         titles: {
            "Content-Type": "application/json",
         },
    });

    console.log(res)
    if (res.ok) {
        document.location.replace('/')
    }
}
