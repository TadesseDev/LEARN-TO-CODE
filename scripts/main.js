let main = null;
let header = null;
let customers = null;
let navigation = null;
let mobileMenuToggle = null;
let featureSpeakersSection = null;
// list os speakers inside array of objects
const speakers = [
  {
    witnessImage: './Images/pictures/speaker_01.png',
    imageAlt: 'witness one',
    title: 'Bekalu Berie',
    subTitle: 'Full stack developer fro more than 10 yeats with react JS',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    witnessImage: './Images/pictures/speaker_03.png',
    imageAlt: 'witness two',
    title: 'Yibabie Getenet',
    subTitle: 'Website Developer at ministry of finance',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sem purus, fermentum ac dictum id, dapibus rutrum nunc.',
  },
  {
    witnessImage: './Images/pictures/speaker_02.png',
    imageAlt: 'witness three',
    title: 'Getasew Hailu',
    subTitle: 'Full stack developer fro more than 10 yeats with react JS',
    content:
      'Kilnam Chon helped bring the RE tecnologies to Asia an is and outspoken advocate for the open web and digital commons.',
  },
  {
    witnessImage: './Images/pictures/speaker_04.png',
    imageAlt: 'witness four',
    title: 'Wosane Mulat',
    subTitle: 'Full stack developer fro more than 10 yeats with react JS',
    content:
      'Julia began developing solar concentrators with her research team in 1996. Since 2007, Julia participate in GreenSun Energy.',
  },
  {
    witnessImage: './Images/pictures/speaker_05.png',
    imageAlt: 'witness five',
    title: 'Muluken melkie',
    subTitle: 'Full stack developer fro more than 10 yeats with react JS',
    content:
      'Her research has been primarily focus on development of new routes to enhance performance and stability of next generation solar cells and energy storage devices.',
  },
  {
    witnessImage: './Images/pictures/speaker_06.png',
    imageAlt: 'witness six',
    title: 'Maru Sisay',
    subTitle: 'Full stack developer fro more than 10 yeats with react JS',
    content: 'Ryan had been leading open-source projects at Renewable Energy.',
  },
];

// attache hide mobile menu EVENT
const EventHideMobileMenu = (element, event) => {
  element.addEventListener(event, () => {
    navigation.setAttribute('class', 'hide');
  });
};

// attach show mobile menu EVENT to any element with any event(click,hover,more...).
const EventShowMobileMenu = (element, event) => {
  element.addEventListener(event, () => {
    navigation.setAttribute('class', '');
  });
  const menuElements = Array.from(navigation.querySelectorAll('li'));
  menuElements.push(...Array.from(navigation.querySelectorAll('#close-menu')));
  menuElements.push(...Array.from(navigation.querySelectorAll('.remaining')));
  for (let i = 0; i < menuElements.length; i += 1) {
    EventHideMobileMenu(menuElements[i], 'click');
  }
};

// create list of reputaion's (speakers)
const createSpeakerCard = (speaker) => {
  const reputation = document.createElement('div');
  reputation.classList.add('reputation');

  const witnessImgContainer = document.createElement('span');
  witnessImgContainer.classList.add('witness-img');
  const witnessImg = document.createElement('img');
  witnessImg.src = speaker.witnessImage;
  witnessImg.alt = speaker.imageAlt;
  witnessImgContainer.appendChild(witnessImg);
  reputation.appendChild(witnessImgContainer);

  const text = document.createElement('span');
  text.classList.add('text');

  const title = document.createElement('h2');
  title.classList.add('title');
  title.textContent = speaker.title;
  text.appendChild(title);

  const subTitle = document.createElement('p');
  subTitle.classList.add('sub-title');
  subTitle.textContent = speaker.subTitle;
  text.appendChild(subTitle);

  const hr = document.createElement('hr');
  hr.classList.add('left-tick');
  text.appendChild(hr);

  const content = document.createElement('p');
  content.classList.add('content');
  content.textContent = speaker.content;
  text.appendChild(content);
  reputation.appendChild(text);
  return reputation;
};

const updateSpeakers = (speakerSection, start = 0, end = speakers.length) => {
  for (let i = start; i < end; i += 1) {
    speakerSection.appendChild(createSpeakerCard(speakers[i]));
  }
};
const removeChildren = (element, start = 0, end = speakers.length) => {
  const children = Array.from(element.childNodes);
  for (let i = start; i < end && children[i]; i += 1) {
    element.removeChild(children[i]);
  }
};

// reload window on screen break point changes to keep the dom clean
const winWidth = window.innerWidth;
window.addEventListener('resize', () => {
  if ((winWidth < 768 && window.innerWidth > 768)
    || (winWidth > 768 && window.innerWidth < 768)) {
    window.location.reload();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  main = document.querySelector('main');
  header = main.querySelector('header');
  customers = document.querySelector('#customers');
  mobileMenuToggle = header.querySelector('#drop-menu');
  navigation = header.querySelector('nav');
  EventShowMobileMenu(mobileMenuToggle, 'click');

  try {
    featureSpeakersSection = customers.querySelector('#reputation-list');
    if (window.innerWidth < 768) {
      updateSpeakers(featureSpeakersSection, 0, 2);
      const showMore = document.querySelector('#show-more');
      const showLess = document.querySelector('#show-less');
      showLess.setAttribute('style', 'display: none');
      showMore.addEventListener('click', () => {
        updateSpeakers(featureSpeakersSection, 2);
        showMore.setAttribute('style', 'display: none');
        showLess.setAttribute('style', 'display: flex');
        showLess.addEventListener('click', () => {
          removeChildren(featureSpeakersSection, 2, speakers.length);
          showLess.setAttribute('style', 'display: none');
          showMore.setAttribute('style', 'display: flex');
        });
      });
    } else { updateSpeakers(featureSpeakersSection); }
  } catch (exe) {
    const customException = { code: 403, message: 'Cannot set a feature speaker outside of the home-page' };
    throw customException;
  }
});
