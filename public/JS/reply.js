const newreply = async (event) => {
    event.preventDefault();
  
    const replyText = document.querySelector('#reply_body').value.trim();
    
    const postId = document.querySelector('#post-data').value.trim();
  
    if (replyText && postId) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ replyText, postId }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  
  document
    .querySelector('#reply-Btn')
    .addEventListener('click', newreply);