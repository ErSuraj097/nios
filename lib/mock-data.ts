import { 
  Users, 
  BookOpen, 
  GraduationCap, 
  Shield, 
  User, 
  Beaker, 
  Calculator, 
  Globe, 
  Monitor, 
  Leaf,
  Clock,
  CheckCircle,
  AlertCircle,
  Video,
  FileText,
  TrendingUp,
  Award,
  Zap,
  Cpu
} from 'lucide-react';

export type UserRole = 'learner' | 'teacher' | 'admin' | 'parent' | 'guest';

export interface MockUser {
  id: string;
  name: string;
  role: UserRole;
  avatar?: string;
  email: string;
  details: {
    class?: string;
    enrollmentNo?: string;
    subjects?: string[];
    department?: string;
    designation?: string;
    studentName?: string;
    studentId?: string;
  };
}

export const MOCK_USERS: MockUser[] = [
  {
    id: 'L10023',
    name: 'Arjun Sharma',
    role: 'learner',
    email: 'arjun.sharma@example.edu.in',
    details: {
      class: 'Class 10',
      enrollmentNo: 'NIOS2026-10023',
      subjects: ['Science', 'Mathematics', 'English', 'Social Science', 'Hindi']
    }
  },
  {
    id: 'T5001',
    name: 'Dr. Vikram Mehta',
    role: 'teacher',
    email: 'vikram.mehta@nios-faculty.org',
    details: {
      department: 'Science & Technology',
      designation: 'Senior Faculty'
    }
  },
  {
    id: 'A9001',
    name: 'Suresh Kumar',
    role: 'admin',
    email: 'admin.support@nios.gov.in',
    details: {
      designation: 'System Administrator'
    }
  },
  {
    id: 'P7001',
    name: 'Sunita Devi',
    role: 'parent',
    email: 'sunita.devi@parent.com',
    details: {
      studentName: 'Arjun Sharma',
      studentId: 'L10023'
    }
  },
  {
    id: 'G1001',
    name: 'Guest Explorer',
    role: 'guest',
    email: 'guest@portal.com',
    details: {
      designation: 'Prospective Learner'
    }
  }
];

export interface MockCourse {
  id: string;
  title: string;
  subject: string;
  teacher: string;
  lessons: number;
  duration: string;
  level: string;
  progress: number;
  enrolled: boolean;
  tags: string[];
  icon: any;
  description: string;
  objectives: string[];
  modules: number;
  rating?: number;
  videoUrl?: string;
  transcript?: string;
  islUrl?: string;
  summary?: string;
}

export const MOCK_COURSES: MockCourse[] = [
  {
    id: '1',
    title: 'Physics: Motion, Force & Energy',
    subject: 'Science',
    teacher: 'Dr. V. Mehta',
    lessons: 24,
    duration: '18 hrs',
    level: 'Class 12',
    progress: 72,
    enrolled: true,
    tags: ['SCORM', 'Video', 'Quiz'],
    icon: Beaker,
    description: 'Explore the fundamental principles of classical mechanics, gravity, and energy transformation in the physical world.',
    objectives: ['Understand Newton\'s Laws', 'Apply Kinetic Energy formulas', 'Relate work and power'],
    modules: 12,
    rating: 4.8,
    videoUrl: 'https://youtu.be/kopoLzvh5jY?si=ZDtRG-kiRU_3zFA5',
    transcript: 'Newton\'s laws of motion are three physical laws that, together, laid the foundation for classical mechanics. They describe the relationship between a body and the forces acting upon it, and its motion in response to those forces. More precisely, the first law defines the concept of force as a physical quantity that causes motion. The second law quantitative relationship between force and acceleration. The third law describes the reaction force.',
    summary: 'This lesson covers the fundamentals of Newton\'s laws, including Inertia (First Law), F=ma (Second Law), and Action/Reaction (Third Law). It explains how these principles govern everything from a falling apple to planetary motion.'
  },
  {
    id: '2',
    title: 'Mathematics Mastery',
    subject: 'Mathematics',
    teacher: 'Ms. S. Verma',
    lessons: 32,
    duration: '24 hrs',
    level: 'Class 10',
    progress: 55,
    enrolled: true,
    tags: ['PDF', 'Quiz', 'Simulation'],
    icon: Calculator,
    description: 'A comprehensive journey through algebra, geometry, and basic trigonometry designed for matriculation exams.',
    objectives: ['Solve Quadratic equations', 'Perform geometric constructions', 'Understand trigonometric ratios'],
    modules: 15,
    rating: 4.9
  },
  {
    id: '3',
    title: 'English Literature',
    subject: 'English',
    teacher: 'Mr. R. Iyer',
    lessons: 18,
    duration: '14 hrs',
    level: 'Class 10',
    progress: 94,
    enrolled: true,
    tags: ['Video', 'Audio', 'SLM'],
    icon: BookOpen,
    description: 'Study essential texts from Indian and world literature while enhancing reading comprehension and communication skills.',
    objectives: ['Analyze poetic devices', 'Compose formal essays', 'Demonstrate critical reading'],
    modules: 8,
    rating: 4.7
  }
];

