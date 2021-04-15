const newPostHandler = async (event) => {
  event.preventDefault();
console.log(newPostHandler)
  const name = document.querySelector("#post-name").value.trim();

  const description = document.querySelector("#post-desc").value.trim();

  if (name && description) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ name, description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create post");
    }
  }
};

document.querySelector("#newpost")
.addEventListener("click", newPostHandler);
