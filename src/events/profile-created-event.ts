import { Subjects } from './subjects';

export interface ProfileCreatedEvent {
  subject: Subjects.ProfileCreated;
  data: {
    id: string;
    owner: string;
    version: number;
  };
}
