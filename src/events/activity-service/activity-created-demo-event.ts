import { Subjects } from "../subjects";

export interface ActivityDemoCreatedEvent {
  subject: Subjects.ActivityDemoCreated;
  data: {
    id: string;
    author: string;
    courses_related: string[];
    version: number;
  };
}
