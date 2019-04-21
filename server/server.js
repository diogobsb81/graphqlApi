const NbaAPI = require('./api');
const { ApolloServer } = require('apollo-server'),
schema = require('./schema'),
resolvers = require('./resolvers');


const server = new ApolloServer({ 
	typeDefs: 
	schema, 
	resolvers,
	dataSources: () => {
		return {
			nbaAPI: new NbaAPI()
		}
	   }
 });



server.listen(8000).then(() => {
	console.log(`Servidor funcionando!`);
});
