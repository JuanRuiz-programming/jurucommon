import { Subjects } from "../subjects";

export interface ProjectDemoCreatedEvent {
  subject: Subjects.ProjectDemoCreated;
  data: {
    id: string;
    version: number;
    author: string;
  }
}