# USER ROUTES

# Create user = - POST - = /user

      {
          "name":"Joao Pedro",
          "email":"contato@worldsoft.com",
          "state":"Sergipe",
          "city":"Aracaju",
          "password":"123456",
          "confirmPassword":"123456"
      }

# SignIn = - POST - = /user/sessions

      {
          "email":"contato@worldsoft",
          "password":"123456"
      }

# Update user = - PUT - = /user

      {
          "name":"Joao Pedro",
          "email":"contato@worldsoft.com",
          "state":"Sergipe",
          "city":"Aracaju",
          "password":"123456",
          "confirmPassword":"123456"
      }

    - pode ser alterado qualquer informação individual ou todas junto, sendo que tem que está com o token para conseguir fazer a alteração do usuario

# BUS ROUTES

# Create Bus = - POST - = /bus

      {
          "placa": "GODK8741", /_string_/
          "ano": 2010, /_number_/
          "modelo": "GOL", /_string_/
          "acentos": 32, /_number_/
      }

# Update Bus = - PUT - = /bus/1

- depois do bus/{aqui vai o id do onibus

  {
  "placa": "GODK8741", /_string_/
  "ano": 2010, /_number_/
  "modelo": "GOL", /_string_/
  "acentos": 32, /_number_/
  }

# List All Bus = - GET - = /bus

- lista todos os onibus cadastrados

# List Bus = - GET - = /bus/{bus_id}

- list apenas um onibus

# List Bus = - DELETE - = /bus/{bus_id}

- deleta um onibus cadastrado

# PASSAJEIRO ROUTES

# Create passajeiro = - POST - = /passajeiros

    {
        "name":"Marcos Menezes",
        "age":25,
        "cpf":"XXXXXXXXX25"
    }

# Update passajeiro = - PUT - = /passajeiros/{passajeiro_id}

    {
        "name":"Marcos Menezes",
        "age":25,
    }

    - cpf não pode ser alterado

# Delete passajeiro = - DELETE - = /passajeiros/{passajeiro_id}

- apagando passajeiro

# List all passajeiro = - GET - = /passajeiros

- mostra todos o passajeiros cadastrados no banco

# IMAGEM ROUTES

# Save avatar on the aws = - POST - = /avatar/file

name = file
type : multimedia

# VIAGEM ROUTER

# Create Viagem = - POST - = /viagem?busId=1&passajeiroId=5

- query params
