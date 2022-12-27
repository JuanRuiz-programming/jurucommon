import { Subjects } from "../subjects";

export interface CoursePromotedEvent {
  subject: Subjects.CoursePromoted;
  data: {
    id: string;
    projectId?: string[];
    version: number;
    owner: string;
    name: string;
  };
}
