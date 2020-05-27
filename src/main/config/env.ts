export default {
  // Quando usar o Docker. Devemos apontar para o "mongo" DNS, e não para localhost.
  // pois o Docker gera o endereço com o mesmo nome do "services" do Docker-compose.yml
  // mongoUrl: process.env.MONGO_URL || 'mongodb://mongo:27017/clean-node-api',

  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/clean-node-api',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'tj670==5T'
}
