import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ResumeHeader } from './resumeHeader';
import { ResumeExperience } from './resumeExperience';
import { ResumeEducation } from './resumeEducation';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  // @Input() resumeHeader: ResumeHeader | null = null;
  @Output() editHeader = new EventEmitter<ResumeHeader>();
  @Output() editExperience = new EventEmitter<ResumeExperience>();
  @Output() editEducation = new EventEmitter<ResumeEducation>();

  resumeHeader: ResumeHeader = {
    name: {
      first: "Joe",
      last: "Snuffy"
    },
    email: "abc@123.com",
    phone: "202-555-1212"
  }

  experiences: ResumeExperience[] = [
    {
    title: "Senior Software Developer",
    company: "InfiniteSkyDC",
    startDate: new Date(2020, 1),
    endDate: new Date(2022, 9),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    isCurrentEmployment: true
    },
    {
      title: "Junior Software Developer",
      company: "Apple",
      startDate: new Date(2016, 3),
      endDate: new Date(2020, 8),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      isCurrentEmployment: false
      }
  ]

  schools: ResumeEducation[] = [
    {
      school: "American University",
      degreeType: "Masters of Science - MS",
      fieldOfStudy: "Software Development",
      startDate: new Date(2018),
      endDate: new Date(2019),
      grade: "3.50"
    },
    {
      school: "University of Baltimore",
      degreeType: "Bachelors of Science - BS",
      fieldOfStudy: "Simulation and Digital Entertainment",
      startDate: new Date(2016),
      endDate: new Date(2015),
      grade: "3.37"
    },
    {
      school: "Prince Georges County Community College",
      degreeType: "Associates of Arts - AA",
      fieldOfStudy: "Game Design and Development",
      startDate: new Date(2014),
      endDate: new Date(2013),
      grade: "3.49"
    }
  ]
}
