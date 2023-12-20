import { Subjects } from "../subjects";

export interface UserBlockedEvent {
  subject: Subjects.UserUpdated;
  data: {
    id: string;
    version: number;
    avatar: string;
    name: string;
    lastname: string;
    role: string;
    email: string;
    phone: string;
    plan: string;
    status: string;
  };
}
