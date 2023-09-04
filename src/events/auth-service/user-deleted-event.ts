import { Subjects } from "../subjects";

export interface UserDeletedEvent {
  subject: Subjects.UserDeleted;
  data: {
    id: string;
    version: number;
    avatar?: string;
    name: string;
    lastname: string;
    role?: string;
    email: string;
    plan?: string;
    projects?: string[];
    courses?: string[];
    activities?: string[];
    status?: string;
  };
}
