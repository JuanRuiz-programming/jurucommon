import { Subjects } from "../subjects";

export interface ProfileDeletedEvent {
  subject: Subjects.ProfileDeleted;
  data: {
    id: string;
    owner: string;
    version: number;
  };
}
