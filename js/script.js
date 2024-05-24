window.addEventListener('scroll', event => {
  const windowHeight = window.innerHeight;
  const scrollValue = this.scrollY;

  const aboutUsElementFirst = document.querySelector('.about-us__element--first');
  const aboutUsElementFirstFromTop = aboutUsElementFirst.offsetTop;

  const aboutUsElementFirstHeight = aboutUsElementFirst.offsetHeight;
  if (
    scrollValue >
    aboutUsElementFirstFromTop + aboutUsElementFirstHeight / 2 - windowHeight - 200
  ) {
    aboutUsElementFirst.classList.add('about-us__element--right');
  }

  const aboutUsElementSecond = document.querySelector('.about-us__element--second');
  const aboutUsElementSecondTop = aboutUsElementSecond.offsetTop;

  const aboutUsElementSecondHeight = aboutUsElementSecond.offsetHeight;

  if (scrollValue > aboutUsElementSecondTop + aboutUsElementSecondHeight / 2 - windowHeight - 200) {
    aboutUsElementSecond.classList.add('about-us__element--left');
  }

  const aboutUsElementThird = document.querySelector('.about-us__element--third');
  const aboutUsElementThirdTop = aboutUsElementThird.offsetTop;

  const aboutUsElementThirdHeight = aboutUsElementThird.offsetHeight;

  if (scrollValue > aboutUsElementThirdTop + aboutUsElementThirdHeight / 2 - windowHeight - 200) {
    aboutUsElementThird.classList.add('about-us__element--right');
  }
});

const contactLi = document.getElementById('contact-link');
contactLi.addEventListener('click', () => {
  const googlemap = document.getElementById('googlemap');
  googlemap.src = googlemap.src;
});

const navbarLinks = document.querySelectorAll('.navbar-nav .nav-item a');
navbarLinks.forEach(link =>
  link.addEventListener('click', () => {
    navbarLinks.forEach(link => link.classList.remove('activeLink'));
    link.classList.add('activeLink');
  })
);

const showMoreIconsBtn = document.getElementById('showMoreIconsBtn');
showMoreIconsBtn.addEventListener('click', () => {
  const icons = document.querySelectorAll('.icon-hiden');
  icons.forEach(element => element.classList.remove('icon-hiden'));
  console.log('siema');
  showMoreIconsBtn.classList.add('icon-hiden');
});

const formContentTemp = document.getElementById('messageFormSender').innerHTML;

const activeIcons = document.querySelectorAll('.icon-active');
activeIcons.forEach(activeIcon =>
  activeIcon.addEventListener('click', e => {
    const form = document.getElementById('messageFormSender');
    form.innerHTML = formContentTemp;
    document.getElementById('messageForm').scrollIntoView();
    navbarLinks.forEach(link => link.classList.remove('activeLink'));

    const contactLink = document.getElementById('contact-link');
    contactLink.classList.add('activeLink');
    let newInputName = e.target.getAttribute('data-name');
    const flexInput = document.getElementById('flexInput');
    flexInput.placeholder = newInputName;
    flexInput.setAttribute('name', newInputName);

    if (newInputName === 'Wyjazd do') {
      const formContent = form.innerHTML;
      form.innerHTML = `<div class="col-md-10">
        <input type="text" class="form-control" name="Wyjazd od" placeholder="Wyjazd od"  required>
    </div>`;
      form.innerHTML += formContent;
    }
  })
);
