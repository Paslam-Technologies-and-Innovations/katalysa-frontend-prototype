export type RoadmapGroup = {
  title: string;
  summary: string;
  items: string[];
  confirmed?: boolean;
};

export const upcomingFeatureGroups: RoadmapGroup[] = [
  {
    title: "Confirmed for V2",
    summary: "Capabilities planned for the next major product release.",
    confirmed: true,
    items: [
      "Principal and headteacher portal",
      "Secretary dashboard for fees, reports, and exports",
      "Flexible role split, with full administrator access when there is no secretary",
      "Student attendance for form teachers and teacher attendance for administrators",
      "Audit logs",
      "Admin-as-parent access on one account",
      "School feedback system",
      "Report-card remark and comment banks",
      "Automatic promotion at the end of a session",
      "Two-factor authentication for staff logins",
      "Online admission of new students",
      "Super admin dashboard with support for multiple superusers",
      "Subscription billing with Anchor, followed by Nomba for parent payments",
    ],
  },
  {
    title: "Academic tools",
    summary: "More ways to plan teaching, assess progress, and manage learning resources.",
    items: [
      "Timetable and substitute-teacher scheduling",
      "CBT and online exams with question banks",
      "Homework and assignment tracking",
      "Rubric-based grading",
      "Library management",
      "Alumni dashboard",
      "Custom result templates for each school",
      "AI-drafted report-card comments",
    ],
  },
  {
    title: "Admissions",
    summary: "A clearer journey from first enquiry to a confirmed place.",
    items: ["Entrance and screening tests", "Waitlist and offer letters"],
  },
  {
    title: "Communication",
    summary: "Keep school teams and families connected through more channels.",
    items: [
      "Parent–teacher messaging",
      "Meeting scheduling",
      "Event calendar with RSVP",
      "Push notifications",
      "Real SMS and email delivery",
    ],
  },
  {
    title: "Finance",
    summary: "Additional tools for fee support, reconciliation, and school finances.",
    items: [
      "Scholarships and sibling or early-payment discounts",
      "Refund handling",
      "School expense tracking and budgets",
      "Payroll",
      "POS and bank-transfer reconciliation",
    ],
  },
  {
    title: "Operations and HR",
    summary: "Support the people and resources that keep each school running.",
    items: [
      "Staff leave management",
      "Staff performance reviews",
      "Asset and inventory management",
      "Multiple administrators per school",
    ],
  },
  {
    title: "Transport and boarding",
    summary: "Tools for schools that run transport routes or boarding houses.",
    items: ["Bus routes and tracking", "Hostel management"],
  },
  {
    title: "Health and safety",
    summary: "Keep essential student welfare information organised for school teams.",
    items: ["Student medical and emergency information", "Incident reporting"],
  },
  {
    title: "Analytics",
    summary: "Turn school records into useful signals for planning and support.",
    items: [
      "At-risk student flagging using grades and attendance",
      "Custom report builder",
      "Cross-school benchmarking",
    ],
  },
  {
    title: "Platform and business",
    summary: "Make it easier for schools to join, grow, and connect their tools.",
    items: [
      "Self-serve signup",
      "Multi-campus support",
      "Open API",
      "School referral incentives",
      "Bulk CSV import for migration, replacing OCR",
      "Parent chatbot",
    ],
  },
  {
    title: "Security and mobile",
    summary: "Improve privacy, portability, and access on the move.",
    items: [
      "NDPA compliance basics",
      "Self-serve data export",
      "Native mobile app",
      "Offline score and attendance entry",
    ],
  },
];
