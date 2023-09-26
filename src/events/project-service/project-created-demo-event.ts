import { Subjects } from "../subjects";

export interface ProjectDemoCreatedEvent {
  subject: Subjects.ProfileDemoCreated;
  data: {
    id: string;
    version: number;
    author: string;
  }
}