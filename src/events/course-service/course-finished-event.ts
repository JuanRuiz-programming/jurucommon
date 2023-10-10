import { Subjects } from "../subjects";

export interface CourseFinishedEvent {
  subject: Subjects.CourseFinished;
  data: {
    id: string;
    author: string[];
    owner: string;
    version: number;
    status: string;
  };
}
