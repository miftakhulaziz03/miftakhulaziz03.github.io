import emoji from "react-easy-emoji";

const illustration = {
  animated: true 
};

const greeting = {
  username: "miftakhulaziz03",
  title: "Hallo everyone i'm amift",
  subTitle: emoji(
    "🚀 Let me introduce myself, I'm Miftakhul Aziz, currently a graduate of Computer Science from the Sumatra Institute of Technology with a data science background is accustomed to using the programming languages Python, Java, Javascript, Anaconda, Linux, TensorFlow, Keras, Scikit-learn, OpenCV, Github, Pandas, Matplotlib. I am very interested in the field of data scientists, therefore I am motivated by continuing to learn fast, have problem-solving skills, are reliable, can work well with a team, have good communication, and are responsible."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1cmEQCSQ6sEaDVFlmj_RYNs5k_kiQ_Bpa/view?usp=sharing",
  texts: "Follow me on",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/miftakhulaziz03",
  linkedin: "https://www.linkedin.com/in/miftakhulaziz03/",
  gmail: "azizmiftakhul19@gmail.com",
  medium: "https://miftakhulaziz03.medium.com/",
  gitlab: "https://gitlab.com/miftakhulaziz03",
  twitter: "https://twitter.com/amift",
  instagram: "https://instagram.com/amift_",
  display: true 
};

const skillsSection = {
  title: "Technology Stack",
  subTitle: "TECH STACK",
  skills: ["Python, TensorFlow, Anaconda", "Node Stack, JavaScript, React Js" , "Machine Learning, Data Scientist, Deep Learning"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  // softwareSkills: [
  //   {
  //     skillName: "JavaScript",
  //     fontAwesomeClassname: "fab fa-js"
  //   },
  //   {
  //     skillName: "reactjs",
  //     fontAwesomeClassname: "fab fa-react"
  //   },
  //   {
  //     skillName: "nodejs",
  //     fontAwesomeClassname: "fab fa-node"
  //   },
  //   {
  //     skillName: "tensorflow",
  //     fontAwesomeClassname: "fas fa-tensorflow"
  //   },
  //   {
  //     skillName: "npm",
  //     fontAwesomeClassname: "fab fa-npm"
  //   },
  //   {
  //     skillName: "sql-database",
  //     fontAwesomeClassname: "fas fa-database"
  //   },
  //   {
  //     skillName: "aws",
  //     fontAwesomeClassname: "fab fa-aws"
  //   },
  //   {
  //     skillName: "firebase",
  //     fontAwesomeClassname: "fas fa-fire"
  //   },
  //   {
  //     skillName: "python",
  //     fontAwesomeClassname: "fab fa-python"
  //   },
  //   {
  //     skillName: "docker",
  //     fontAwesomeClassname: "fab fa-docker"
  //   }
  // ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sumatra Institut of Technology",
      logo: require("./assets/images/itera.png"),
      subHeader: "Bachelor of Computer Science",
      duration: "August 2016 - February 2021",
      desc: "Thesis - Identification of Police Number Characters on a Vehicle License Using Convolutional Neural Networks",
      descBullets: [
        "Applying SSD Resnet-50 Object Detection",
        "Applying YOLO-V3 Object Detection",
        "Applying MobileNet-V2 Classification Characters"
      ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc:
    //     "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Scientist", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Backend - Internship",
      company: "CyberLabs",
      companylogo: require("./assets/images/cyberLabs.jpeg"),
      date: "June 2019 – September 2019",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Laboratory Assistant Data Mining",
      company: "Sumatra Institute of Technology",
      companylogo: require("./assets/images/itera.png"),
      date: "May 2017 – May 2018",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Laboratory Assistant Embedded System",
      company: "Sumatra Institute of Technology",
      companylogo: require("./assets/images/itera.png"),
      date: "Jan 2015 – Sep 2015",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    " ",

  blogs: [
    {
      url:
        "https://miftakhulaziz03.medium.com/deteksi-virus-covid-19-pada-dataset-x-rays-menggunakan-convolutional-neural-networks-750b1e60e6a1",
      title: "Menerapkan VGG-16 Dalam Mengidentifikasi Virus COVID-19 Pada Gambar CT-Scan atau XRays",
      description:
        "Virus covid-19 yang menyebar pada akhir tahun 2019 sampai sekarang masih menjadi penyebab tingkat kematian yang tinggi didunia, hal ini dipicu oleh beberapa faktor seperti dengan cepatnya virus ini menyebar antar manusia."
    }
    // ,
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true 
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true 
// };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+6282249993937",
  email_address: "azizmiftakhul19@gmail.com"
};

// Twitter Section

// const twitterDetails = {
//   userName: "twitter", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };

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
  contactInfo
  // ,
  // twitterDetails
};
