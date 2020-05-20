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

  mapMongoToObject: (collection: any): any => {
    // MongoDB retorna um id com _ na frente: _id. Mas nós queremos uma propriedade com o nome de id
    const { _id, ...collectionWithouId } = collection
    return Object.assign({}, collectionWithouId, { id: _id })
  }
}
