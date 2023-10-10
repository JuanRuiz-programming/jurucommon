import { Subjects } from "../subjects";

export interface CourseUnpublishedEvent {
  subject: Subjects.CourseUnpublished;
  data: {
    id: string;
    author: string[];
    owner: string;
    version: number;
  };
}
