const blogContainer = document.querySelector('.blogPosts');
console.log(blogContainer);
const myArticles = document.querySelectorAll('.blogArticle');
console.log(myArticles);
for (let i = 0; i < myArticles.length; i++) {
    myArticles[i].classList.add('currentBlog');
}
blogContainer.classList.add('currentBlog');
console.log(blogContainer);
