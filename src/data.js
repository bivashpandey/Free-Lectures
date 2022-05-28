// course information

const courseInfo = [
  {
    id: 1,
    title: "Self-Driving Cars",
    category: "Robotics",
    university: "University of Tübingen",
    youtube:
      "https://www.youtube.com/watch?v=wAaSJUAKPuY&list=PL05umP7R6ij321zzKXK6XCQXAaaYjQbzr",
    website:
      "https://uni-tuebingen.de/fakultaeten/mathematisch-naturwissenschaftliche-fakultaet/fachbereiche/informatik/lehrstuehle/autonomous-vision/lectures/self-driving-cars/",
    by: "Andreas Geiger",
    channel: "Tübingen Machine Learning",
  },
  {
    id: 2,
    title: "Deep Learning 2020/21",
    category: "Deep Learning",
    university: "University of Tübingen",
    youtube:
      "https://www.youtube.com/watch?v=OCHbm88xUGU&list=PL05umP7R6ij3NTWIdtMbfvX7Z-4WEXRqD",
    website:
      "https://uni-tuebingen.de/fakultaeten/mathematisch-naturwissenschaftliche-fakultaet/fachbereiche/informatik/lehrstuehle/autonomous-vision/lectures/deep-learning/",
    by: "Andreas Geiger",
    channel: "Tübingen Machine Learning",
  },
  {
    id: 3,
    title: "Intro for Mobile Sensing and Robotics I",
    category: "Robotics",
    university: "University of Bonn",
    youtube:
      "https://www.youtube.com/watch?v=ylMpdejm4mo&list=PLgnQpQtFTOGQEn33QDVGJpiZLi-SlL7vA",
    website: "",
    by: "Cyrill Stachniss",
    channel: "Cyrill Stachniss",
  },

  {
    id: 4,
    title: "Intro for Mobile Sensing and Robotics II",
    category: "Robotics",
    university: "University of Bonn",
    youtube:
      "https://www.youtube.com/watch?v=mQvKhmWagB4&list=PLgnQpQtFTOGQh_J16IMwDlji18SWQ2PZ6",
    website: "",
    by: "Cyrill Stachniss",
    channel: "Cyrill Stachniss",
  },

  {
    id: 5,
    title: "Mobile Robot Systems",
    category: "Robotics",
    university: "Cambridge University",
    youtube:
      "https://www.youtube.com/watch?v=6mysfrcOABY&list=PLaTKfS3-bDpDyOwrxLcQRGxY9XJw33ANo",
    website: "",
    by: "Amanda Prorok",
    channel: "Prorok Lab",
  },

  {
    id: 6,
    title: "SLAM",
    category: "Robotics",
    university: "University of Bonn",
    youtube:
      "https://www.youtube.com/watch?v=U6vr3iNrwRA&list=PLgnQpQtFTOGQrZ4O5QzbIHgl3b1JHimN_",
    website: "",
    by: "Cyrill Stachniss",
    channel: "Cyrill Stachniss",
  },

  {
    id: 7,
    title: "Self-Driving Cars",
    category: "Robotics",
    university: "University of Bonn",
    youtube:
      "https://www.youtube.com/watch?v=EBFlmHqgezM&list=PLgnQpQtFTOGQo2Z_ogbonywTg8jxCI9pD",
    website: "",
    by: "Cyrill Stachniss",
    channel: "Cyrill Stachniss",
  },

  {
    id: 8,
    title: "Image Processing & Computer Vision",
    category: "Computer Vision",
    university: "The Ohio State University",
    youtube:
      "https://www.youtube.com/watch?v=i8RjituGfrQ&list=PLcXJymqaE9PMexHWGgXJVINpr6ajy5vuz",
    website: "",
    by: "Aleix M. Martinez",
    channel: "CBCSL teaching",
  },

  {
    id: 9,
    title: "Computer Vision",
    category: "Computer Vision",
    university: "University of Tübingen",
    youtube:
      "https://www.youtube.com/watch?v=B-0bbSH4xrY&list=PL05umP7R6ij35L2MHGzis8AEHz7mg381_",
    website:
      "https://uni-tuebingen.de/fakultaeten/mathematisch-naturwissenschaftliche-fakultaet/fachbereiche/informatik/lehrstuehle/autonomous-vision/lectures/computer-vision/",
    by: "Andreas Geiger",
    channel: "Tübingen Machine Learning",
  },

  {
    id: 10,
    title: "Advanced Deep Learning for Computer Vision",
    category: "Deep Learning",
    university: "Technical University of Munich",
    youtube:
      "https://www.youtube.com/watch?v=utfM_XK7n_M&list=PLog3nOPCjKBnjhuHMIXu4ISE4Z4f2jm39",
    website: "",
    by: "Laura Leal-Taixé",
    channel: "Dynamic Vision and Learning Group",
  },

  {
    id: 11,
    title: "Geometric Deep Learning",
    category: "Deep Learning",
    university: "Imperial College London",
    youtube:
      "https://www.youtube.com/watch?v=PtA0lg_e5nA&list=PLn2-dEmQeTfQ8YVuHBOvAhUlnIPYxkeu3",
    website: "",
    by: "Michael Bronstein",
    channel: "Michael Bronstein",
  },

  {
    id: 12,
    title: "Convolution Neural Networks",
    category: "Deep Learning",
    university: "Stanford University",
    youtube:
      "https://www.youtube.com/watch?v=vT1JzLTH4G4&list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv",
    website: "",
    by: "Fei-Fei Li, Justin Johnson, Serena Yeung",
    channel: "Stanford University School of Engineering",
  },

  {
    id: 13,
    title: "Deep Learning for Computer Vision",
    category: "Deep Learning",
    university: "University of Michigan",
    youtube:
      "https://www.youtube.com/watch?v=dJYGatp4SvA&list=PL5-TkQAfAZFbzxjBHtzdVCWE0Zbhomg7r",
    website: "",
    by: "Justin Johnson",
    channel: "Michigan Online",
  },

  {
    id: 14,
    title: "3D Computer Vision",
    category: "Computer Vision",
    university: "National University of Singapore",
    youtube:
      "https://www.youtube.com/watch?v=LAHQ_qIzNGU&list=PLxg0CGqViygP47ERvqHw_v7FVnUovJeaz",
    website: "",
    by: "Lee Gim Hee",
    channel: "CVRP Lab at NUS",
  },

  {
    id: 15,
    title: "Introduction to Probability",
    category: "Math",
    university: "Massachusetts Institute of Technology",
    youtube:
      "https://www.youtube.com/watch?v=1uW3qMFA9Ho&list=PLUl4u3cNGP60hI9ATjSFgLZpbNJ7myAg6",
    website:
      "https://ocw.mit.edu/courses/res-6-012-introduction-to-probability-spring-2018/",
    by: "John Tsitsiklis, Patrick Jaillet",
    channel: "MIT OpenCourseWare",
  },

  {
    id: 16,
    title: "Probability and Statistics",
    category: "Math",
    university: "",
    youtube:
      "https://www.youtube.com/watch?v=uhxtUt_-GyM&list=PL1328115D3D8A2566",
    website: "https://www.khanacademy.org/math/statistics-probability",
    by: "Sal Khan",
    channel: "Khan Academy",
  },

  {
    id: 17,
    title: "Linear Algebra",
    category: "Math",
    university: "University of Victoria",
    youtube:
      "https://www.youtube.com/watch?v=ZKUqtErZCiU&list=PLHXZ9OQGMqxfUl0tcqPNTJsb7R6BqSLo6",
    website: "",
    by: "Trefor Bazett",
    channel: "Dr. Trefor Bazett",
  },

  {
    id: 18,
    title: "Statistics",
    category: "Math",
    university: "",
    youtube:
      "https://www.youtube.com/watch?v=zouPoc49xbk&list=PL8dPuuaLjXtNM_Y-bUAhblSAdWRnmBUcr",
    website: "",
    by: "Adriene Hill",
    channel: "CrashCourse",
  },

  {
    id: 19,
    title: "Vector Calculus for Engineers",
    category: "Math",
    university: "The Hong Kong University of Science and Technology",
    youtube:
      "https://www.youtube.com/watch?v=qUseabHb6Vk&list=PLkZjai-2JcxnYmkg6fpzz4WFumGVl7MOa",
    website:
      "https://www.math.ust.hk/~machas/vector-calculus-for-engineers.pdf",
    by: "Jeffrey Chasnov",
    channel: "Jeffrey Chasnov",
  },

  {
    id: 20,
    title: "Advanced Linear Algebra",
    category: "Math",
    university: "Clemson University",
    youtube:
      "https://www.youtube.com/watch?v=dn_VXccQrJo&list=PLwV-9DG53NDwKJIwF5sANj6Za7qZYywAq",
    website: "https://www.math.clemson.edu/~macaule/classes/s21_math8530/",
    by: "Matthew Macauley",
    channel: "Professor Macauley",
  },

  {
    id: 21,
    title: "Introduction to Computer Vision",
    category: "Computer Vision",
    university: "University of Central Florida",
    youtube:
      "https://www.youtube.com/watch?v=715uLCHt4jE&list=PLd3hlSJsX_ImKP68wfKZJVIPTd8Ie5u-9",
    website: "https://www.crcv.ucf.edu/courses/cap5415-fall-2012/",
    by: "Mubarak Shah",
    channel: "UCF CRCV",
  },

  {
    id: 22,
    title: "Photogrammetry I & II",
    category: "Computer Vision",
    university: "University of Bonn",
    youtube:
      "https://www.youtube.com/watch?v=SyB7Wg1e62A&list=PLgnQpQtFTOGRYjqjdZxTEQPZuFHQa7O7Y",
    website: "https://www.ipb.uni-bonn.de/photo12-2021/",
    by: "Cyrill Stachniss",
    channel: "Cyrill Stachniss",
  },

  {
    id: 23,
    title: "Introduction to Deep Learning",
    category: "Deep Learning",
    university: "Massachusetts Institute of Technology",
    youtube:
      "https://www.youtube.com/watch?v=7sB052Pz0sQ&list=PLtBw6njQRU-rwp5__7C0oIVt26ZgjG9NI",
    website: "http://introtodeeplearning.com/",
    by: "Alexander Amini, Ava Soleimany et al.",
    channel: "Alexander Amini",
  },

  {
    id: 24,
    title: "The Ancient Secrets of Computer Vision",
    category: "Computer Vision",
    university: "University of Washington",
    youtube:
      "https://www.youtube.com/watch?v=8jXIAWg_yHU&list=PLjMXczUzEYcHvw5YYSU92WrY8IwhTuq7p",
    website: "https://pjreddie.com/courses/computer-vision/",
    by: "Joseph Redmon, Ali Farhadi",
    channel: "Joseph Redmon",
  },
];

export default courseInfo;
