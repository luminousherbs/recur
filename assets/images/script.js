console.log(location.pathname);

nameField.addEventListener("input", function() {
    imageField.src = linkField.href = nameField.value;
})