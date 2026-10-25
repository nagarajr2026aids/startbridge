export type Category = 'healthcare' | 'education' | 'agriculture' | 'environment' | 'technology';

export type UserRole = 'developer' | 'investor';

export type IPType = 'Provisional Patent' | 'Utility Patent' | 'Copyright' | 'Trade Secret' | 'Open Source';

export type IPStatus = 'Filed' | 'Granted' | 'Drafting' | 'Not Filed';

export type ProjectStage = 'Concept' | 'Working Prototype' | 'MVP' | 'Field Tested';

export interface Review {
  id: string;
  projectId: string;
  authorName: string;
  authorRole: 'Investor' | 'Peer Developer' | 'Mentor';
  rating: number;
  comment: string;
  date: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: Category;
  description: string;
  benefits: string[];
  languages: string[];
  technologies: string[];
  hardware: string[];
  estimatedCost: number;
  targetFunding: number;
  ipType: IPType;
  ipStatus: IPStatus;
  videoUrl: string;
  founderName: string;
  founderRole: string;
  founderInstitution: string;
  founderAvatar?: string;
  imageUrl?: string;
  stage: ProjectStage;
  rating: number;
  reviews: Review[];
  createdAt: string;
}

export interface Investor {
  id: string;
  name: string;
  firm: string;
  role: string;
  avatar: string;
  bio: string;
  preferredThemes: Category[];
  minCheck: number;
  maxCheck: number;
  location: string;
  portfolioCount: number;
  verified: boolean;
}

export interface ContactMessage {
  id: string;
  projectId: string;
  projectTitle: string;
  senderName: string;
  senderRole: 'Investor' | 'Developer';
  senderEmail: string;
  recipientName: string;
  message: string;
  intendedFunding?: string;
  status: 'Pending' | 'In Discussion' | 'Connected';
  timestamp: string;
}
