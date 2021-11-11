app url: https://periodic-table-app.herokuapp.com/

## Follow below steps to deploy the app in Heroku...

Download and install the Heroku CLI.

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.

$ heroku login
Clone the repository
Use Git to clone periodic-table-app's source code to your local machine.

```
$ heroku git:clone -a periodic-table-app
$ cd periodic-table-app
```

Deploy your changes
Make some changes to the code you just cloned and deploy them to Heroku using Git.

```
$ git add .
$ git commit -am "make it better"
$ git push heroku master
```

## API Endpoints
app url: https://periodic-table-app.herokuapp.com

#### 1. TO GET THE PROPERTIES OF ELEMENT OBJECT
#### endpoint: ```/api/elements/properties```
#### output: ```["id","symbol","name","atomic_mass","state","type","year_of_discovery"]```
#### description: returns the list of properties of element.

#### 2. TO GET ALL ELEMENTS
#### endpoint: ```/api/all-elements```
#### output: ```[{"id":1,"symbol":"H","name":"hydrogen","atomic_mass":1.008,"state":"gas","type":"non-metal","year_of_discovery":1766},{"id":2,"symbol":"He","name":"helium","atomic_mass":4.0026,"state":"gas","type":"noble gas","year_of_discovery":1868} .... ]```
#### description: returns all the elements.

#### 3. TO GET A SINGLE ELEMENT BY ID
#### endpoint: ```/api/elements/id/:id```
#### example: ```/api/elements/id/1```
#### output: ```{"id":1,"symbol":"H","name":"hydrogen","atomic_mass":1.008,"state":"gas","type":"non-metal","year_of_discovery":1766}```
#### description: returns the requested element.

#### 3. TO GET A SINGLE ELEMENTS BY SYMBOL
#### endpoint: ```/api/elements/symbol/:symbol```
#### example: ```/api/elements/symbol/H```
#### output: ```{"id":1,"symbol":"H","name":"hydrogen","atomic_mass":1.008,"state":"gas","type":"non-metal","year_of_discovery":1766}```
#### description: returns the requested element.
