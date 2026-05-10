import {
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Languages,
  Lightbulb,
  Medal,
  Microscope,
  PencilRuler,
  School,
  Trophy,
  Users,
} from 'lucide-react'

export const institute = {
  name: 'Sri Sai Vagdevi (SSV) Tuition Center',
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
  { label: 'Faculty', href: '#faculty' },
  { label: 'Results', href: '#results' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Courses', href: '#courses' },
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
    role: 'Assistant Professor at ANITS',
    mentoringExpertise: 'Concept-led physics mentoring from school boards through competitive readiness with clear fundamentals.',
    highlights: ['Best Teacher Award', 'PhD in Materials Science', 'Concept-based teaching expert', 'Doubt-solving & individualized planning'],
  },
  {
    name: 'Mrs. M Hemalatha',
    qualification: 'M.Sc. Organic Chemistry',
    experience: '5 Years Teaching Experience',
    specialization: 'Chemistry Specialist',
    role: 'Chemistry Mentor & Academic Guide',
    mentoringExpertise: 'Patient, student-centered support with structured revision and regular concept checks.',
    highlights: ['Student-centered teaching', 'Strong academic guidance', 'Clarity-focused coaching', 'Consistent mentorship'],
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

export const improvementResult = {
  student: 'Doddi Prabhu Kumar',
  highlights: [
    { label: 'Mathematics', score: '77/100' },
    { label: 'Science', score: '78/100' },
  ],
}
