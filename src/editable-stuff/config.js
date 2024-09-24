// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Jamie",
  middleName: "",
  lastName: "Waters",
  message: " Passionate about enabling inovative thought-provoking theatre.  ",
  icons: [
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/housane12/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jamie-waters-450a021b5/",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/share/YCuzcHP9ZZG4Tqss/?mibextid=LQQJ4d",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/jamie.png"),
  imageSize: 375,
  message:
    "My name is Jamie and I am a Freelance AV and Theatre Technician with a focus on live sound. I have 8 years of technical experience, including a year of professional work. I appreciate the creative problem solving involved in technical theatre and especially theatrical sound. I have worked on a range of shows and events from supervising sound at Ed fringe 2024 to a small-scale tour with NTW in late 2023. I am passionate about how immersive and semi-immersive theatre can involve the audience in experiencing a deeper connection to the story.",
  resume: "https://nextcloud.housane.co.uk/s/H8LZBByGem4NS43",
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Recent Projects",
  message:
    "Here is a selection of my recent work",
  images: [
    { 
      img: require("../editable-stuff/fringe.png"), 
      label: "Sound Supervisor - Edinbrugh Fringe 2024", 
      paragraph: "Looking after the medium sized venues from a Sound/Video perspective throughout the festival proividing first line support to the venue crews to ensure smooth running of the festival, based at the Pleasance Courtyard." 
    },
    { 
      img: require("../editable-stuff/cof.png"), 
      label: "Sound & Video Technician - Circle of Fifths", 
      paragraph: "This was a small scale Welsh tour exploring the rituals around death and dying in the Butetown community. I was responsible for all of the Sound and Video aspects of the show while on tour, as well as responsible for Sound through the rehearsal process." 
    },
    { 
      img: require("../editable-stuff/darksl.png"), 
      label: "Technical Director - Dark Slate Theatre Company", 
      paragraph: "Coordinating all things technical across our shows most recently on The Unspoken. We take influence from film noir, German expressionism, and immersive theatre creating unique and engaging experiences for our audiences" 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Q-Lab", value: 80 },
    { name: "ETC Eos", value: 65 },
    { name: "dlive", value: 70 },
    { name: "Project Management", value: 70 },
  ]
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for freelance oppotunities in and around London, if you think theres a project we could work together on please reach out",
  email: "hello@jrwtechnical.uk",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "judoguy12", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

const experiences = {
  show: true,
  heading: "Skills",
  data: [
    {
      role: 'Dante Networking',// Here Add Company Name
      date: 'Acheved June 2024',
    },
    {
      role: 'First Aid at Work',
      date: 'Valid to November 2024',
    },
    {
      role: 'Q-Lab',
      date: 'Solid understanding of Q-Lab networking, sound and video',
    },
    {
      role: 'Desks I have worked on',
      date: 'X32, dLive, Yamaha CL/QL, DiGiCo SD10, SQ series',
    },
    {
      role: 'Project Management',
      date: 'Experience accros a variety of projects from live music to musicals to theatre shows with both large and small teams',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, skills, leadership, getInTouch, repos, experiences };
