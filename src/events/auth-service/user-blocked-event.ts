import { Subjects } from "../subjects";

export interface UserBlockedEvent {
  subject: Subjects.UserUpdated;
  data: {
    id: string;
    version: number;
    status: string;
  };
}