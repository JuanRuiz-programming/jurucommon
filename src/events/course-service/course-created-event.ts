import { Subjects } from "../subjects";

export interface CourseCreatedEvent {
  subject: Subjects.CourseCreated;
  data: {
    id: string;
    author: string[];
    owner: string;
    version: number;
  };
}
