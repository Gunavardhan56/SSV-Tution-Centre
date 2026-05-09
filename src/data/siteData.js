import {
  BookOpenText,
  Brain,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Home,
  Landmark,
  Languages,
  Lightbulb,
  Medal,
  Microscope,
  PencilRuler,
  School,
  Target,
  Trophy,
  Users,
} from 'lucide-react'

export const institute = {
  name: 'Sri Sai Vaagdevi (SSV) Tuition Center',
  shortName: 'SSV',
  tagline: 'Building Strong Foundations From LKG to PG',
  phone: '+91 89858 86883',
  callHref: 'tel:+918985886883',
  whatsappNumber: '+91 891 982 6942',
  whatsappLink: 'https://wa.me/918919826942',
  email: 'ssvtuitioncenter@gmail.com',
  emailHref: 'mailto:ssvtuitioncenter@gmail.com',
  address: 'NTR Marg, Sagar Nagar, Endada, Andhra Pradesh 530045',
  mapsQuery: 'Q985+MCJ Endada, Andhra Pradesh',
  website: 'www.ssvtuitioncenter.com',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Courses', href: '#courses' },
  { label: 'Results', href: '#results' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export const heroStats = [
  { label: 'Years Experience', value: 17, suffix: '+' },
  { label: 'First Class Results', value: 100, suffix: '%' },
  { label: 'Personalized Attention', value: 1, suffix: ':1' },
  { label: 'Expert Faculty', value: 2, suffix: '+' },
]

export const whyChooseUs = [
  { icon: Users, title: 'Experienced Faculty', description: 'Highly qualified educators with result-driven strategies.' },
  { icon: HeartHandshake, title: 'Individual Attention', description: 'Personal support for every learner and parent.' },
  { icon: CheckCircle2, title: 'Weekly Tests', description: 'Continuous assessments to track performance progress.' },
  { icon: Brain, title: 'Concept-based Learning', description: 'Strong fundamentals built through practical clarity.' },
  { icon: Target, title: 'IIT/EAPCET Guidance', description: 'Focused preparation pathways for competitive exams.' },
  { icon: Home, title: 'Peaceful Learning Environment', description: 'Calm, distraction-free setup for better concentration.' },
  { icon: BookOpenText, title: 'Strong Academic Support', description: 'Doubt resolution and mentoring throughout the journey.' },
  { icon: Building2, title: 'Home-based Comfortable Learning', description: 'Supportive and safe atmosphere for consistent growth.' },
]

export const courses = [
  { icon: School, title: 'School Coaching', description: 'LKG to 10th with foundation-first mentoring.' },
  { icon: GraduationCap, title: 'SSC / CBSE / ICSE', description: 'Board-focused strategy with complete syllabus planning.' },
  { icon: Landmark, title: 'Intermediate Coaching', description: 'IPE preparation with confidence-building guidance.' },
  { icon: Trophy, title: 'IIT / EAPCET Foundation', description: 'Early exam orientation and advanced problem-solving.' },
  { icon: PencilRuler, title: 'Polytechnic', description: 'Subject support aligned with diploma requirements.' },
  { icon: BriefcaseBusiness, title: 'B.Tech Subjects', description: 'All branches covered with concept and score focus.' },
]

export const specialSubjects = [
  { icon: Languages, name: 'Telugu' },
  { icon: Languages, name: 'Hindi' },
  { icon: Microscope, name: 'Mathematics' },
  { icon: FlaskConical, name: 'Science (Physics)' },
]

export const faculty = [
  {
    name: 'Dr. T Bhima Raju',
    qualification: 'M.Sc., M.Tech., M.Phil., Ph.D.',
    experience: '17 Years Teaching Experience',
    specialization: 'Physics Specialist',
    highlights: [
      'Assistant Professor at ANITS',
      'Best Teacher Awards',
      'PhD in Materials Science',
      'Expert in Concept-based Teaching',
    ],
  },
  {
    name: 'Mrs. M Hemalatha',
    qualification: 'M.Sc. Organic Chemistry',
    experience: '5 Years Teaching Experience',
    specialization: 'Chemistry Specialist',
    highlights: [
      'Student-centered Teaching',
      'Strong Academic Guidance',
      'Clarity-focused approach',
      'Personal mentoring support',
    ],
  },
]

export const result = {
  student: 'Darimireddy Mohan Sai',
  score: 581,
  total: 600,
  highlights: [
    { label: 'Mathematics', score: '100/100', icon: Medal },
    { label: 'Science', score: '97/100', icon: Lightbulb },
  ],
}
