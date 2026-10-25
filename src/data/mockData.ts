import { Project, Investor, ContactMessage } from '../types';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'CardioMesh — Smart Wearable Heart Monitor with AI',
    tagline: 'A comfortable chest band that detects irregular heartbeats early and alerts doctors and families.',
    category: 'healthcare',
    description: 'CardioMesh is a low-cost, medical-grade heart monitor designed for people living far from big hospitals. It runs a smart AI program right on a tiny battery-powered chip to spot heart problems in less than a second. It can send emergency alerts to local clinic nurses and family members through basic mobile signals, even when there is no high-speed internet.',
    benefits: [
      'Costs 75% less to build than traditional hospital heart test machines',
      'Works completely offline on a small battery for up to 14 days',
      'Sends quick mobile alerts to village doctors and family members',
      'Uses soft, skin-friendly material that is comfortable to wear all day'
    ],
    languages: ['C++', 'Python', 'TypeScript'],
    technologies: ['TinyML on Microcontrollers', 'FastAPI', 'React', 'Tailwind CSS', 'Bluetooth'],
    hardware: ['ARM Microcontroller Chip', 'Heart Signal Sensor', 'Custom Small Circuit Board', 'Soft Silicone Band'],
    estimatedCost: 35000,
    targetFunding: 400000,
    ipType: 'Provisional Patent',
    ipStatus: 'Filed',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    founderName: 'Aria Chen',
    founderRole: 'Final Year Biomedical Student',
    founderInstitution: 'Collegiate BioDesign Lab',
    founderAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    imageUrl: '/src/assets/images/project_health_iot_1792933235161.jpg',
    stage: 'Working Prototype',
    rating: 4.9,
    reviews: [
      {
        id: 'rev-1',
        projectId: 'proj-1',
        authorName: 'Dr. Vikram Patel',
        authorRole: 'Investor',
        rating: 5,
        comment: 'Great work keeping the parts cost low. The live heartbeat test on the prototype is very impressive for a student project.',
        date: '2026-10-14'
      },
      {
        id: 'rev-2',
        projectId: 'proj-1',
        authorName: 'Rohan Sharma',
        authorRole: 'Mentor',
        rating: 4.8,
        comment: 'Very reliable hardware design. Ready for trial testing in community health centers.',
        date: '2026-10-18'
      }
    ],
    createdAt: '2026-09-12'
  },
  {
    id: 'proj-2',
    title: 'CeresEdge — Solar Smart Soil and Farm Water Sensor',
    tagline: 'Solar-powered sensors placed in crop fields that tell farmers exactly when and how much to water.',
    category: 'agriculture',
    description: 'CeresEdge helps farmers save precious water and grow healthier crops. These small sensor sticks are placed in farm fields to measure soil moisture deep down by the crop roots. Powered by small solar cells, they send signals over long distances across the farm without needing expensive mobile SIM data or monthly charges.',
    benefits: [
      'Helps farmers save over 40% of irrigation water by watering only when needed',
      'Runs continuously on small solar power with no battery changes needed',
      'Waterproof and strong against heavy rain, mud, and farm tractors',
      'Connects easily to a simple mobile app in regional Indian languages'
    ],
    languages: ['C', 'Python', 'Go'],
    technologies: ['Long-Range Radio (LoRa)', 'Grafana Dashboard', 'React Mobile UI', 'MQTT Messaging'],
    hardware: ['ESP32 Dual-Core Chip', 'Capacitive Soil Rods', '1W Solar Panel', 'Rechargeable Battery Cell', 'Waterproof Shell'],
    estimatedCost: 22000,
    targetFunding: 300000,
    ipType: 'Utility Patent',
    ipStatus: 'Drafting',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    founderName: 'Mateo Morales',
    founderRole: 'Agriculture Tech Student',
    founderInstitution: 'Center for Farm Innovation',
    founderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    imageUrl: '/src/assets/images/project_agritech_sensor_1792933236081.jpg',
    stage: 'Field Tested',
    rating: 4.8,
    reviews: [
      {
        id: 'rev-3',
        projectId: 'proj-2',
        authorName: 'Sarah Jenkins',
        authorRole: 'Investor',
        rating: 5,
        comment: 'Long-range wireless without cellular costs is exactly what fruit and vegetable farmers need. A very practical startup idea.',
        date: '2026-10-19'
      }
    ],
    createdAt: '2026-09-20'
  },
  {
    id: 'proj-3',
    title: 'AquaFilter — Floating River Water Cleanliness Tester',
    tagline: 'A floating water sensor that checks river purity and spots industrial pollution in minutes.',
    category: 'environment',
    description: 'AquaFilter is a durable floating buoy that tests river and lake water every 15 minutes. It uses smart light sensors to detect factory chemicals, heavy metals, and plastic waste in real time, alerting local village and city leaders before polluted water reaches drinking water taps.',
    benefits: [
      'Tests river water automatically every 15 minutes instead of waiting days for lab tests',
      'Self-cleaning sensor lens prevents algae and dirt from blocking readings',
      'Public water safety reports can be checked by anyone on a phone map',
      'Made from tough, recycled plastic floating cases that last for years'
    ],
    languages: ['Python', 'Rust', 'TypeScript'],
    technologies: ['Water Spectrometer Library', 'PostgreSQL', 'Docker', 'OpenCV'],
    hardware: ['Raspberry Pi CM4', 'Mini Light Spectrometer Sensor', 'Ultrasonic Cleaner', 'Tough Floating Buoy Case'],
    estimatedCost: 48000,
    targetFunding: 550000,
    ipType: 'Provisional Patent',
    ipStatus: 'Filed',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    founderName: 'Nadia El-Sayed',
    founderRole: 'Environmental Engineering Student',
    founderInstitution: 'Water Quality Student Group',
    founderAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    stage: 'MVP',
    rating: 4.7,
    reviews: [
      {
        id: 'rev-4',
        projectId: 'proj-3',
        authorName: 'Marcus Thorne',
        authorRole: 'Investor',
        rating: 5,
        comment: 'Huge real-world value for clean drinking water. The automatic cleaning system solves the main problem that broke previous water monitors.',
        date: '2026-10-21'
      }
    ],
    createdAt: '2026-09-28'
  },
  {
    id: 'proj-4',
    title: 'CodeSculpt — Talking Braille Computer Coding Board',
    tagline: 'Magnetic blocks that snap together and raise Braille pins to teach blind students programming.',
    category: 'education',
    description: 'CodeSculpt is a physical learning tool for blind and low-vision students. Students snap magnetic physical coding blocks together like puzzle pieces to create real programs. Tiny mechanical pins pop up with Braille code, and a friendly speaker reads out what the computer program is doing step by step.',
    benefits: [
      'Removes learning barriers so blind students can learn real programming easily',
      'Works with standard Python and beginner Scratch code on school computers',
      'Gives touch and voice feedback so no computer monitor is needed',
      'Low parts cost under ₹2,000 per classroom kit so schools can afford it'
    ],
    languages: ['TypeScript', 'Python', 'C++'],
    technologies: ['Web Audio API', 'React', 'Node.js', 'Code Block Parser'],
    hardware: ['Raspberry Pi Pico Microcontroller', 'Braille Solenoid Pins', 'Magnetic Snap Sensors', 'Acrylic Enclosure'],
    estimatedCost: 18000,
    targetFunding: 250000,
    ipType: 'Open Source',
    ipStatus: 'Granted',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    founderName: 'Devon Vance',
    founderRole: 'Computer Science & Accessibility Student',
    founderInstitution: 'Assistive Computing Lab',
    founderAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    stage: 'Working Prototype',
    rating: 5.0,
    reviews: [
      {
        id: 'rev-5',
        projectId: 'proj-4',
        authorName: 'Elena Rostova',
        authorRole: 'Investor',
        rating: 5,
        comment: 'A wonderful project for inclusive education. Special schools and colleges will love this physical learning board.',
        date: '2026-10-22'
      }
    ],
    createdAt: '2026-10-01'
  },
  {
    id: 'proj-5',
    title: 'AeroRescue — Smart Rescue Camera System for Drones',
    tagline: 'Smart camera unit that helps rescue drones spot trapped people in disaster areas without GPS.',
    category: 'technology',
    description: 'AeroRescue is an onboard smart camera and computer box for emergency drones. During earthquakes, floods, or collapsed building disasters, it scans rooms and rubble 45 times every second to locate people and build 3D maps, even when mobile network and GPS satellites are completely down.',
    benefits: [
      'Locates trapped survivors quickly using heat sensors and smart 3D vision',
      'Works completely without GPS or outside radio signals inside damaged buildings',
      'Very lightweight at under 180 grams so the drone battery lasts much longer',
      'Sends instant map views to firefighter and rescue team tablets'
    ],
    languages: ['C++', 'Python', 'CUDA'],
    technologies: ['Computer Vision (OpenCV)', 'Robot Operating System (ROS2)', 'TensorRT', 'Three.js 3D Maps'],
    hardware: ['NVIDIA Jetson AI Board', 'Dual 3D Stereo Cameras', 'Thermal Heat Sensor', 'Carbon Fiber Case'],
    estimatedCost: 42000,
    targetFunding: 700000,
    ipType: 'Provisional Patent',
    ipStatus: 'Filed',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    founderName: 'Kavita Rao & Sam Miller',
    founderRole: 'Robotics & AI Student Team',
    founderInstitution: 'Aerospace & Robotics Group',
    founderAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    stage: 'Field Tested',
    rating: 4.9,
    reviews: [
      {
        id: 'rev-6',
        projectId: 'proj-5',
        authorName: 'Dr. Vikram Patel',
        authorRole: 'Investor',
        rating: 4.9,
        comment: 'Smooth obstacle avoidance and very fast mapping on the video demo. Excellent AI engineering.',
        date: '2026-10-23'
      }
    ],
    createdAt: '2026-10-05'
  },
  {
    id: 'proj-6',
    title: 'NeuroVibe — Hand Steadying Glove for Daily Independence',
    tagline: 'A comfortable smart glove that counteracts hand tremors so patients can eat and write without shaking.',
    category: 'healthcare',
    description: 'NeuroVibe is a soft wearable glove created for people suffering from hand tremors. Tiny motion sensors detect when the hand starts shaking, and micro-vibration pads instantly produce gentle opposite motions to steady the fingers, letting users hold spoons, pens, and cups with confidence.',
    benefits: [
      'Helps patients eat meals and sign papers with confidence without medication side effects',
      'Weighs only 110 grams and feels like a regular sports glove',
      'Phone app tracks improvement and shares progress reports with treating doctors',
      'Parts cost 90% less than surgical devices or expensive imported alternatives'
    ],
    languages: ['C', 'Swift', 'Kotlin'],
    technologies: ['Bluetooth Low Energy', 'Sensor Filtering Algorithm', 'React Native App'],
    hardware: ['Low-Power Nordic Chip', 'Dual Motion Gyro Sensors', 'Micro Vibration Motors', 'Breathable Glove Fabric'],
    estimatedCost: 28000,
    targetFunding: 450000,
    ipType: 'Utility Patent',
    ipStatus: 'Filed',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    founderName: 'Isaac Goldman',
    founderRole: 'Biomedical Engineering Senior',
    founderInstitution: 'Neural Devices Student Lab',
    founderAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
    stage: 'MVP',
    rating: 4.9,
    reviews: [
      {
        id: 'rev-7',
        projectId: 'proj-6',
        authorName: 'Dr. Vikram Patel',
        authorRole: 'Mentor',
        rating: 5,
        comment: 'The tremor reduction works very nicely in practice. Great life-changing potential.',
        date: '2026-10-24'
      }
    ],
    createdAt: '2026-10-10'
  }
];

