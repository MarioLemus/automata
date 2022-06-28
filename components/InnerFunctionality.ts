import { exec, execSync } from "child_process";
import { platform } from "os";

export class InnerFunctionality {
  static getCurrentOs() {
    return platform();
  }

  static getCurrentPath() {
    try {
      let a = execSync("echo %cd%");
      return a.toString();
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  static cleanConsole() {
    return console.clear();
  }
}
