import { Subjects } from "../subjects";

export interface CourseFinishedEvent {
  subject: Subjects.CourseFinished;
  data: {
    id: string;
    projectId?: string[];
    version: number;
    owner: string;
    name: string;
  };
}
