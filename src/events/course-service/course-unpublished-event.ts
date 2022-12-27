import { Subjects } from "../subjects";

export interface CourseUnpublishedEvent {
  subject: Subjects.CourseUnpublished;
  data: {
    id: string;
    projectId?: string[];
    version: number;
    owner: string;
    name: string;
  };
}
