function addComment(commentDivId, inputId) {
    const commentDiv = document.getElementById(commentDivId);
    const input = document.getElementById(inputId);
    const commentText = input.value.trim();

    if (commentText) {
        const newComment = document.createElement('p');
        newComment.textContent = commentText;
        commentDiv.appendChild(newComment);
        input.value = ''; // Clear input
    }
}
