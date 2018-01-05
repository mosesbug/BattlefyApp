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


function submitName() {
  var name = document.getElementById('js-name').value;
  var apiKey = document.getElementById('js-api-key').value;
  var region = document.getElementById('js-region').value;

  if (name == "" || apiKey == "") {
    window.alert("Name and/or api key field is empty!")
    return;
  }


}
