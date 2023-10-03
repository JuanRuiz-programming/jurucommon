import { Subjects } from "../subjects";

export interface UserBlockedEvent {
  subject: Subjects.UserUpdated;
  data: {
    id: string;
    version: number;
    projects: string[];
    courses: string[];
    activities: string[];
    status: string;
  };
}