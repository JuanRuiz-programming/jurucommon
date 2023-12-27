export enum Subjects {
  // AUTH SERVICE EVENTS
  UserCreated = "user:created",
  UserUpdated = "user:updated",
  UserGet = "user:get",
  UserDeleted = "user:deleted",
  UserBlocked = "user:blocked",

  // PROFILE SERVICE EVENTS
  ProfileCreated = "profile:created",
  ProfileUpdated = "profile:updated",
  ProfileGet = "profile:get",
  ProfileGetField = "profile:getField",

  // PROJECT SERVICE EVENTS
  ProjectCreated = "project:created",
  ProjectdemoCreated = "projectdemo:created",
  ProjectUpdated = "project:updated",
  ProjectdemoUpdated = "projectdemo:updated",
  ProjectDeleted = "project:deleted",
  ProjectCancelled = "project:cancelled",
  ProjectPublished = "project:published",
  ProjectUnpublished = "project:unpublished",
  projectFinished = "project:finished",
  projectCloned = "project:cloned",
  ProjectPromoted = "project:promoted",
  ProjectWinners = "project:winners",
  ProjectFollowed = "project:followed",
  ProjectFeeling = "project:feeling",

  // COURSE SERVICE EVENTS
  CourseCreated = "course:created",
  CourseDemoCreated = "coursedemo:created",
  CourseDemoUpdated = "coursedemo:updated",
  CourseUpdated = "course:updated",
  CourseDeleted = "course:deleted",
  CoursePublished = "course:published",
  CourseUnpublished = "course:unpublished",
  CourseFinished = "course:finished",
  CoursePromoted = "course:promoted",
  CourseAssigned = "course:assigned",

  // ACTIVITY SERVICE EVENTS
  ActivityCreated = "activity:created",
  ActivityDemoCreated = "activitydemo:created",
  ActivityUpdated = "activity:updated",
  ActivityDeleted = "activity:deleted",
  ActivityAssigned = "activity:assigned",
  ActivityUnpublished = "activity:unpublished",
  ActivityFinished = "activity:finished",
  ActivityGraded = "activity:graded",

  // A11Y SERVICE EVENTS
  A11yConfigCreated = "a11yconfig:created",
  A11yConfigUpdated = "a11yconfig:updated",

  // INSTITUTION SERVICE EVENTS

  // ADDS SERVICE EVENTS

  // RELEASES SERVICE EVENTS

  // REVIEWS SERVICE EVENTS

  // NOTIFICATIONS EVENTS

  // BABYSTEPS SERVICE EVENTS

  // STUDENTS GROUP SERVICE EVENTS

  // COMPANY SERVICE EVENTS
}
