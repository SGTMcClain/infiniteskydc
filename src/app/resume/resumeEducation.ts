export interface ResumeEducation {
    school: string;
    schoolImage?: string;
    degreeType: string; // TODO: change to enum
    fieldOfStudy?: string;
    startDate: Date;
    endDate: Date;
    grade: string;
    description?: string;
    location?: string;
    employmentType?: string; // TODO: change to enum
    website?: URL
  }