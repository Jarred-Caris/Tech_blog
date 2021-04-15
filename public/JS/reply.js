const newreply = async (event) => {
  event.preventDefault();
  console.log("error");

  const replyText = document.querySelector("#reply_body").value.trim();

  const postId = document.querySelector("#reply_body").dataset.postid;
  console.log(document.querySelector("#reply_body").dataset);
  if (replyText && postId) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ replyText, postId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace(`/post/${postId}`);
    } else {
      alert("Failed to create reply");
    }
  }
};

document.querySelector("#reply-Btn").addEventListener("click", newreply);
