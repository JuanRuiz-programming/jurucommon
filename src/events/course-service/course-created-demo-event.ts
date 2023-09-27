import { Subjects } from "../subjects";

export interface CourseDemoCreatedEvent {
  subject: Subjects.CourseDemoCreated;
  data: {
    id: string;
    author: string;
    projectId?: string[];
    version: number;
  };
}
