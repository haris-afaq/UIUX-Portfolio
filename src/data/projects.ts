import shoporiaImage from '../assets/shoporia.jpg';
import agriSensemage from '../assets/agriSense.png';
import inaraImage from '../assets/inaraweb.jpg';
import musicAppImage from '../assets/musicApp.jpg';
import medixoVideo from '../assets/medixo_thumbnail.mp4';
import learnifyVideo from '../assets/learnify_video.mp4';
import ecomerceWebsiteImage from '../assets/ecommerce_website_mockup.png';
import noorEislamImage from '../assets/nooreislam.jpg';
import loyalinkVideo from '../assets/loyalink.mp4';
import fypVideo from '../assets/fyp_app.mp4';
import myPortfolioApp from '../assets/myPortfolioApp.mp4';
import attireCentralVideo from '../assets/attire_central.mp4';
import noorEislamVideo from '../assets/noor-e-islam.mp4';
import ecomVideo from '../assets/ecom.mp4';
import jugari_chutu from '../assets/jugari_chutu.png';
import ecomMobileAppVideo from '../assets/ecom_m_app.mp4';


export interface Project {
  id: number
  title: string
  category: string
  desc: string
  tags: string[]
  image: string
  accent: string
  year: string
  platform: string
  overview: string
  challenge: string
  solution: string
  results: string[]
  role: string
  video?: string
}

export const getProjectCategories = (category: string) =>
  category
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)

export const hasCategory = (project: Project, category: string) =>
  getProjectCategories(project.category).includes(category)

