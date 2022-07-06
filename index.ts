import prompts from 'prompts'
import { writeCommandInJson } from './src/utils/writeCommandInJson'
import { InnerFunctionality } from './src/components/InnerFunctionality'
import { LocalDbOperations } from './src/libs/localDb/LocalDb'
import { IAliasAndPath } from './types'
import fs from 'fs'

async function main() {
  //console.log(fs.existsSync(process.cwd() + '/typesr.d.ts'))
  const db = new LocalDbOperations('a.json')
  console.log(db)
  const a = 'bh'
  console.log(db.write({ a }))
  db.getAll()
  console.log('Welcome to Automata Hub > v0.0.1')

  const responseGetCurrentPath = await prompts({
    type: 'select',
    name: 'value',
    message: 'What to do?',
    choices: [
      {
        title: 'save current path',
        value: () => InnerFunctionality.getCurrentPath(),
      },
    ],
    initial: 0,
  })

  console.log(`current route is: ${responseGetCurrentPath.value()}`)

  let responseGetCurrentPathAlias = await prompts({
    type: 'text',
    name: 'value',
    message: 'How would you like to call this route?',
  })

  while (responseGetCurrentPathAlias.value.length <= 3) {
    console.log('the alias must be at least 4 characters long')
    responseGetCurrentPathAlias = await prompts({
      type: 'text',
      name: 'value',
      message: 'How would you like to call this route?',
    })
  }
}

main()
