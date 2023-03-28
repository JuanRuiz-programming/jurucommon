import { Subjects } from "../subjects";

export interface ProfileGetUserEvent {
  subject: Subjects.ProfileGetUser;
  data: {
    id: string;
    owner: string;
    version: number;
  };
}
