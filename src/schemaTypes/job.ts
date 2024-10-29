// schemas/job.ts

import { BiBriefcase } from "react-icons/bi";

const job = {
  name: "job",
  title: "Job",
  type: "document",
  icon: BiBriefcase,
  fields: [
    {
      name: "name",
      title: "Company Name",
      type: "string",
      description: "What is the name of the company?",
    },
    {
      name: "jobTitle",
      title: "Job Title",
      type: "string",
      description: "Enter the job title. E.g: Software Developer",
    },
    {
      name: "logo",
      title: "Company Logo",
      type: "image",
    },
    {
      name: "url",
      title: "Company Website",
      type: "url",
    },
    {
      name: "company_description",
      title: "Company Description",
      type: "text",
      rows: 3,
      description: "Write a brief description about the company",
    },
    {
      name: "description",
      title: "Job Description",
      type: "text",
      rows: 3,
      description: "Write a brief description about this role",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
    },
    {
      name: "detail_description",
      title: "Detail Description",
      type: "blockContent",
      description: "Write a detailed description about this role",
    },
  ],
};

export default job;
