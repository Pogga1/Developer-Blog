const postForm = async event => {
    event.preventDefault();
    
    const title = document.querySelector('input[name = "title"]').value;
    const content = document.querySelector('input[name = "content"]').value;

    const res = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            content,
        }),
         headers: {
            "Content-Type": "application/json",
         },
    });

    console.log(res)
    if (res.ok) {
        document.location.replace('/dashboard')
    } else {
        alert(res.statusText)
    }
};

document
    .querySelector("#new-post")
    .addEventListener('click', postForm)

