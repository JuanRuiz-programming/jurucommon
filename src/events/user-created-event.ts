import { Subjects } from './subjects';

export interface UserCreatedEvent {
  subject: Subjects.UserCreated;
  data: {
    id: string;
    version: number;
    avatar?: string;
    name: string;
    lastname: string;
    role?: string;
    email: string;
  };
}