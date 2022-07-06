import fs from 'fs'
import { IAliasAndPath } from '../../types'

export function writeCommandInJson(aliasAndPathPair: IAliasAndPath) {
  return fs.writeFileSync(
    './registry.json',
    JSON.stringify(aliasAndPathPair, null, 2)
  )
}
