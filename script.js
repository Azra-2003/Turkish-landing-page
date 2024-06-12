function changeMovieInfo(element) {
    const newTitle = element.getAttribute('data-title');
    const newDescription = element.getAttribute('data-description');
    const newImage = element.getAttribute('data-image');
    
    const activeContent = document.querySelector('.content.active');
    activeContent.querySelector('p.description').innerText = newDescription;
    activeContent.querySelector('img.movie-title').src = newImage;
  }
  {
    var newTitle = element.getAttribute('data-title');
    var newDescription = element.getAttribute('data-description');
    var newImage = element.getAttribute('data-image');
  
    var activeContent = document.querySelector('.content.active');
    var movieTitleImg = activeContent.querySelector('.movie-title');
  
    movieTitleImg.src = newImage;
    movieTitleImg.alt = newTitle;
    activeContent.querySelector('.description').innerText = newDescription;
  }
  
 