export interface MockAssessment {
  id: string;
  title: string;
  subject: string;
  type: 'Quiz' | 'Mock Exam' | 'Assignment';
  dueDate: string;
  status: 'Pending' | 'Completed' | 'Missed';
  score?: number;
}

export const MOCK_ASSESSMENTS: MockAssessment[] = [
  { id: 'Q1', title: 'Unit 1: Quantum Basics', subject: 'Science', type: 'Quiz', dueDate: '2026-04-10', status: 'Pending' },
  { id: 'E1', title: 'Pre-Board Mock Exam', subject: 'Mathematics', type: 'Mock Exam', dueDate: '2026-04-15', status: 'Pending' },
  { id: 'A1', title: 'Essay: The Indian Renaissance', subject: 'Social Science', type: 'Assignment', dueDate: '2026-04-05', status: 'Completed', score: 88 }
];

export interface MockAchievement {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  date: string;
}

export const MOCK_ACHIEVEMENTS: MockAchievement[] = [
  { id: 'AC1', title: 'Consistently Early', subtitle: 'Turned in 5 assignments before deadline', icon: Zap, date: '2026-03-28' },
  { id: 'AC2', title: 'Science Whiz', subtitle: 'Scored 100% in Biology Unit Quiz', icon: Award, date: '2026-03-15' }
];

export interface MockEvent {
  id: string;
  title: string;
  type: 'Class' | 'Exam' | 'Submission';
  time: string;
  endTime?: string;
  platform?: string;
  isLive?: boolean;
}

export const MOCK_EVENTS: MockEvent[] = [
  { id: 'EV1', title: 'LIVE Physics: Motion', type: 'Class', time: '10:00 AM', endTime: '11:30 AM', platform: 'Zoom', isLive: true },
  { id: 'EV2', title: 'Math Problem Solving', type: 'Class', time: '02:00 PM', endTime: '03:00 PM', platform: 'Google Meet' },
  { id: 'EV3', title: 'English Essay Submission', type: 'Submission', time: 'By 11:59 PM' }
];

export interface MockBook {
  id: string;
  title: string;
  author: string;
  cover: string;
  pages: string[];
  category: 'Textbook' | 'Schedule' | 'Guide';
}

export const MOCK_BOOKS: MockBook[] = [
  {
    id: 'B1',
    title: 'Secondary Physics: Unit 1',
    author: 'NIOS Faculty',
    cover: '/sb_logo.png',
    category: 'Textbook',
    pages: [
      '/sb_logo.png',
      '/sb_logo.png',
      '/sb_logo.png',
      '/sb_logo.png',
    ]
  },
  {
    id: 'S1',
    title: 'Live Class Schedule: April 2026',
    author: 'Academic Dept',
    cover: '/sb_logo.png',
    category: 'Schedule',
    pages: [
      '/sb_logo.png',
      '/sb_logo.png',
      '/sb_logo.png',
    ]
  }
];
