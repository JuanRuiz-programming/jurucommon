import { Subjects } from "../subjects";

export interface ProfileCreatedEvent {
  subject: Subjects.ProfileCreated;
  data: {
    id: string;
    owner: string;
    version: number;
    profilePic: string;
    about: string;
    establishment: string;
    area: string;
    skills: string[];
    rating: number;
    country: string;
    city: string;
    gender: string;
    age?: number;
    nativeLanguage: string;
    foreignLanguage: string[];
    projects?: string[];
    courses?: string[];
    activities?: string[];
    clases?: string[];
    groups?: string[];
    resources?: string[];
    posts?: string[];
    followers?: string[];
    following?: string[];
    gradebook?: string;
    profile_status: string;
    a11yConfig?: string;
  };
}
