import { Subjects } from "../subjects";

export interface ActivityAssignedEvent {
  subject: Subjects.ActivityAssigned;
  data: {
    id: string;
    owner: string;
    version: number;
  };
}
