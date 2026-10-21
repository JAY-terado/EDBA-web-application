import s5p1 from "@/assets/section5/s5p1.webp";
import s5p2 from "@/assets/section5/s5p2.webp";
import s5p3 from "@/assets/section5/s5p3.webp";
import s5p4 from "@/assets/section5/s5p4.webp";
import s5p5 from "@/assets/section5/s5p5.webp";
import s5p6 from "@/assets/section5/s5p6.webp";
import s5p7 from "@/assets/section5/s5p7.webp";
import s5p8 from "@/assets/section5/s5p8.webp";

export interface EcosystemModule {
  title: string;
  description: string;
  capabilities: string[];
  image: string;
  alt: string;
}

export const ecosystemModules: EcosystemModule[] = [
  {
    title: "Institution & Administrative Management",
    description:
      "Streamline institutional operations with centralized student records, staff information, admissions, and administrative workflows. Reduce paperwork, improve data accessibility, and manage institutional activities more efficiently.",
    capabilities: [
      "Admissions",
      "Student Management",
      "Staff & Employee Management",
      "Administration",
      "Reports",
      "Policies & Approvals",
    ],
    image: s5p1,
    alt: "Staff using the EDBA dashboard for institutional records and admissions management",
  },
  {
    title: "Classroom & Academic Management",
    description:
      "Simplify academic planning and classroom coordination with tools that help institutions organize timetables, manage attendance, and coordinate academic activities across classes and departments.",
    capabilities: [
      "Classroom Management",
      "Academics",
      "Timetable Coordination",
      "Student Attendance",
      "Attendance Correction",
      "Student Leave Applications",
    ],
    image: s5p2,
    alt: "Educator presenting academic schedule and timetables on interactive classroom display",
  },
  {
    title: "Parent, Student & Staff Communication",
    description:
      "Keep your institution's community connected through streamlined communication. Share announcements, important updates, and messages to help administrators, teachers, students, and parents stay informed.",
    capabilities: [
      "Announcements",
      "Messages",
      "Communication Updates",
      "Parent & Student Engagement",
    ],
    image: s5p3,
    alt: "Parents and students receiving real-time school announcements and notices on mobile app",
  },
  {
    title: "Examination & Student Progress Management",
    description:
      "Organize examination activities and academic records through centralized examination workflows. Manage marks, examination data, and student progression to support effective academic monitoring.",
    capabilities: [
      "Examination Management",
      "Exam Masters",
      "Marks & Data Entry",
      "Reports",
      "Student Promotion",
    ],
    image: s5p5,
    alt: "Faculty reviewing examination performance metrics and student progress reports",
  },
  {
    title: "Fees & Financial Management",
    description:
      "Simplify fee administration and payment tracking with centralized financial workflows that support better record management and visibility into student fee transactions.",
    capabilities: ["Fees Management", "Payments", "Miscellaneous Payments"],
    image: s5p4,
    alt: "Institutional staff and parent completing fee payment with instant digital verification",
  },
  {
    title: "Certificates & Student Documentation",
    description:
      "Manage essential student documents and institutional records in a structured digital environment. Simplify certificate-related processes and make important documents easier to access when required.",
    capabilities: [
      "Certificates",
      "Leaving Certificate (LC)",
      "Student Documents",
      "Photo Gallery",
    ],
    image: s5p6,
    alt: "Administration generating verified student certificates and academic documentation",
  },
  {
    title: "Sports & Physical Education",
    description:
      "Support sports and physical education activities alongside academic administration, helping institutions coordinate student participation and related records.",
    capabilities: ["Sports & Physical Education Management"],
    image: s5p7,
    alt: "Physical education coach managing athletic programs and student sports participation",
  },
  {
    title: "Learning & Digital Engagement",
    description:
      "Support a connected learning environment with digital learning resources and classroom-related information that can help students and parents stay informed about academic activities.",
    capabilities: [
      "Learning Management System (LMS)",
      "Classroom Wall",
      "Learning Updates",
    ],
    image: s5p8,
    alt: "Students engaged with digital learning resources and interactive classroom wall",
  },
];
