import fs from "fs";

export function writeCommandInJson(aliasAndPathPair: IAliasAndPath) {
  return fs.writeFileSync("./registry.json", `${{ ...aliasAndPathPair }}`);
}
