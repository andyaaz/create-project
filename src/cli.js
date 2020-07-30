/* eslint-disable import/prefer-default-export */
import inquirer from "inquirer";

export function cli(args) {
  console.log({ args });
  const questions = [
    {
      type: "list",
      name: "projectType",
      message: "What project you want?",
      choices: ["cli", "react", "gatsby", "express"],
    },
  ];
  inquirer.prompt(questions).then((answers) => {
    console.log({ answers });
  });
}
