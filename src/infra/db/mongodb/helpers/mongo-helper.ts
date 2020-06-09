import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,
  uri: null as string,

  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(this.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null
  },

  async getCollection (name: string): Promise<Collection> {
    if (!this.client?.isConnected) {
      await this.connect(this.uri)
    }
    return this.client.db().collection(name)
  },

  mapMongoToObject: (data: any): any => {
    // MongoDB retorna um id com _ na frente: _id. Mas nós queremos uma propriedade com o nome de id
    const { _id, ...collectionWithouId } = data
    return Object.assign({}, collectionWithouId, { id: _id })
  },

  mapMongoCollectionToObject: (collection: any[]): any[] => {
    // MongoDB retorna um id com _ na frente: _id. Mas nós queremos uma propriedade com o nome de id
    // Usando o método mapMongoToObject acima, para ajustar cada item da collection

    return collection.map(item => MongoHelper.mapMongoToObject(item))
  }
}
