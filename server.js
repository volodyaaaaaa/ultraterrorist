const http = require ('http')
let requestCount = 0
const server = http.createServer((request, response) => {
   requestCount++
   switch(request.url) {
      case '/banword':
         response.write ('Pidoras , negr , evrey etc')
         break;
      case '/banlist':
         response.write('Mazeloff , jesusAVGN , eeoneguy')
         break;
      default:
         response.write ('404 Not Found , Sorry about that bro(')

   response.write('Vova Junior first back inc' + requestCount)   
   }
   response.end()
})

server.listen(3003)