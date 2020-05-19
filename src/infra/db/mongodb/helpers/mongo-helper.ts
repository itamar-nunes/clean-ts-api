import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().Collection(name)
  },

  mapMongoToObject: (collection: any): any => {
    // MongoDB retorna um id com _ na frente: _id. Mas nós queremos uma propriedade com o nome de id
    const { _id, ...collectionWithouId } = collection
    return Object.assign({}, collectionWithouId, { id: _id })
  }
}
