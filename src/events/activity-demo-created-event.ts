import { Subjects } from './subjects';

export interface ActivityDemoCreatedEvent {
  subject: Subjects.ActivityDemoCreated;
  data: {
    id: string;
    owner: string;
    profileId: string;
    projectId: string;
    courseId: string;
    version: number;
    type: string;
  };
}
