const videos = Array.from(document.querySelectorAll('video'));

videos[0].addEventListener('ended', () => {
  document.querySelector('.next-question-button').scrollIntoView();
});
videos.forEach((e, i) => {
  e.addEventListener('ended', () => {
    videos[i + 1].play();
  });
});
document.querySelectorAll('.answer').forEach((e, i) => {
  e.addEventListener('click', () => {
    alert(`I am the ${i + 1}st answer`);
  });
});

videos[videos.length - 1].addEventListener('ended', () => {
  console.log('happened');
  document.querySelector('.back-to-top').style.display = 'initial';
  videos.slice(1).forEach(e => {
    e.addEventListener('click', () => {
      e.className += ' glowing-border';
      videos.slice(1).forEach(video => {
        if (video !== e) {
          video.classList.remove('glowing-border');
        }
      });
    });
  });
});

videos[0].addEventListener('canplaythrough', () => {
  videos[0].play();
});

videos.slice(1).forEach(e => {
  e.addEventListener('playing', () => {
    e.className += ' playing-answer';
    videos.slice(1).forEach(video => {
      if (video !== e) {
        video.style.visibility = 'hidden';
      }
    });
    e.addEventListener('ended', () => {
      e.classList.remove('playing-answer');
      videos.slice(1).forEach(video => {
        if (video !== e) {
          video.style.visibility = 'initial';
        }
      });
    });
  });
});

document.querySelector('.back-to-top').addEventListener('click', () => {
  document.querySelector('.back-to-top').style.display = 'none';
  document.querySelector('.navbar').scrollIntoView();
});

document
  .querySelector('.replay--makaton-button')
  .addEventListener('click', function() {
    videos[0].play();
  });
