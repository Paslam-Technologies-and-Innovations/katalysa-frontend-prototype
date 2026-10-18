export type Role = "admin" | "teacher" | "parent";
export type StudentStatus = "active" | "graduated" | "withdrawn" | "inactive";
export type TeacherStatus = "active" | "inactive";

export type Student = {
  id: number; name: string; admission: string; className: string; level: string;
  status: StudentStatus; parent: string; phone: string; email: string;
  dob: string; sex: string; colour: string; average: number;
};
export type Teacher = {
  id: number; name: string; phone: string; email: string; status: TeacherStatus;
  dateLeft?: string; reason?: string; assignments: string[];
};
export type Fee = {
  id: number; studentId: number; student: string; className: string; term: string;
  academicFee: number; allowance: number; paid: number;
  get totalPayable(): number; get balance(): number;
  get status(): "unpaid" | "partial" | "paid" | "overpaid";
};
export type Announcement = {
  id: number; title: string; body: string; audience: "all" | "parents" | "teachers";
  sendSms: boolean; date: string;
};
export type Assignment = {
  id: number; subject: string; className: string; students: number;
  complete: number; formTeacher?: boolean;
};
export type ClassGroup = { name: string; students: number; teacher: string; level: string; room: string };

export const activeTerm = "First Term 2024/2025";

export const initialStudents: Student[] = [
  { id: 1, name: "Tunde Okafor", admission: "BSA/2024/001", className: "JSS 1A", level: "JSS1", status: "active", parent: "Mrs Okafor", phone: "08077771111", email: "mrsokafor@gmail.com", dob: "15 Mar 2010", sex: "Male", colour: "blue", average: 85 },
  { id: 2, name: "Sade Okafor", admission: "BSA/2024/002", className: "JSS 1A", level: "JSS1", status: "withdrawn", parent: "Mrs Okafor", phone: "08077771111", email: "mrsokafor@gmail.com", dob: "03 Jun 2010", sex: "Female", colour: "rose", average: 74 },
  { id: 3, name: "Amina Bello", admission: "BSA/2023/018", className: "JSS 2B", level: "JSS2", status: "active", parent: "Ibrahim Bello", phone: "08033445566", email: "ibrahim.bello@example.com", dob: "21 Sep 2009", sex: "Female", colour: "gold", average: 91 },
  { id: 4, name: "Chinedu Nwosu", admission: "BSA/2022/006", className: "SS 2B", level: "SS2", status: "active", parent: "Ada Nwosu", phone: "08055551234", email: "ada.nwosu@example.com", dob: "01 Feb 2008", sex: "Male", colour: "green", average: 79 },
  { id: 5, name: "Kemi Adebayo", admission: "BSA/2021/011", className: "SS 3A", level: "SS3", status: "graduated", parent: "Adebayo Akin", phone: "08033334444", email: "akin.adebayo@example.com", dob: "12 Dec 2007", sex: "Female", colour: "violet", average: 88 },
  { id: 6, name: "Emeka Chuka", admission: "BSA/2024/027", className: "JSS 1A", level: "JSS1", status: "inactive", parent: "Funke Chuka", phone: "08077778888", email: "funke.chuka@example.com", dob: "07 Jul 2010", sex: "Male", colour: "blue", average: 68 },
];

export const initialTeachers: Teacher[] = [
  { id: 1, name: "Adebayo Okafor", phone: "08055551234", email: "adebayo@school.com", status: "active", assignments: ["Mathematics · JSS 1A · Form Teacher", "Mathematics · SS 2B"] },
  { id: 2, name: "Funke Adeleke", phone: "08033334444", email: "funke@school.com", status: "active", assignments: ["English · JSS 1A", "English · JSS 2B"] },
  { id: 3, name: "Emeka Chuka", phone: "08077778888", email: "emeka@school.com", status: "inactive", dateLeft: "15 Aug 2026", reason: "Relocated", assignments: ["Basic Science · SS 2B"] },
  { id: 4, name: "Amina Yusuf", phone: "08090112233", email: "amina@school.com", status: "active", assignments: ["Basic Science · JSS 2B"] },
];

export const createFee = (id: number, studentId: number, student: string, className: string, academicFee: number, allowance: number, paid: number, term=activeTerm): Fee => ({
  id, studentId, student, className, term, academicFee, allowance, paid,
  get totalPayable() { return academicFee + allowance; },
  get balance() { return this.totalPayable - this.paid; },
  get status() { return paid > academicFee + allowance ? "overpaid" : paid >= academicFee + allowance ? "paid" : paid > 0 ? "partial" : "unpaid"; },
});

export const initialFees: Fee[] = [
  createFee(1, 1, "Tunde Okafor", "JSS 1A", 50000, 5000, 25000),
  createFee(2, 2, "Sade Okafor", "JSS 1A", 50000, 5000, 55000),
  createFee(3, 3, "Amina Bello", "JSS 2B", 50000, 5000, 55000),
  createFee(4, 4, "Chinedu Nwosu", "SS 2B", 50000, 5000, 60000),
  createFee(5, 5, "Kemi Adebayo", "SS 3A", 50000, 5000, 0),
  createFee(6, 6, "Emeka Chuka", "JSS 1A", 50000, 5000, 25000),
];

export const initialAssignments: Assignment[] = [
  { id: 1, subject: "Mathematics", className: "JSS 1A", students: 2, complete: 2, formTeacher: true },
  { id: 2, subject: "Mathematics", className: "SS 2B", students: 10, complete: 8 },
  { id: 3, subject: "English", className: "JSS 1A", students: 2, complete: 1 },
  { id: 4, subject: "Basic Science", className: "JSS 2B", students: 12, complete: 12 },
];

export const initialAnnouncements: Announcement[] = [
  { id: 1, title: "Fee payment reminder", body: "Please clear any outstanding balance before the mid-term break. Thank you for partnering with us in your child's learning.", audience: "parents", sendSms: false, date: "23 Aug 2026" },
  { id: 2, title: "Inter-house sports day", body: "Families are warmly invited to join us for our annual inter-house sports competition this Friday.", audience: "all", sendSms: true, date: "20 Aug 2026" },
  { id: 3, title: "Staff briefing", body: "Please join the academic team in the staff room at 3.30 pm on Thursday.", audience: "teachers", sendSms: false, date: "18 Aug 2026" },
];

export const scoreRows = [
  { studentId: 1, name: "Tunde Okafor", ca1: 18, ca2: 15, exam: 52, remark: "Good" },
  { studentId: 2, name: "Sade Okafor", ca1: 19, ca2: 17, exam: 55, remark: "Excellent" },
];