export const INITIAL_INVESTORS: Investor[] = [
  {
    id: 'inv-1',
    name: 'Sarah Jenkins',
    firm: 'BlueHarvest Agri & Climate Angels',
    role: 'Partner & Farm Tech Investor',
    avatar: '/src/assets/images/investor_portrait_sarah_1792933234756.jpg',
    bio: 'Angel investor backing student and college founders in farming technology, water sensors, and green energy. Has supported 14 hardware projects.',
    preferredThemes: ['agriculture', 'environment'],
    minCheck: 100000,
    maxCheck: 1000000,
    location: 'Bengaluru & San Francisco',
    portfolioCount: 14,
    verified: true
  },
  {
    id: 'inv-2',
    name: 'Dr. Vikram Patel',
    firm: 'BioPulse Health Angels',
    role: 'Medical Doctor & HealthTech Angel',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    bio: 'Heart specialist and medical startup advisor investing in student health sensors, AI diagnostics, and affordable care devices.',
    preferredThemes: ['healthcare', 'technology'],
    minCheck: 250000,
    maxCheck: 2500000,
    location: 'Mumbai & Boston',
    portfolioCount: 22,
    verified: true
  },
  {
    id: 'inv-3',
    name: 'Elena Rostova',
    firm: 'NextGen Education Fund',
    role: 'Education Tech Partner',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    bio: 'Passionate about equal education. We fund founders creating smart tools for special education, coding boards for blind students, and classroom learning aids.',
    preferredThemes: ['education', 'technology'],
    minCheck: 150000,
    maxCheck: 750000,
    location: 'Hyderabad & Austin',
    portfolioCount: 18,
    verified: true
  },
  {
    id: 'inv-4',
    name: 'Marcus Thorne',
    firm: 'TerraScale Green Syndicate',
    role: 'Clean Tech Lead',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    bio: 'Investing early capital in river water testing, clean solar tools, and smart environmental hardware prototypes with clear social benefits.',
    preferredThemes: ['environment', 'agriculture', 'technology'],
    minCheck: 500000,
    maxCheck: 3000000,
    location: 'Delhi & Seattle',
    portfolioCount: 11,
    verified: true
  }
];

