import { Subjects } from "../subjects";

export interface UserGetEvent {
  subject: Subjects.UserGet;
  data: {
    id: string;
    version: number;
    avatar: string;
    name: string;
    lastname: string;
    role?: string;
    email: string;
    phone: string;
    plan?: string;
    projects?: string;
    courses?: string;
    activities?: string;
    status?: string;
  };
}
