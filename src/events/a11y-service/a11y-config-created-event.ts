import { Subjects } from "../subjects";

export interface A11yConfigCreatedEvent {
  subject: Subjects.A11yConfigCreated;
  data: {
    id: string;
    owner: string;
    version: number;
  };
}
