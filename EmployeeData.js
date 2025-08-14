const empData = [
  {
    "id": 1,
    "name": "Isabella Anderson",
    "img": "https://randomuser.me/api/portraits/men/89.jpg",
    "description": "Isabella Anderson is a skilled professional working at CyberCore Pvt. Ltd. in the UI/UX Design department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "UI/UX Design",
    "company": "CyberCore Pvt. Ltd.",
    "details": {
      "age": 32,
      "email": "isabella.anderson@example.com",
      "phone": "(311)186-5829x1368",
      "joining_date": "2021-05-23"
    }
  },
  {
    "id": 2,
    "name": "James Thomas",
    "img": "https://randomuser.me/api/portraits/men/90.jpg",
    "description": "James Thomas is a skilled professional working at CyberCore Pvt. Ltd. in the Data Science department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "Data Science",
    "company": "CyberCore Pvt. Ltd.",
    "details": {
      "age": 44,
      "email": "james.thomas@techmail.com",
      "phone": "(535)493-1084x4733",
      "joining_date": "2019-04-07"
    }
  },
  {
    "id": 3,
    "name": "Mia Taylor",
    "img": "https://randomuser.me/api/portraits/women/17.jpg",
    "description": "Mia Taylor is a skilled professional working at BrightMind IT Solutions in the UI/UX Design department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "UI/UX Design",
    "company": "BrightMind IT Solutions",
    "details": {
      "age": 35,
      "email": "mia.taylor@corporate.com",
      "phone": "(215)128-9474x1042",
      "joining_date": "2025-06-18"
    }
  },
  {
    "id": 4,
    "name": "Amelia Wilson",
    "img": "https://randomuser.me/api/portraits/women/3.jpg",
    "description": "Amelia Wilson is a skilled professional working at Innovatech Systems in the Software Development department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "Software Development",
    "company": "Innovatech Systems",
    "details": {
      "age": 55,
      "email": "amelia.wilson@corporate.com",
      "phone": "(413)807-6123x5078",
      "joining_date": "2020-08-22"
    }
  },
  {
    "id": 5,
    "name": "William Garcia",
    "img": "https://randomuser.me/api/portraits/women/30.jpg",
    "description": "William Garcia is a skilled professional working at CyberCore Pvt. Ltd. in the Software Development department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "Software Development",
    "company": "CyberCore Pvt. Ltd.",
    "details": {
      "age": 28,
      "email": "william.garcia@techmail.com",
      "phone": "(519)530-4903x8684",
      "joining_date": "2018-12-08"
    }
  },
  {
    "id": 6,
    "name": "Charlotte Martin",
    "img": "https://randomuser.me/api/portraits/men/96.jpg",
    "description": "Charlotte Martin is a skilled professional working at TechNova Solutions Pvt. Ltd. in the Software Development department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "Software Development",
    "company": "TechNova Solutions Pvt. Ltd.",
    "details": {
      "age": 40,
      "email": "charlotte.martin@company.com",
      "phone": "(908)414-2509x2649",
      "joining_date": "2019-02-05"
    }
  },
  {
    "id": 7,
    "name": "Mia Taylor",
    "img": "https://randomuser.me/api/portraits/men/17.jpg",
    "description": "Mia Taylor is a skilled professional working at CodeCraft Technologies in the UI/UX Design department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "UI/UX Design",
    "company": "CodeCraft Technologies",
    "details": {
      "age": 45,
      "email": "mia.taylor@techmail.com",
      "phone": "(698)425-2632x2423",
      "joining_date": "2020-11-26"
    }
  },
  {
    "id": 8,
    "name": "Daniel Brown",
    "img": "https://randomuser.me/api/portraits/women/93.jpg",
    "description": "Daniel Brown is a skilled professional working at TechNova Solutions Pvt. Ltd. in the Cybersecurity department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "Cybersecurity",
    "company": "TechNova Solutions Pvt. Ltd.",
    "details": {
      "age": 58,
      "email": "daniel.brown@example.com",
      "phone": "(430)746-8655x8011",
      "joining_date": "2024-02-10"
    }
  },
  {
    "id": 9,
    "name": "Robert Moore",
    "img": "https://randomuser.me/api/portraits/men/50.jpg",
    "description": "Robert Moore is a skilled professional working at Innovatech Systems in the Cybersecurity department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "Cybersecurity",
    "company": "Innovatech Systems",
    "details": {
      "age": 30,
      "email": "robert.moore@corporate.com",
      "phone": "(485)521-9273x4577",
      "joining_date": "2024-08-21"
    }
  },
  {
    "id": 10,
    "name": "Ava Lopez",
    "img": "https://randomuser.me/api/portraits/women/89.jpg",
    "description": "Ava Lopez is a skilled professional working at TechNova Solutions Pvt. Ltd. in the Software Development department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "Software Development",
    "company": "TechNova Solutions Pvt. Ltd.",
    "details": {
      "age": 36,
      "email": "ava.lopez@techmail.com",
      "phone": "(202)464-1593x2238",
      "joining_date": "2022-08-04"
    }
  },
  {
    "id": 11,
    "name": "Emily Gonzalez",
    "img": "https://randomuser.me/api/portraits/women/77.jpg",
    "description": "Emily Gonzalez is a skilled professional working at CodeCraft Technologies in the UI/UX Design department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "UI/UX Design",
    "company": "CodeCraft Technologies",
    "details": {
      "age": 50,
      "email": "emily.gonzalez@techmail.com",
      "phone": "(422)997-6420x3405",
      "joining_date": "2025-06-16"
    }
  },
  {
    "id": 12,
    "name": "Amelia Thomas",
    "img": "https://randomuser.me/api/portraits/men/81.jpg",
    "description": "Amelia Thomas is a skilled professional working at PixelWave Technologies in the Data Science department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "Data Science",
    "company": "PixelWave Technologies",
    "details": {
      "age": 60,
      "email": "amelia.thomas@company.com",
      "phone": "(858)937-4185x6379",
      "joining_date": "2024-11-28"
    }
  },
  {
    "id": 13,
    "name": "Olivia Martin",
    "img": "https://randomuser.me/api/portraits/men/61.jpg",
    "description": "Olivia Martin is a skilled professional working at PixelWave Technologies in the UI/UX Design department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "UI/UX Design",
    "company": "PixelWave Technologies",
    "details": {
      "age": 58,
      "email": "olivia.martin@company.com",
      "phone": "(371)749-7231x4866",
      "joining_date": "2023-09-19"
    }
  },
  {
    "id": 14,
    "name": "Sophia Taylor",
    "img": "https://randomuser.me/api/portraits/men/19.jpg",
    "description": "Sophia Taylor is a skilled professional working at NextGen Softwares in the Software Development department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "Software Development",
    "company": "NextGen Softwares",
    "details": {
      "age": 59,
      "email": "sophia.taylor@company.com",
      "phone": "(606)397-6937x9408",
      "joining_date": "2023-08-04"
    }
  },
  {
    "id": 15,
    "name": "John Davis",
    "img": "https://randomuser.me/api/portraits/men/90.jpg",
    "description": "John Davis is a skilled professional working at BrightMind IT Solutions in the Quality Assurance department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "Quality Assurance",
    "company": "BrightMind IT Solutions",
    "details": {
      "age": 42,
      "email": "john.davis@company.com",
      "phone": "(610)204-3940x3062",
      "joining_date": "2024-11-14"
    }
  },
  {
    "id": 16,
    "name": "Robert Cabrera",
    "img": "https://randomuser.me/api/portraits/men/80.jpg",
    "description": "Robert Cabrera is a skilled professional working at TechNova Solutions Pvt. Ltd. in the UI/UX Design department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "UI/UX Design",
    "company": "TechNova Solutions Pvt. Ltd.",
    "details": {
      "age": 42,
      "email": "robert.cabrera@techmail.com",
      "phone": "(936)879-2021x9143",
      "joining_date": "2022-02-24"
    }
  },
  {
    "id": 17,
    "name": "Alexander Williams",
    "img": "https://randomuser.me/api/portraits/women/38.jpg",
    "description": "Alexander Williams is a skilled professional working at BrightMind IT Solutions in the Data Science department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "Data Science",
    "company": "BrightMind IT Solutions",
    "details": {
      "age": 25,
      "email": "alexander.williams@company.com",
      "phone": "(140)991-9457x5611",
      "joining_date": "2024-07-25"
    }
  },
  {
    "id": 18,
    "name": "Daniel Cabrera",
    "img": "https://randomuser.me/api/portraits/women/22.jpg",
    "description": "Daniel Cabrera is a skilled professional working at PixelWave Technologies in the UI/UX Design department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "UI/UX Design",
    "company": "PixelWave Technologies",
    "details": {
      "age": 46,
      "email": "daniel.cabrera@corporate.com",
      "phone": "(835)257-5965x9065",
      "joining_date": "2019-06-12"
    }
  },
  {
    "id": 19,
    "name": "William Anderson",
    "img": "https://randomuser.me/api/portraits/men/86.jpg",
    "description": "William Anderson is a skilled professional working at NextGen Softwares in the Quality Assurance department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "Quality Assurance",
    "company": "NextGen Softwares",
    "details": {
      "age": 30,
      "email": "william.anderson@company.com",
      "phone": "(456)349-3919x2243",
      "joining_date": "2021-09-10"
    }
  },
  {
    "id": 20,
    "name": "Charlotte Moore",
    "img": "https://randomuser.me/api/portraits/men/67.jpg",
    "description": "Charlotte Moore is a skilled professional working at TechNova Solutions Pvt. Ltd. in the Data Science department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "Data Science",
    "company": "TechNova Solutions Pvt. Ltd.",
    "details": {
      "age": 28,
      "email": "charlotte.moore@company.com",
      "phone": "(870)359-9225x8399",
      "joining_date": "2021-01-19"
    }
  },
  {
    "id": 21,
    "name": "Robert Miller",
    "img": "https://randomuser.me/api/portraits/women/33.jpg",
    "description": "Robert Miller is a skilled professional working at CodeCraft Technologies in the Software Development department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "Software Development",
    "company": "CodeCraft Technologies",
    "details": {
      "age": 43,
      "email": "robert.miller@example.com",
      "phone": "(907)516-4722x2933",
      "joining_date": "2019-04-05"
    }
  },
  {
    "id": 22,
    "name": "Tina Williams",
    "img": "https://randomuser.me/api/portraits/men/33.jpg",
    "description": "Tina Williams is a skilled professional working at NextGen Softwares in the Quality Assurance department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "Quality Assurance",
    "company": "NextGen Softwares",
    "details": {
      "age": 51,
      "email": "tina.williams@corporate.com",
      "phone": "(798)103-5626x9465",
      "joining_date": "2020-08-04"
    }
  },
  {
    "id": 23,
    "name": "David Thomas",
    "img": "https://randomuser.me/api/portraits/women/68.jpg",
    "description": "David Thomas is a skilled professional working at BrightMind IT Solutions in the UI/UX Design department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "UI/UX Design",
    "company": "BrightMind IT Solutions",
    "details": {
      "age": 39,
      "email": "david.thomas@company.com",
      "phone": "(842)140-2227x9606",
      "joining_date": "2024-03-10"
    }
  },
  {
    "id": 24,
    "name": "William Moore",
    "img": "https://randomuser.me/api/portraits/men/72.jpg",
    "description": "William Moore is a skilled professional working at NextGen Softwares in the Data Science department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "Data Science",
    "company": "NextGen Softwares",
    "details": {
      "age": 40,
      "email": "william.moore@example.com",
      "phone": "(528)761-7494x8619",
      "joining_date": "2025-04-10"
    }
  },
  {
    "id": 25,
    "name": "Sophia Taylor",
    "img": "https://randomuser.me/api/portraits/women/14.jpg",
    "description": "Sophia Taylor is a skilled professional working at TechNova Solutions Pvt. Ltd. in the Data Science department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "Data Science",
    "company": "TechNova Solutions Pvt. Ltd.",
    "details": {
      "age": 45,
      "email": "sophia.taylor@techmail.com",
      "phone": "(934)819-7586x8450",
      "joining_date": "2022-02-11"
    }
  },
  {
    "id": 26,
    "name": "Ethan Gonzalez",
    "img": "https://randomuser.me/api/portraits/men/52.jpg",
    "description": "Ethan Gonzalez is a skilled professional working at TechNova Solutions Pvt. Ltd. in the Software Development department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "Software Development",
    "company": "TechNova Solutions Pvt. Ltd.",
    "details": {
      "age": 48,
      "email": "ethan.gonzalez@techmail.com",
      "phone": "(524)761-4285x1732",
      "joining_date": "2023-11-20"
    }
  },
  {
    "id": 27,
    "name": "Ethan Taylor",
    "img": "https://randomuser.me/api/portraits/women/64.jpg",
    "description": "Ethan Taylor is a skilled professional working at Innovatech Systems in the Cybersecurity department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "Cybersecurity",
    "company": "Innovatech Systems",
    "details": {
      "age": 44,
      "email": "ethan.taylor@techmail.com",
      "phone": "(989)977-8484x2362",
      "joining_date": "2020-06-16"
    }
  },
  {
    "id": 28,
    "name": "Sophia Martinez",
    "img": "https://randomuser.me/api/portraits/men/5.jpg",
    "description": "Sophia Martinez is a skilled professional working at BrightMind IT Solutions in the UI/UX Design department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "UI/UX Design",
    "company": "BrightMind IT Solutions",
    "details": {
      "age": 26,
      "email": "sophia.martinez@corporate.com",
      "phone": "(876)211-5309x8063",
      "joining_date": "2021-07-24"
    }
  },
  {
    "id": 29,
    "name": "Robert Williams",
    "img": "https://randomuser.me/api/portraits/men/59.jpg",
    "description": "Robert Williams is a skilled professional working at Innovatech Systems in the Quality Assurance department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "Quality Assurance",
    "company": "Innovatech Systems",
    "details": {
      "age": 59,
      "email": "robert.williams@corporate.com",
      "phone": "(598)333-2523x4025",
      "joining_date": "2024-01-04"
    }
  },
  {
    "id": 30,
    "name": "Daniel Garcia",
    "img": "https://randomuser.me/api/portraits/women/68.jpg",
    "description": "Daniel Garcia is a skilled professional working at Innovatech Systems in the Software Development department. They excel in delivering quality work, collaborating effectively, and staying updated with industry trends to bring innovative solutions.",
    "department": "Software Development",
    "company": "Innovatech Systems",
    "details": {
      "age": 34,
      "email": "daniel.garcia@company.com",
      "phone": "(145)727-9473x2158",
      "joining_date": "2019-11-25"
    }
  }
]

export default empData