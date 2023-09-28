import { Subjects } from "../subjects";

export interface ActivityDemoCreatedEvent {
  subject: Subjects.ActivityDemoCreated;
  data: {
    id: string;
    author: string;
    courseId: string;
    projectId: string;
    version: number;
  };
}
