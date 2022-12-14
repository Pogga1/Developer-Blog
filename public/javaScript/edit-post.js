const editForm = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const content = document.querySelector('input[name="content"]').value.trim();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const res = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(res);
  if (res.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(res.statusText);
  }
};

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editForm);
