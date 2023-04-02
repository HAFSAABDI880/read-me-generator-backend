const inquirer = require("inquirer");
const util = require("./util");
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Include a brief description of your project",
  },
  {
    type: "input",
    name: "contributing",
    message: "How can others contribute to your project?",
  },
  {
    type: "confirm",
    name: "hasInstallation",
    message: "Does your project require installation steps",
    default: "false",
  },
  {
    type: "confirm",
    name: "hasUsage",
    message: "Do you want to include usage examples?",
    default: "false",
  },
  {
    type: "confirm",
    name: "hasTest",
    message: "Does your application require test?",
    default: "false",
  },
  {
    type: "list",
    name: "hasLicense",
    message: "select your license",
    choices: ["MIT", "Apache", "Academic", "GNU", "ISC", "Mozilla", "Open"],
  },
];
const installationQuestions = [
  {
    type: "input",
    name: "installation",
    message: "What are the steps to install your project?",
  },
];
const usageQuestions = [
  {
    type: "input",
    name: "usage",
    message: "Include examples of usage",
  },
];
const testQuestions = [
  {
    type: "input",
    name: "test",
    message: "Which tests do you need to run for your project?",
  },
];
