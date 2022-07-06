import { exec, execSync } from 'child_process'
import { platform } from 'os'

export class InnerFunctionality {
  static getCurrentOs() {
    return platform()
  }

  static getCurrentPath() {
    const getPathDependingOnOsCommand =
      this.getCurrentOs() === 'win32' ? 'echo %cd%' : 'pwd'

    try {
      let a = execSync(getPathDependingOnOsCommand)
      return a.toString()
    } catch (e: any) {
      throw new Error(e.message)
    }
  }

  static cleanConsole() {
    return console.clear()
  }
}
