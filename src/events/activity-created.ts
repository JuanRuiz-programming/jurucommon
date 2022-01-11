import { Subjects } from './subjects';

export interface AvtivityCreatedEvent {
  subject: Subjects.ActivityCreated;
  data: {
    id: string;
    projectId: string;
    courseId: string;
    name: string;
    version: number;
    owner: string;
  };
}
