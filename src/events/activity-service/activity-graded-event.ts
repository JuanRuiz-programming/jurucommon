import { Subjects } from "../subjects";

export interface ActivityGradedEvent {
    subject: Subjects.ActivityGraded;
    data: {
        id: string,
        owner: string,
        version: number,
    }
}
