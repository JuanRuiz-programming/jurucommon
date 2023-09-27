import { Subjects } from "../subjects";
import { CourseStatus } from "../types/course-status";

export interface CourseCreatedEvent {
  subject: Subjects.CourseCreated;
  data: {
    id: string;
    author: string;
    projectId?: string[];
    version: number;
  };
}
