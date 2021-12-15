// Pop up message and clear title on submit button click
const submitArticle = document.querySelector(".post");
const submissionMessageVisible = document.querySelector(".submission-message");
const clearTitle = document.querySelector(".title-area");

submitArticle.addEventListener("click", articlePublished);

function articlePublished() {
    submissionMessageVisible.style.visibility = "visible";
    clearTitle.value = "";
}

// Clear main article content on submit button click
const clearMainContent = document.querySelector(".content");

submitArticle.addEventListener("click", clearRest);

function clearRest() {
    clearMainContent.value = "";
}


// Close pop up window
const closeWindow = document.querySelector(".close-button");

closeWindow.addEventListener("click", clearPage);

function clearPage() {
    submissionMessageVisible.style.visibility = "hidden";
}




