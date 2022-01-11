import { Subjects } from './subjects';

export interface ProfileUpdatedEvent {
  subject: Subjects.ProfileUpdated;
  data: {
    id: string;
    owner: string;
    version: number;
  };
}
