import { Subjects } from "../subjects";

export interface CoursePromotedEvent {
  subject: Subjects.CoursePromoted;
  data: {
    id: string;
    author: string[];
    owner: string;
    version: number;
  };
}
