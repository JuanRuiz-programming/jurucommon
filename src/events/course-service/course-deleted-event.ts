import { Subjects } from "../subjects";

export interface CourseDeletedEvent {
  subject: Subjects.CourseDeleted;
  data: {
    id: string;
    projectId?: string[];
    version: number;
    owner: string;
  };
}
