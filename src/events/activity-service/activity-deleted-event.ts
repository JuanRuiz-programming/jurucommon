import { Subjects } from "../subjects";

export interface ActivityDeletedEvent {
  subject: Subjects.ActivityDeleted;
  data: {
    id: string;
    owner: string;
    version: number;
  };
}
