import fs from 'fs'

// TODO: hace falta la implementacion cruda de la base de datos
// TODO: organizar cada dataObject por sus rutas o comandos y no su alias
// TODO: usar set para almacenar dataObjects unicos

const root = process.cwd()

class JsonFile {
  protected static verifyExistence(fileName: string): boolean {
    if (!fileName.endsWith('.json')) {
      throw new Error('file name must end with .json')
    }
    return fs.existsSync(fileName)
  }

  public static create(fileName: string) {
    console.log(fileName)
    return fs.writeFileSync(fileName, '{}')
  }
}

// TODO: no usar singleton, por si se desea crear multiples instancias
// crear dos opciones una singleton y otra no
export class LocalDbOperations extends JsonFile {
  protected fileName
  // verifica si el documento con ese nombre existe
  // si no existe lo crea
  // se utiliza esa instancia como base para las demas funcionalidades
  constructor(fileName: string) {
    super()
    this.fileName = fileName
  }

  private verifyFileNameExistance() {
    return !!this.fileName
  }

  public getAll() {
    if (!this.verifyFileNameExistance()) {
      throw new Error('fileName is not defined')
    }
    const db = require(`${root}/${this.fileName}`)
    return db
  }

  /**
   * Method to write a data object into the local json DB
   * @param data - data object
   */
  public write<T>(dataObject?: T) {
    if (!this.verifyFileNameExistance()) {
      throw new Error('fileName is not defined')
    }

    // before continue writting data in the file, we first have to
    // verify file existence
    if (!JsonFile.verifyExistence(this.fileName)) {
      JsonFile.create(this.fileName)
    }

    if (!dataObject) {
      throw new Error('dataObject is not defined')
    }

    if (typeof dataObject !== 'object') {
      throw new Error('dataObject should be an object')
    }

    if (Object.keys(dataObject as {}).length === 0) {
      throw new Error('dataObject could not be empty')
    }

    try {
      fs.writeFileSync(root + '/' + this.fileName, JSON.stringify(dataObject))
    } catch (error) {
      throw new Error(
        'Something went wrong, while trying to write data in the file'
      )
    }
  }
}
