export type UserRole =
  | "client"
  | "professional"
  | "admin";

export type ProfessionalStatus =
  | "none"
  | "pending"
  | "approved"
  | "rejected";

export type AuthStep =
  | "initial"
  | "magic-link"
  | "verify-email"
  | "complete-profile"
  | "success";