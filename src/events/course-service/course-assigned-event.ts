import { Subjects } from "../subjects";

export interface CourseAssignedEvent {
  subject: Subjects.CourseAssigned;
  data: {
    id: string;
    projectId?: string[];
    version: number;
    owner: string;
    name: string;
  };
}