export const projects: Project[] = [
  {
    id: 1,
    title: 'Learnify Mobiile App',
    category: 'UI/UX Design',
    desc: 'A scalable mobile learning application designed to deliver an intuitive and engaging educational experience. Built with clean architecture, responsive UI, and reusable components to ensure high performance and long-term maintainability.',
    tags: ['Figma', 'Firebase', 'Youtube Data API', 'Bloc State Management', 'Figma'],
    image: learnifyVideo,
    video: learnifyVideo,
    accent: '#FC5C7D',
    // #7C5CFC', old color
    year: '2026',
    platform: 'iOS & Android',
    overview:
      'The Learning App is a modern educational mobile application designed in Figma to deliver a smooth and engaging learning experience. Developed with clean architecture, reusable components, and a responsive UI, it ensures consistent performance and scalability across Android and iOS. The app includes features such as course browsing, interactive lessons, progress tracking, and user authentication, showcasing my ability to build production-ready mobile experiences using scalable architecture, API integration, and clean coding practices.',
    challenge:
      'Many learning apps struggle with scalability, maintainability, and proving a seamless user experience, leading to slow performance and inconsistent interfaces.',
    solution:
      'Learnify was built using modern development practices with clean code structure and responsive UI to ensure a robust, maintainable and scalable learning platform.',
    results: [
      'The app delivers an efficient and engaging learning experience, with smooth performance, consistent design, and a codebase that is easy to extend and maintain overtime.',
      'Figma Url: https://www.figma.com/design/0vM2HSbrIy7KGh10lRoOC0/Learnify-Mobile-App?node-id=0-1&p=f&t=5ZZHyEw3bY8kxptJ-0',
      "GitHub: ",
    ],
    role: 'UI/UX Designer',
  },
  {
    id: 2,
    title: 'Shoporia Mobile App',
    category: 'UI/UX Design',
    desc: 'A mobile eCommerce application that connects sellers and buyers through a seamless shopping experience. Built with a responsive UI, scalable architecture, and intuitive product browsing, search, and order management.',
    tags: ['Figma', 'Design System', 'User Research', 'Prototyping', 'Wireframming'],
    image: shoporiaImage,
    // accent: '#00D4A0',
    accent: '#334155',
    year: '2025',
    platform: 'Mobile App',
    overview:
      'Shoporia is a modern mobile eCommerce application designed to simplify online buying and selling. It provides sellers with an efficient platform to manage products and orders while enabling customers to browse, search, and purchase products through a clean and intuitive interface. Built with responsive UI, scalable architecture, and API integration, the app delivers a smooth shopping experience while ensuring maintainability and high performance across Android and iOS devices.',
    challenge:
      'Small businesses and sellers often lack a streamlined platform to showcase products and reach customers, while users face difficulty discovering and ordering items easily.',
    solution:
      'Shoporia is a mobile ecommerce app that allows sellers to list products and manage orders, while providing users with an intuitive interface to browse, search, and track products seamlessly.',
    results: [
      'The app connects sellers and buyers efficiently, enhances product discoverability, simplifies ordering, and delivers a smooth, user-friendly shopping experience.',
      'Figma Url: https://www.figma.com/design/HbsPuNi2MrAzLos1Ol4hEQ/Shoporia?node-id=0-1&p=f&t=1NQ6bToNEVp3jHg6-0'
    ],
    role: 'UX/UI Designer',
  },
   {
    id: 3,
    title: 'Music App',
    category: 'UI/UX Design',
    desc: 'A modern music streaming application designed to deliver a seamless and enjoyable listening experience through an intuitive interface. Built with clean navigation, efficient music discovery, and organized playlist management.',
    tags: ['Figma', 'Prototyping', 'UX Research', 'Design System'],
    image: musicAppImage,
    accent: '#5CF6B0',
    year: '2025',
    platform: 'Mobile',
    overview:
      "Music App is a modern music streaming application designed to simplify the way users discover, play, and organize their favorite songs. Featuring a clean, intuitive interface with seamless navigation, the app enables effortless music browsing, search, playback, and playlist management. The project showcases my ability to create engaging, user-centered mobile experiences by combining thoughtful UI/UX design with responsive layouts and scalable application architecture.",
    challenge:
      "Users often struggle with cluttered music apps that make discovering, playing, and organizing songs inefficient and frustrating.",
    solution:
       "Designed a music app with a clean, intuitive interface that allows users to browse, search, and play songs easily, while offering organized playlists and smooth navigation.",
    results: [
      "The app provides an engaging and seamless listening experience, helping users discover music effortlessly and manage their playlists with ease."
    ],
    role: 'UX Designer',
  },
  {
    id: 4,
    title: 'Inara Technologies Website Redesign',
    category: 'UI/UX Design, Website Design',
    desc: "A modern enterprise portfolio website designed to showcase Inara Technologies' services, expertise, and digital capabilities through a clean, conversion-focused user experience. Built with structured content hierarchy, intuitive navigation, and a professional UI system.",
    tags: ['Figma', 'Strapi', 'Design System', 'Prototyping', 'Woreframming'],
    image: inaraImage,
    accent: '#FFFFFF',
    year: '2026',
    platform: 'Website',
    overview:
      "Inara Technologies Portfolio Website is a modern, enterprise-focused web design created to establish a strong digital presence and effectively communicate the company's services and technical expertise. The design emphasizes UX clarity, structured content hierarchy, and conversion-driven messaging, featuring dedicated service pages, process visualization, and strategic CTAs. With a clean, scalable UI inspired by global technology brands, the project demonstrates my ability to design professional, user-centered websites that balance aesthetics, usability, and business goals.",
    challenge:
      "Inara Technologies lacked a modern, structured digital presence that clearly communicated its enterprise capabilities, services, and technical expertise. Existing content was scattered, overly technical, and failed to showcase their value proposition, process, and outcomes effectively to decision-makers.",
    solution:
    "Designed a clean, scalable, and enterprise-grade portfolio website with a strong focus on UX clarity, content hierarchy, and conversion. The design introduced structured service pages, clear process visualization (Assess → Design → Operate → Optimize), outcome-driven messaging, and a modern UI system aligned with global tech brands.",
    results: [
     "The final design delivers a high-trust, professional digital presence that clearly communicates Inara's capabilities, improves user navigation, and increases conversion potential through strong CTAs and structured content flow.",
     "Website: https://inara.pk/",
     "Figma Url: https://www.figma.com/design/muP4NxQLzwQdLbIo745Drz/Inara-Website?node-id=57-347&p=f&t=JTN5yZhVjASzoLUN-0"
    ],
    role: 'Senior UIUX Designer, Strapi Developer',
  },
   {
    id: 5,
    title: 'AgriSense Mobile App',
    category: 'UI/UX Design',
    desc: 'An AI-powered agriculture application that helps farmers identify plant diseases and access accurate treatment recommendations. The app also provides soil and water testing guidance, promoting healthier crops and sustainable farming practices.',
    tags: ['Figma','Firebase', 'TensorFlow Lite','Figma', 'Design System', 'User Research', 'Prototyping', 'Wireframming'],
    image: agriSensemage,
    // accent: '#FFB347',
    accent: '#A78BFA',
    year: '2025',
    platform: 'iOS & Android',
    overview:
      "AgriSense is a smart agriculture mobile application designed to help farmers and gardeners detect plant diseases using AI-powered image recognition. It provides detailed disease information, treatment recommendations, preventive measures, and step-by-step guidance for soil and water testing, along with nearby government lab suggestions. Built with a focus on usability, responsive design, and scalable architecture, the app demonstrates my ability to develop technology-driven solutions that improve agricultural productivity and support informed farming decisions.",
    challenge:
      "Farmers and gardeners often struggle to identify plant diseases accurately, access proper treatment methods, and find reliable resources for soil and water testing. This lack of guidance can lead to crop loss and inefficient farming practices.",
    solution:
      "Developed AgriSense, a mobile app that detects plant diseases using image recognition, provides detailed information on symptoms, treatments, and preventive measures. The app also guides users through step-by-step soil and water testing procedures and suggests nearby government labs for professional testing.",
    results: [
      "AgriSense empowers users to maintain healthier crops by enabling accurate disease detection, informed treatment decisions, and reliable soil and water testing guidance, improving overall agricultural productivity and sustainability."
    ],
    role: 'UI Designer',
  },

  {
    id: 7,
    title: 'Medixo Mobile App',
    category: 'UI/UX Design',
    desc: "A modern pharmacy application designed in Figma and designed in Figma, featuring categorized medicine browsing, intuitive navigation, and seamless Strapi API integration. Built to deliver a responsive, scalable, and user-friendly healthcare experience.",
    tags: ['Figma','Strapi','Figma', 'Design System','Prototyping'],
    image: medixoVideo,
    video: medixoVideo,
    accent: '#ffffff',
    year: '2026',
    platform: 'Mobile',
    overview:
     "Medixo is a modern pharmacy mobile application designed in Figma and designed in Figma with Strapi as the backend CMS. The app enables users to browse medicines by category, view detailed product information, and access dynamic content through REST APIs. Built with a focus on intuitive UI/UX, responsive design, clean architecture, and reusable components, the project showcases my end-to-end ability to design and develop scalable, high-performance mobile applications.",
    challenge:
     "Users often struggle with pharmacy applications that have cluttered interfaces, making it difficult to browse medicines, find products, and navigate efficiently while maintaining a smooth and reliable experience.",
    solution:
     "Designed and developed Medixo, a modern pharmacy mobile application using Figma for UI/UX design, Figma for the frontend, and Strapi as the backend CMS. The app enables users to browse medicines by category, view detailed product information, and interact with dynamic content through a clean, responsive interface and seamless API integration.",
    results: [
      "The application delivers an intuitive and efficient pharmacy experience with organized medicine categories, responsive performance, and a scalable architecture that supports future enhancements while improving usability and maintainability."
    ],
    role: 'Full Stack Developer & UX Designer',
  },

    {
    id: 9,
    title: 'Modern Minimalistic E-commerce Website Design',
    category: 'UI/UX Design, Website Design',
    desc: "A modern minimalistic eCommerce website designed to deliver a clean, intuitive, and engaging shopping experience. Created with a focus on usability, responsive layouts, and visually compelling product presentation.",
    tags: ['Figma', 'Design System', 'Prototyping', 'Woreframming'],
    image: ecomerceWebsiteImage,
    video: ecomVideo,
    accent: '#7C5CFC',
    year: '2025',
    platform: 'Website',
    overview:
      "Modern Minimalistic E-commerce Website is a contemporary web design project focused on delivering a seamless and visually refined online shopping experience. Designed with a clean layout, intuitive navigation, and strong visual hierarchy, it enables users to browse products effortlessly while maintaining a premium aesthetic. The project showcases my ability to create responsive, user-centered interfaces that balance modern design principles with usability and conversion-focused experiences.",
    challenge:
      "Many eCommerce websites suffer from cluttered layouts, inconsistent visual hierarchy, and complex navigation, making it difficult for users to discover products and complete purchases efficiently.",
    solution:
    "Designed a modern, minimalistic eCommerce website focused on simplicity, intuitive navigation, and a clean visual hierarchy. The interface emphasizes product presentation, seamless browsing, responsive layouts, and a streamlined shopping experience.",
    results: [
     "The design enhances product discoverability, improves user engagement, and creates a smooth shopping journey that encourages faster purchasing decisions while maintaining a premium brand aesthetic.",
     "Figma Url: https://www.figma.com/design/DgxWBrSsUQ465h9D3lRCAC/Eccomerce-Website?node-id=54695-26209&p=f&t=68a1LjfyGbLk9KLZ-0"
    ],
    role: 'UIUX Designer',
  },

  {
    id: 11,
    title: 'Noor-E-Islam Mobile App',
    category: 'UI/UX Design',
    desc: "An all-in-one Islamic mobile application featuring prayer timings, the Holy Quran with audio and translations, duas, hadith, Asma ul Husna, Qibla finder, Tasbeeh counter, and an AI-powered chatbot. Built to provide a seamless and enriching spiritual experience.",
    tags: ['Figma', 'Bloc', 'Quran API',],
    image: noorEislamImage,
    video: noorEislamVideo,
    accent: '#FFB347',
    year: '2026',
    platform: 'Android, iOS',
    overview:
      "Noor-E-Islam is a comprehensive Islamic mobile application designed to support users in their daily spiritual journey through a single, intuitive platform. The app includes accurate prayer timings, the Holy Quran with translations and audio recitation, a collection of duas, authentic hadith, Asma ul Husna, a Qibla finder, a digital Tasbeeh counter, and an AI-powered chatbot for Islamic guidance. Developed with a focus on responsive UI, clean architecture, and an engaging user experience, the project showcases my ability to build feature-rich, scalable mobile applications that combine modern technology with meaningful functionality.",
    challenge:
      "Many Islamic applications provide essential religious resources but often lack a unified, user-friendly experience. Users are required to switch between multiple apps for prayer times, Quran recitation, duas, hadith, Qibla direction, and other daily spiritual needs.",
    solution:
    "Designed and developed Noor-E-Islam, an all-in-one Islamic mobile application that brings together accurate prayer timings, the Holy Quran with translations and audio recitation, duas, authentic hadith, Asma ul Husna, a Qibla finder, Tasbeeh counter, and an AI-powered chatbot. The app offers a clean, intuitive interface to help users access essential Islamic resources from a single platform.",
    results: [
     "The application provides a seamless and engaging digital Islamic experience, enabling users to strengthen their daily worship through easy access to authentic religious content, interactive features, and a modern, user-friendly interface.",
     "GitHub: "
    ],
    role: 'UI/UX Designer',
  },
  {
    id: 12,
    title: 'Loyalink Mobile App',
    category: 'UI/UX Design',
    desc: "A cross-platform loyalty platform designed to personalize the customer experience through secure accounts, card linking, and upcoming offers and location-based features.",
    tags: ['Figma', 'Bloc', 'Clean Code', 'APIs Integration','Push Notifications',],
    image: loyalinkVideo,
    video: loyalinkVideo,
    accent: '#7C5CFC',
    year: '2026',
    platform: 'Android, iOS',
    overview:
      "Loyalink is a cross-platform loyalty platform focused on delivering a secure and personalized customer experience. The foundation includes phone and email registration, secure login, guest browsing, card linking without storing full card numbers, and mobile and web platform structures. The project is designed to support upcoming offers, location-based features, and future launch requirements.",
    challenge:
      "Customers need a simple and personalized way to access loyalty experiences, while businesses require a platform that can securely connect user accounts and payment cards without storing full card numbers. The project also needed a unified foundation across mobile and web platforms to support upcoming offers and location-based features.",
    solution:
    "Developed the Loyalink mobile application for iOS and Android, providing users with secure account registration and login using phone or email, guest browsing, and secure bank card linking. The app establishes the core mobile experience for personalized loyalty services while preparing the platform for upcoming offers and location-based features.",
    results: [
     "The application provides a seamless and engaging digital Islamic experience, enabling users to strengthen their daily worship through easy access to authentic religious content, interactive features, and a modern, user-friendly interface.",
     "Url: Due to company policy I can't directly provide project url but once it is published on PlayStore and AppStore I will add the urls here.",
     "Website: https://loyalink.inara.tech/"
    ],
    role: 'UI/UX Designer',
  },

  {
    id: 13,
    title: 'Food Delivery App',
    category: 'UI/UX Design',
    desc: 'A complete food delivery ecosystem featuring dedicated Users, Sellers, and Riders apps designed in Figma and Firebase. The platform streamlines food ordering, seller management, and real-time delivery operations through interconnected workflows.',
    tags: ['Figma', 'Firebase', 'Food Delivery App', 'FYP', 'University of Peshawar'],
    image: fypVideo,
    video: fypVideo,
    accent: '#5CF6B0',
    year: '2023-2024',
    platform: 'Mobile',
    overview:
      "Food Delivery App is a complete FYP project consisting of three interconnected mobile applications designed for Users, Sellers, and Riders. The platform enables customers to browse restaurants and order food, sellers to manage food listings and orders, and riders to receive and complete deliveries in real time. Designed in Figma and Firebase, the project demonstrates the development of a complete multi-user ecosystem with real-time communication, streamlined workflows, and a consistent mobile experience.",
    challenge:
      "Traditional food delivery processes can be fragmented, making it difficult for customers to discover and order food, sellers to manage their products and orders, and delivery riders to efficiently handle and complete deliveries.",
    solution:
       "Developed a complete Food Delivery App ecosystem consisting of three interconnected mobile experiences: Users, Sellers, and Riders. The Users App enables restaurant browsing, ordering, and live order tracking; the Sellers App allows restaurants and home-based sellers to manage food listings and orders; while the Riders App enables delivery partners to receive, manage, and complete orders in real time. Firebase is used to support the application's backend services and real-time functionality.",
    results: [
      "The system connects customers, sellers, and delivery partners within a unified platform, streamlining the complete food ordering and delivery process while providing a smooth and efficient experience for all three user types.",
      "Sellers-App: Sellers-App",
      "Riders-App: Rider-App",
      "Users-App: Users-App",
    ],
    role: 'UI/UX Designer',
  },

  {
    id: 14,
    title: 'Portfolio Web Design',
    category: 'UI/UX Design',
    desc: "A fully responsive web application designed in Figma, designed to provide a seamless experience across desktop, tablet, and mobile devices. Developed with adaptive layouts, reusable components, and a clean, modern interface.",
    tags: ['Figma','Bloc','Clean Code', 'Portfolio','Web App'],
    image: myPortfolioApp,
    video: myPortfolioApp,
    accent: '#ffffff',
    year: '2026',
    platform: 'Desktop, Mobile',
    overview:
     "This responsive web experience is a fully responsive project designed to deliver a consistent and engaging experience across desktop, tablet, and mobile devices. Built with adaptive layouts, reusable components, and responsive UI principles, the project demonstrates my ability to create modern web experiences while maintaining usability and visual consistency across different screen sizes.",
    challenge:
     "Many web applications struggle to maintain a consistent and user-friendly experience across different screen sizes, resulting in poor layouts, navigation issues, and inconsistent interfaces on desktop, tablet, and mobile devices.",
    solution:
     "Designed and developed a fully responsive web application using Figma, with adaptive layouts and components that seamlessly adjust across desktop, tablet, and mobile screen sizes. The project focuses on clean UI, smooth navigation, reusable components, and a consistent experience across devices.",
    results: [
      "The application delivers a responsive and visually consistent experience across different screen sizes, demonstrating how the design can be used to build modern web applications with a single scalable codebase.",
      "",
      "Live Url: https://harixafaq.vercel.app/"
    ],
    role: 'UI/UX Designer',
  },
  {
    id: 15,
    title: 'Attire Central',
    category: 'Website Design',
    desc: "A modern online attire store bringing TRIPPLEIGHT, ATHLENA, and BUNNY & BEAR together in one seamless shopping experience. Designed to provide intuitive browsing and dedicated collections for men, women, and kids.",
    tags: ['Figma', 'Design System', 'Prototyping','Responsive Design',],
    image: attireCentralVideo,
    video: attireCentralVideo,
    accent: '#FFB347',
    year: '2025',
    platform: 'Web App',
    overview:
      "Attire Central is an online fashion store that brings three distinct clothing brands together under one platform: TRIPPLEIGHT for men, ATHLENA for women, and BUNNY & BEAR for kids. The platform is designed with intuitive navigation, organized product collections, and a clean shopping experience, making it easy for customers to explore and shop across all three brands.",
    challenge:
      "Online fashion shoppers often face difficulty navigating multiple clothing collections when stores lack clear categorization and a consistent shopping experience across different audiences.",
    solution:
    "Designed and developed Attire Central, an online attire store bringing three fashion brands together in one platform: TRIPPLEIGHT for men, ATHLENA for women, and BUNNY & BEAR for kids. The platform provides organized product browsing, intuitive navigation, and dedicated brand experiences for each collection.",
    results: [
     "The platform creates a unified and seamless shopping experience while allowing each brand to maintain its own identity and product selection, making it easier for customers to discover and shop for clothing across different categories.",
     "Website Url: https://attirecentral.net/",
     "Figma Url: https://www.figma.com/design/OZYZT3Btqn5HOM8N8p8iQt/Attire-Central-UI?node-id=0-1&t=8d8Vry1M6ENtc0At-1"
    ],
    role: 'UI/UX Designer',
  },
  {
    id: 16,
    title: 'Jugarhi Chutu',
    category: 'Website Design',
    desc: "A local delivery web application built for Multan, connecting customers with nearby businesses through a simple and convenient online ordering experience. Designed to streamline product discovery, ordering, and local delivery.",
    tags: ['Figma', 'Design System', 'Prototyping','Responsive Design',],
    image: jugari_chutu,
    accent: '#FFFFFF',
    year: '2025',
    platform: 'Web App',
    overview:
      "Jugarhi Chutu is a local delivery web application designed to make online ordering more convenient for customers in Multan. The platform provides an intuitive experience for browsing products, placing orders, and accessing local delivery services, while helping businesses reach customers through a centralized digital platform.",
    challenge:
      "Local customers often face limited access to convenient online ordering and delivery services, while local businesses need an efficient platform to showcase their products and manage customer orders.",
    solution:
    "Designed and developed Jugarhi Chutu, a local delivery web application for Multan that enables customers to conveniently browse available products, place orders, and get them delivered to their location. The platform focuses on a simple, accessible, and user-friendly ordering experience.",
    results: [
     "The platform simplifies local ordering and delivery by connecting customers with nearby businesses, making product discovery and ordering more convenient while supporting efficient delivery operations within Multan.",
     "Website Url: https://jugarichotu.pk/",
    ],
    role: 'UI/UX Designer',
  },
  {
    id: 17,
    title: 'EaseMart Mobile App',
    category: 'UI/UX Design',
    desc: "A local delivery web application built for Multan, connecting customers with nearby businesses through a simple and convenient online ordering experience. Designed to streamline product discovery, ordering, and local delivery.",
    tags: ['Figma', 'Firebase', 'Cloudinary','GetX',],
    image: ecomMobileAppVideo,
    video: ecomMobileAppVideo,
    accent: '#000000',
    year: '2026',
    platform: 'Android, iOS',
    overview:
    "EaseMart is a mobile shopping platform designed to support both sellers and buyers within a single application. Sellers can upload and edit products, manage orders, and update their profiles, while buyers can add products to their cart, purchase items, manage wishlists, cancel orders, and edit their profiles. Built using Figma, Firebase, Cloudinary, and GetX, the app combines clean coding practices with a flexible dark and light theme to deliver a smooth and user-friendly shopping experience.",
    challenge:
      "Managing buying and selling through separate platforms can make product management, purchasing, and order tracking complicated for users. A unified solution is needed to provide tailored workflows for both sellers and buyers.",
    solution:
    "Developed a mobile eCommerce application with separate Seller and Buyer experiences. Sellers can upload and edit products, manage orders, and update their profiles, while buyers can browse products, add items to their cart, purchase products, manage wishlists, cancel orders, and edit their profiles. The app also supports dark and light themes for a personalized experience.",
    results: [
     "The application provides a complete and flexible shopping ecosystem where sellers can efficiently manage their products and orders while buyers can enjoy a smooth and personalized purchasing experience.",
     "Github: Ecommerce-App.git",
    ],
    role: 'UI/UX Designer',
  },
]

const baseCategories = ['All', 'UI/UX Design', 'UI/UX Design',]

export const categories = [
  ...baseCategories,
  ...new Set(projects.flatMap((project) => getProjectCategories(project.category))),
].filter((category, index, arr) => arr.indexOf(category) === index)
