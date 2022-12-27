import { Subjects } from "../subjects";

export interface CoursePublishedEvent {
  subject: Subjects.CoursePublished;
  data: {
    id: string;
    projectId?: string[];
    version: number;
    owner: string;
    name: string;
  };
}
