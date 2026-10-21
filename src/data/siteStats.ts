/**
 * CANONICAL SITE STATISTICS & METRICS
 * 
 * NOTE: These numbers are placeholders to confirm with the business.
 * All marketing sections, counters, headers, and footers MUST import 
 * from this single source of truth so they never contradict each other.
 */

export interface MetricItem {
  count: number;
  display: string;
  label: string;
  description?: string;
  suffix?: string;
}

export const siteStats = {
  // 600+ Institutes
  institutes: {
    count: 600,
    display: "600+",
    label: "Institutes",
    description: "Colleges, Universities & School Chains",
    suffix: "+",
  },
  // 1.2M+ Students
  students: {
    count: 1200000,
    display: "1.2M+",
    label: "Students",
    description: "Active learners supported campus-wide",
    suffix: "+",
  },
  // 8,000+ Admissions processed
  admissions: {
    count: 8000,
    display: "8,000+",
    label: "Admissions Processed",
    description: "Paperless student applications managed",
    suffix: "+",
  },
  // 99.98% Uptime
  uptime: {
    count: 99.98,
    display: "99.98%",
    label: "Uptime SLA",
    description: "Enterprise high-availability cloud architecture",
    suffix: "%",
  },
  // 4.9/5 Rating
  rating: {
    count: 4.9,
    display: "4.9/5",
    label: "User Rating",
    description: "Verified reviews across institutions",
    suffix: "/5",
  },
  // Operational efficiency metrics
  parentEngagement: {
    count: 95,
    display: "95%",
    label: "Parent Engagement",
    description: "Direct real-time app participation",
    suffix: "%",
  },
  adminTimeSaved: {
    count: 70,
    display: "70%",
    label: "Admin Time Saved",
    description: "Automated paperwork and attendance roll-calls",
    suffix: "%",
  },
} as const;

export default siteStats;
