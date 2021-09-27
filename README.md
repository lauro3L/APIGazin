# APIGazin

Realizer Testes API

Terminal
  -- yarn test

iniciar API pelo Docker
  

Terminal
  -- docker-compose up
  
  esse Container ira subir o serviço API e o Banco Postgres. Podendo ser realizado Teste na API.
  
  
  
API

   LOGIN
   
POST   hpttp://localhost:3000/login
BOBY
  {
	"nome": "xxxx",
	"email": "xxx@xxx.xxx",
	"password": "xxx"
   }

 Session Token -- Retorna Token Acesso
 
 POST   hpttp://localhost:3000/sessions
 BODY
 {
	"email": "xxx@xxx.xxx",
	"password": "xxx"
 }
 
 
 Developers
 
 POST   hpttp://localhost:3000/developers   - DEVERA SER INFORMADO TOKEN
 BODY
 {
	"nome": "XXXXX",
	"idade": 99,
	"hobby": "XXXXXX",
	"sexo": "M",
	"datanascimento": "YYYY-MM-DD"

 }
 
 PUT   hpttp://localhost:3000/developers/ID   - DEVERA SER INFORMADO TOKEN
 BODY
{
	"_id": 99,
  "nome": "xxxxxx",
	"sexo": "M",
	"idade": 99,
	"hobby": "xxxxxx",
	"datanascimento": "YYYY-MM-DD"
	
}

DELETE   hpttp://localhost:3000/developers/ID   - DEVERA SER INFORMADO TOKEN


 GET   hpttp://localhost:3000/developers   - DEVERA SER INFORMADO TOKEN
 
 GET   hpttp://localhost:3000/developers/ID   - DEVERA SER INFORMADO TOKEN
 
 GET   hpttp://localhost:3000/developers?nome=XXX     - DEVERA SER INFORMADO TOKEN
 
 GET   hpttp://localhost:3000/developers?nome=XXX&_count=1&_limit=1 (retorna dados paginados)    - DEVERA SER INFORMADO TOKEN
 
 
 
 
 

 
