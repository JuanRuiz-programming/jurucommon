import { Subjects } from "../subjects";

export interface UserDeletedEvent {
  subject: Subjects.UserDeleted;
  data: {
    id: string;
    version: number;
    projects: string[];
    courses: string[];
    activities: string[];
    status: string;
  };
}
