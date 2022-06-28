import prompts from "prompts";
import { InnerFunctionality } from "./components/InnerFunctionality";

async function main() {
  console.log("Welcome to Automata Hub > v0.0.1");
  console.log(InnerFunctionality.getCurrentOs());
  const responseGetCurrentPath = await prompts({
    type: "select",
    name: "value",
    message: "What to do?",
    choices: [
      {
        title: "save current path",
        value: () => InnerFunctionality.getCurrentPath(),
      },
    ],
    initial: 0,
  });

  console.log(`current route is: ${responseGetCurrentPath.value()}`);

  const responseGetCurrentPathAlias = await prompts({
    type: "text",
    name: "value",
    message: "How would you like to call this route?",
    validate: (value) =>
      value.length > 3
        ? `se ha guardado con exito esta ruta!: ${responseGetCurrentPath.value()} con el alias: ${value}`
        : "alias must be at least 3 characters long",
  });

  console.log(responseGetCurrentPathAlias);

  const a = "loap";
}

main();
