import { Subjects } from "../subjects";

export interface CourseAssignedEvent {
  subject: Subjects.CourseAssigned;
  data: {
    id: string;
    author: string[];
    owner: string;
    version: number;
  };
}
