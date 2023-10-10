import { Subjects } from "../subjects";

export interface CourseCreatedDemoEvent {
  subject: Subjects.CourseDemoCreated;
  data: {
    id: string;
    owner: string;
    version: number;
  };
};