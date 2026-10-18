import type { Role } from "./demo-data";

/**
 * Mock service boundary. Methods mirror the backend contract, but never call fetch,
 * a network service, or a payment provider. Replace with real services only in an
 * explicitly authorized integration phase.
 */
export const mockApi = {
  async login(role: Role, name?: string) {
    const demoSession = { access: `demo-access-${role}`, refresh: `demo-refresh-${role}`, role, name: name || defaultName(role), must_change_password: role !== "admin" };
    if (typeof window !== "undefined") window.localStorage.setItem("katalysa-demo-session", JSON.stringify(demoSession));
    return demoSession;
  },
  async registerSchool(schoolName: string, adminName: string) {
    return this.login("admin", adminName || "Amara Okafor").then(session => ({
      ...session,
      school: { name: schoolName || "Bloomfield Academy", setupComplete: 4 },
    }));
  },
  async changePassword() {
    if (typeof window !== "undefined") {
      const raw = window.localStorage.getItem("katalysa-demo-session");
      if (raw) window.localStorage.setItem("katalysa-demo-session", JSON.stringify({ ...JSON.parse(raw), must_change_password: false }));
    }
    return { ok: true, message: "Password updated in this demo." };
  },
  async createPayment(purpose: "fee" | "transcript", total: number, studentId?: number) {
    const reference = `KAT-DEMO-${Math.random().toString(16).slice(2, 10).toUpperCase()}`;
    if (typeof window !== "undefined") window.localStorage.setItem(`katalysa-demo-payment-${reference}`, JSON.stringify({ purpose, total, status: "pending", studentId }));
    return { reference, authorization_url: `/demo-checkout?reference=${reference}`, total_amount: total, purpose };
  },
  async verifyPayment(reference: string) {
    if (typeof window === "undefined") return { status: "failed", purpose: "fee" as const };
    const record = window.localStorage.getItem(`katalysa-demo-payment-${reference}`);
    if (!record) return { status: "failed", purpose: "fee" as const };
    const payment = JSON.parse(record) as { purpose: "fee" | "transcript"; total: number; status: string; studentId?: number };
    return { status: payment.status, purpose: payment.purpose, total_amount: payment.total, student_id: payment.studentId };
  },
  async completeDemoPayment(reference: string) {
    if (typeof window === "undefined") return;
    const key = `katalysa-demo-payment-${reference}`;
    const record = window.localStorage.getItem(key);
    if (record) {
      const payment = { ...JSON.parse(record), status: "success" } as { purpose: string; studentId?: number; [key: string]: unknown };
      window.localStorage.setItem(key, JSON.stringify(payment));
      if (payment.purpose === "transcript" && payment.studentId) window.localStorage.setItem(`katalysa-demo-transcript-${payment.studentId}`, "true");
    }
  },
};

function defaultName(role: Role) {
  return role === "admin" ? "Amara Okafor" : role === "teacher" ? "Adebayo Okafor" : "Mrs Okafor";
}
