const { gql } = require('apollo-server');
const schema = gql`
type Query {
    getTeams: [Teams]
 
}

type Teams{
id: Int
abbreviation: String
city:String
conference:String
division:String
full_name:String
name:String
}

`;
module.exports = schema; 