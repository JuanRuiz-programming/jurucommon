import { Subjects } from "../subjects";

export interface ActivityUpdatedEvent {
  subject: Subjects.ActivityUpdated;
  data: {
    id: string;
    owner: string;
    version: number;
  };
}
