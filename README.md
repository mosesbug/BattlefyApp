# BattlefyApp
Summoner Match History Code Challenge for Battlefy Application
 
In order to run my application, make sure you have Node.js installed. Then 
install the dependecies live-server (type 'npm install -g live-server' in your command line)
and request (type 'npm install request' in your command line). Afterwards, pull or
clone this repository onto your computer and then navigate to that directory and type
'live-server' in the command line to run my app.

CURRENT FUNCTIONALITY:
  - Refer to BUGS as to why my application is not working. I have only implemented
  a single API call to retrieve a user's accountId from their summoner name. 

BUGS:
  - Currently I am having an issue with running this application server-side. I
    attempted at using the the Node.js request module to resolve this issue, but
    in order to do that I need to use require() function which is not defined in browsers
    (I am using live-server to test my application in the browser and therefor cannot
    properly use require). I will likely use some additional environment to run my
    application server-side instead of using Node.js's live-server package, because Riot
    requires anyone using an API key to run their application server-side.
