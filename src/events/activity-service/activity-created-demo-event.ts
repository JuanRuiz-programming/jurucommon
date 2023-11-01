import { Subjects } from "../subjects";

export interface ActivityDemoCreatedEvent {
  subject: Subjects.ActivityDemoCreated;
  data: {
    id: string;
    owner: string;
    version: number;
  };
}
