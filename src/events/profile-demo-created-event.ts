import { Subjects } from './subjects';

export interface ProfileDemoCreatedEvent {
  subject: Subjects.ProfileDemoCreated;
  data: {
    id: string;
    owner: string;
    version: number;
  };
}
