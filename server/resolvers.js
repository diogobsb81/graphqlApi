
const resolvers = {
	Query: {
		getTeams: async (_source, _args, { dataSources }) => {
			let result = await dataSources.nbaAPI.getTeams();
			return result;
		}	
	}
};

module.exports = resolvers;