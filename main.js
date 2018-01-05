/*
Data I need for each game:
  - outcome (W or L) --> summoner name --API call--> accountId --API call--> matchId --> get
    MatchDto json object --> matchDto.participantIdentities[search the list for the correct
    accountId].participantId --> matchDto.participants[participantId].stats.win
  - game length --> summoner name --API call--> accountId --API call--> matchId -->
    matchDto.gameDuration --> use parseInt(d,10) for the purpose of a floor function
  - summoner name --> given
  - summoner spells/runes --> summoner name --API call--> accountId --API call--> matchId --> get
    MatchDto json object --> matchDto.participantIdentities[search the list for the correct
    accountId].participantId --> matchDto.participants[participantId].spell1Id and spell2Id -->
    then lookup this int in the summoner spell static data
  - champion name --> summoner name --API call--> accountId --API call--> matchId --> get
    MatchDto json object --> matchDto.participantIdentities[search the list for the correct
    accountId].participantId --> matchDto.participants[participantId].championId --> then
    look this int up in champion static data
  - kda --> summoner name --API call--> accountId --API call--> matchId --> get
    MatchDto json object --> matchDto.participantIdentities[search the list for the correct
    accountId].participantId --> matchDto.participants[participantId].stats.(kills+assists/deaths)
  - items --> summoner name --API call--> accountId --API call--> matchId --> get
    MatchDto json object --> matchDto.participantIdentities[search the list for the correct
    accountId].participantId --> matchDto.participants[participantId].stats.item0 through
    item6 --> then look up each item in the item static data (item6 is ward)
  - level --> summoner name --API call--> accountId --API call--> matchId --> get
    MatchDto json object --> matchDto.participantIdentities[search the list for the correct
    accountId].participantId --> matchDto.participants[participantId].stats.champLevel
  - cs --> summoner name --API call--> accountId --API call--> matchId --> get
    MatchDto json object --> matchDto.participantIdentities[search the list for the correct
    accountId].participantId --> matchDto.participants[participantId].stats.totalMinionsKilled
  - cs per min --> gameDuration returns the seconds of a game --> cs/(gameDuration/60)
*/

// A new request module (browser's dont have require() but Node.js, need to get around this problem) FIXME
const request = require('request');

// The api key is globally accessible in this file
var RIOT_API_KEY = "";

// This is will be an array containing the summoner's last 20 matches
var matches = Array(20);

returnMatches = function() {
  return matches;
}

// Executed when the submit button is clickec
function submitName() {
  var name = document.getElementById('js-name').value;
  RIOT_API_KEY = document.getElementById('js-api-key').value;
  var region = document.getElementById('js-region').value;

  if (name == "" || RIOT_API_KEY == "") {
    window.alert("Name and/or api key field is empty!")
    return;
  }

  var baseUrl = 'https://' + region + '.api.riotgames.com/lol/';

  // This is json object returned by /lol/summoner/v3/summoners/by-name/{summonerName}
  var summonerJson = "";
  var success = false;

  request(baseUrl + 'summoner/v3/summoners/by-name/' + name + '?api_key=' + RIOT_API_KEY, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      // Clean api call
      summonerJson = body;
      success = true;
    } else {
      summonerJson = 'Something went wrong!';
    }
  });



}
