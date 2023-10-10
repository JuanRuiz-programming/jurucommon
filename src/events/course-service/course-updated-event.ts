import { Subjects } from "../subjects";
import { CourseStatus } from "../types/course-status";

export interface CourseUpdatedEvent {
  subject: Subjects.CourseUpdated;
  data: {
    id: string;
    author: string[];
    owner: string;
    version: number;
  };
}
