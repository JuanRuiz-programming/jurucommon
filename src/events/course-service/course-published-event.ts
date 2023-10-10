import { Subjects } from "../subjects";

export interface CoursePublishedEvent {
  subject: Subjects.CoursePublished;
  data: {
    id: string;
    author: string[];
    owner: string;
    version: number;
  };
}
