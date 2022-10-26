const editForm = async event => {
    event.preventDefault();
    const postTitle = document.querySelector('input[name="post-title"]').value.trim();
    const postInfo = document.querySelector('input[name="Info"]').value.trim();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    const res = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        postTitle,
        postInfo,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
  console.log(res);
    if (res.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  };
  
  document
    .querySelector(".edit-post")
    .addEventListener("submit", editForm);
