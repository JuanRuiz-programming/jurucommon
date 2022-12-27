import { Subjects } from "../subjects";
import { CourseStatus } from "../types/course-status";

export interface CourseUpdatedEvent {
  subject: Subjects.CourseUpdated;
  data: {
    id: string;
    projectId?: string[];
    version: number;
    owner: string;
    code: string;
    name: string;
    slug: string;
    establishment: string;
    area: string;
    desc: string;
    topics: string[];
    activities?: string[];
    status: CourseStatus;
  };
}
