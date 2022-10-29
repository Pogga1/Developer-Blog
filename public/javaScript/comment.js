const commentForm = async (event) => {
  event.preventDefault();

  const commentText = document
    .querySelector('input[name="comment-body"]')
    .value.trim();

  const postId = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (comment_text) {
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        postId,
        commentText,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      document.location.reload();
    } else {
      alert(res.statusText);
    }
  }
};

document
  .querySelector("#comment-form")
  .addEventListener("submit", commentForm);
