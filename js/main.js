(() => {
    // variables / DOM connections go here
  let sigils = document.querySelectorAll('.teamContainer'),
      houseVid = document.querySelector('video'),
      lightBox = document.querySelector('.lightbox'),
      closeBut = document.querySelector('.close'),
      teamName = document.querySelector('.team-name'),
      teamInfo = document.querySelector('.team-desc'),
      bannersImages = document.querySelector('#teamImages');
  
  
  const teamData = [
      [`About`, `Our Production House provide full range of multi-media design services primary in front-end development, including website design, graphic design, 4D models design and video editing. Our designer team aim to serve our customers through creative design and passionate engery on production outcome. Each of our designers are experienced in their expertises, check out their profiles for exploring their specific style`],
       // index 0 => houseData[0][0], houseData[0][1]
  
  ];
  
  function showTeamData() {
      let currentTeam = this.dataset.offset;
      //debugger;
      // show the right house info on a sigil click
      // this refers to the shield you clicked on
      // this.dataset.offset is the data-offset attribute defined on that html tag
      teamName.textContent = teamData[this.dataset.offset][0];
  
      teamInfo.innerHTML = teamData[this.dataset.offset][1]
  
      teamInfo.textContent = teamData[this.dataset.offset][1]
  
  
      // each banner Image is 600px wide, so multiply that by a numerator
      let animationTotal = 1920 * this.dataset.offset;
  
      // actually change the CSS an animate the banner
      bannersImages.style.right = `${animationTotal}px`;
  
      console.log('move the banner images', animationTotal);
  }
  
      function openlightbox() {
          lightBox.classList.add('show-lightbox');
          houseVid.currentTime = 0;
          houseVid.play();
      }
  
      function closelightbox() {
          houseVid.currentTime = 0;
          houseVid.pause();
          lightBox.classList.remove('show-lightbox');
      }
  
  // event handling here (how is the user going to interact with stuff)
  //sigils.forEach(sigil => sigil.addEventListener('click', openlightbox));
  sigils.forEach(sigil => sigil.addEventListener('click', showTeamData));
  
  houseVid.addEventListener('ended', closelightbox);
  closeBut.addEventListener('click', closelightbox);
  
  
  
  
  })();
  