import { Subjects } from "./subjects";

export interface A11yConfigUpdated {
  subject: Subjects.A11yConfigUpdated;
  data: {
    id: string;
    version: number;
    profile: string;
    theme: string;
    layout: string;
    typography: string;
    highlightTitles: boolean;
    highlightLinks: boolean;
    language: string;
    images: string;
    videos: string;
    audios: string;
    readingGuideLine: boolean;
    bigCursor: boolean;
  };
}