import { exec, execSync } from "child_process";

export class UserCommandHandler {
  static saveCurrentRoute() {
    exec("pwd", (error, stdout, stderr) => {
      if (error) {
        return console.log(`error: ${error.message}`);
      }

      if (stderr) {
        return console.log(`stderr: ${stderr}`);
      }
      //TODO: guardar rutas atraves de un alias
      //TODO: listar los aliases disponibles
      fs.writeFileSync("./registry.json", stdout);
    });
  }
}
