/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Kevin karkar',
  title: "Hi all, I'm kevin",
  subTitle: emoji(
    'A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.'
  ),
  resumeLink:
    'https://drive.google.com/file/d/15AiAFXUQZ1CsJB1KBxeR9M7t62GVtqHt/view?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: '',
  linkedin: 'www.linkedin.com/in/kevinkarkar',
  gmail: 'kevinkarkar9@gmail.com',
  gitlab: 'https://gitlab.com/kevinkarkar5',
  facebook: 'https://gitlab.com/kevinkarkar5',
  medium: '',
  stackoverflow: 'https://stackoverflow.com/users/14768631/kevin-karkar',
  upwork : 'https://gitlab.com/kevinkarkar5',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji(
      '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'
    ),
    // emoji('⚡ '),
    emoji(
      '⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: 'fab fa-sass',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'swift',
      fontAwesomeClassname: 'fab fa-swift',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'fab fa-aws',
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'fas fa-fire',
    },
    {
      skillName: 'python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Parul University',
      logo: require('./assets/images/Parul_university.jpg'),
      subHeader: 'Diploma in Information Technology',
      duration: 'March 2013 - April 2017',
      desc: 'Participated in the research of Gesture Control Car and published 1 papers.',
      // descBullets: [
      //   '',
      // ],
    },
    {
      schoolName: 'Charusat University',
      logo: require('./assets/images/Charusat.png'),
      subHeader: 'Bachelor of Science in Information technology',
      duration: 'September 2017 - April 2021',
      desc:
        'Ranked First Class in the program. Took courses about Software Engineering, IOT(Internet of things), Web Development, ...',
      // descBullets: [''],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    // {
    //   //role: 'Junior Developer',
    //   //company: 'RlayCode',
    //   //companylogo: require(''),
    //   // date: 'June 2018 – Present',
    //   // desc:
    //   //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //   // // descBullets: [
    //   //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    //   //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    //   // ],
    // },
    // {
    //   role: 'Front-End Developer',
    //   company: 'Quora',
    //   companylogo: require('./assets/images/quoraLogo.png'),
    //   date: 'May 2017 – May 2018',
    //   desc:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    // },
    // {
    //   role: 'Software Engineer Intern',
    //   company: 'Airbnb',
    //   companylogo: require('./assets/images/airbnbLogo.png'),
    //   date: 'Jan 2015 – Sep 2015',
    //   desc:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    // },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'kevinkarkar', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/saayaHealthLogo.webp'),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: 'Visit Website',
          url:
            'http://saayahealth.com/',
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require('./assets/images/nextuLogo.webp'),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: 'Visit Website',
          url:
            'http://nextu.se/',
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'Google Code-In Finalist',
      subtitle:
        'Selected as Google Code-in Finalist from 4000 students from 77 different countries.',
      image: require('./assets/images/codeInLogo.webp'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://drive.google.com/file/d/1oVWQaqSIvxDuUNpbejRxqwKJPdW_uB_v/view?usp=sharing',
        },
        {
          name: 'Award Letter',
          url:
            'https://drive.google.com/file/d/11CwDPgd9EM2hjcAPcNqZYZ-_KHJWJ4L5/view?usp=sharing',
        },
       
      ],
    },
  
    {
      title: 'AWS Certified Solutions Architect',
      subtitle: 'Completed Certifcation from Charusat University',
      image: require('./assets/images/AWS.png'),
      footerLink: [
          // { name: 'Certification', url: '' },
          // // {
          // //   // name: 'Final Project',
          // //   url: 'https://pakistan-olx-1.firebaseapp.com/',
          // // },
      ],
    },
    {
      title: 'Google Assistant Action',
      subtitle:
        'Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.',
      image: require('./assets/images/googleAssistantLogo.webp'),
      footerLink: [
        // {
        //   name: 'View Google Assistant Action',
        //   url:
        //     'https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en',
        // },
      ],
    },

  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
      title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    },
    {
      url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '+91-8866194105',
  emailAddress: 'Kevinkarkar9@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