export const INITIAL_MESSAGES: ContactMessage[] = [
  {
    id: 'msg-1',
    projectId: 'proj-1',
    projectTitle: 'CardioMesh — Smart Wearable Heart Monitor with AI',
    senderName: 'Dr. Vikram Patel',
    senderRole: 'Investor',
    senderEmail: 'vikram@biopulseangels.com',
    recipientName: 'Aria Chen',
    message: 'Hello Aria, your smart heart monitor test looks very solid. We run pilot tests with local clinics and would like to talk about providing ₹4,00,000 in early startup funding to help you build your next batch.',
    intendedFunding: '₹4,00,000 Early Stage Funding',
    status: 'In Discussion',
    timestamp: '2026-10-24 14:30'
  },
  {
    id: 'msg-2',
    projectId: 'proj-2',
    projectTitle: 'CeresEdge — Solar Smart Soil and Farm Water Sensor',
    senderName: 'Sarah Jenkins',
    senderRole: 'Investor',
    senderEmail: 'sarah.jenkins@blueharvestvc.com',
    recipientName: 'Mateo Morales',
    message: 'Hi Mateo, we really like your long-range farm soil sensor. We would love to set up a short online call to see your live soil readings and discuss a ₹3,00,000 first investment check.',
    intendedFunding: '₹3,00,000 First Check',
    status: 'Connected',
    timestamp: '2026-10-23 09:15'
  }
];
