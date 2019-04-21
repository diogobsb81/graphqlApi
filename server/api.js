const { RESTDataSource } = require('apollo-datasource-rest');
const unirest = require('unirest');

class NbaAPI extends RESTDataSource {
   
    async getTeams() {
        try {
           return unirest.get("https://free-nba.p.rapidapi.com/teams?page=0")
            .header("X-RapidAPI-Host", "free-nba.p.rapidapi.com")
            .header("X-RapidAPI-Key", "5cae0236camshc429df5839d0742p114c69jsn56ad1cf58a96")
            .then(function (result) {
              return result.body.data;
            });       
        } catch (error) {
            console.log(error)
        }
    }
  }
module.exports = NbaAPI
