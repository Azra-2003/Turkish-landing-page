function changeMovieInfo(element) {
    const newTitle = element.getAttribute('data-title');
    const newDescription = element.getAttribute('data-description');
    const newImage = element.getAttribute('data-image');
    
    const activeContent = document.querySelector('.content.active');
    activeContent.querySelector('p.description').innerText = newDescription;
    activeContent.querySelector('img.movie-title').src = newImage;
  }
  //function changeMovieInfo(element) {
    var newTitle = element.getAttribute('data-title');
    var newDescription = element.getAttribute('data-description');
    var newImage = element.getAttribute('data-image');
  
    var activeContent = document.querySelector('.content.active');
    var movieTitleImg = activeContent.querySelector('.movie-title');
  
    movieTitleImg.src = newImage;
    movieTitleImg.alt = newTitle;
    activeContent.querySelector('.description').innerText = newDescription;
  //}
  
  
     // function changeMovieInfo(element) {
      //  var title = element.getAttribute("data-title");
    
        // Remove active class from all .content elements
       // document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
    
        // Add active class to the corresponding .content element
      //  var correspondingContent = document.querySelector(`.content.${title.toLowerCase().replace(/\s+/g, '-')}`);
      //  correspondingContent.classList.add('active');
    
        // Call changeBg function with information from corresponding content
      //  changeBg(correspondingContent);
 //   }
    
    // Change background images and movie content text
   // function changeBg(content) {
       // const banner = document.querySelector('.banner');
      //  const movieTitle = content.querySelector('.movie-title');
     //   const yearSpan = content.querySelector('.year');
     //   const ageSpan = content.querySelector('.age');
      //  const lengthSpan = content.querySelector('.length');
      //  const genreSpan = content.querySelector('.genre');
      //  const descriptionPara = content.querySelector('.description');
    
       // const imageSrc = movieTitle.getAttribute('src');
    
       // banner.style.background = `url("${imageSrc}")`;
       // banner.style.backgroundSize = 'cover';
       // banner.style.backgroundPosition = 'center';
    
        // You can update other elements with their corresponding information
        // Example:
        // yearSpan.innerText = ...
        // ageSpan.innerText = ...
        // lengthSpan.innerText = ...
        // genreSpan.innerText = ...
        // descriptionPara.innerText = ...
  //  }
    