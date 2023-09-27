import { Subjects } from "../subjects";

export interface CourseDeletedEvent {
  subject: Subjects.CourseDeleted;
  data: {
    id: string;
    author: string;
    projectId?: string[];
    version: number;
  };
}
