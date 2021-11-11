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

> 1. TO GET THE PROPERTIES OF ELEMENT OBJECT
#### endpoint: **/api/elements/properties**
#### output: ```["id","symbol","name","atomic_mass","state","type","year_of_discovery"]```
#### description: returns the list of properties of element.

> 2. TO GET ALL ELEMENTS
#### endpoint: **/api/elements
#### output: ```[{"id":1,"symbol":"H","name":"hydrogen","atomic_mass":1.008,"state":"gas","type":"non-metal","year_of_discovery":1766},{"id":2,"symbol":"He","name":"helium","atomic_mass":4.0026,"state":"gas","type":"noble gas","year_of_discovery":1868} .... ]```
#### description: returns all the elements.

> 3. TO GET A SINGLE ELEMENT BY ID
#### endpoint: **/api/elements/id/:id**
#### example: **/api/elements/id/1**
#### output: ```{"id":1,"symbol":"H","name":"hydrogen","atomic_mass":1.008,"state":"gas","type":"non-metal","year_of_discovery":1766}```
#### description: returns the requested element.

> 4. TO GET A SINGLE ELEMENTS BY SYMBOL
#### endpoint: **/api/elements/symbol/:symbol**
#### example: **/api/elements/symbol/H**
#### output: ```{"id":1,"symbol":"H","name":"hydrogen","atomic_mass":1.008,"state":"gas","type":"non-metal","year_of_discovery":1766}```
#### description: returns the requested element.

> 5. TO GET THE NAME OF ALL ELEMENTS
#### endpoint: **/api/elements/names**
#### output: ```["hydrogen","helium","lithium","beryllium","boron", ...]```
#### description: returns the list of name of all elements.

> 6. TO GET THE ATOMIC-MASS OF ALL ELEMENTS
#### endpoint: **/api/elements/atomic-masses**
#### output: ```[1.008,4.0026,7,9.012183,10.81 ...]```
#### description: returns the list of atomic mass of all elements.

> 7. TO GET THE ALL ELEMENTS WITH ONLY ASKED PROPERTIES IN GIVEN ORDER
#### endpoint: **/api/elements/custom-properties/:properties**
#### example1: **/api/elements/custom-properties/id,symbol,atomic_mass**
#### output1: ```[{"id":1,"symbol":"H","atomic_mass":1.008},{"id":2,"symbol":"He","atomic_mass":4.0026},{"id":3,"symbol":"Li","atomic_mass":7},{"id":4,"symbol":"Be","atomic_mass":9.012183},{"id":5,"symbol":"B","atomic_mass":10.81}...]```
#### description1: returns the list of all elements in the order asked by user with only asked properties.
#### example2: **/api/elements/custom-properties/symbol,name,atomic_mas**
#### output2: ```[{"symbol":"H","name":"hydrogen"},{"symbol":"He","name":"helium"},{"symbol":"Li","name":"lithium"},{"symbol":"Be","name":"beryllium"},{"symbol":"B","name":"boron"} ...]```
#### description2: atomic_mass has been skipped since property name was incorrect.
