import { Subjects } from "../subjects";

export interface ProjectCreatedEvent {
  subject: Subjects.ProjectCreated;
  data: {
    id: string;
    version: number;
    author: string;
  };
}

