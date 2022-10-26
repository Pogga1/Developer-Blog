const deleteBtn = async event => {
    event.preventDefault();


    const postId = window.location.toString().split("/")[
        window.location.toString().split("/").length - 1
      ];

      const res = await fetch ('/api/posts/${id}', {
        method: 'DELETE',
        body: JSON.stringify({
            post_id: postId,
        }),
        headers: {
            'Content-Type' : 'application/json',
        },
      });
      if (res.ok){
        document.location.replace('/dashboard/')
      } else {
        alert(res.statusText);
      }
};

document.querySelector('#delete-post')
.addEventListener('click', deleteBtn);