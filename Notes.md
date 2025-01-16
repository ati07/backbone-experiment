#### Backbone Js ####

# Self (window): 
 - It's global object in browser and web workers(It help to javascript code in background)

# global:
 - global object in servers (node js)

# AMD (Asynchronous Module Definition) Environment:
 - loading the module Asynchronously
 - It uses define keyword (javscript module format) to load the library
 - define : It is used to define the module with their dependency

# CommonJs:
 - It is a module system in node js. Which is use to import the library with using require keyword



\\\\ Note Start

Finally the concept is that how to set the backbone js, underscore, jQuery in root variable as global object in different different envioronment(AMD, Node /Common js, browser)

  Note End \\\\



### INITIAL Setup ###

# Emulate HTTP:
 - It's means simulating the HTTP request.
 - Older server (legacy HTTP servers) which only support GET and POST request
 - If it's set to true then it will accept the PUT, DELETE, PATCH request by legacy HTTP servers
 - It's use _method to tell the request 'type' and 'X-Http-Method-Override' in header to overide the method


# Events #


### ON Event:
 - Backbone js uses ON event to bind the callback with Backbone Events which takes event name, callback and context as arguments.
   Callback will invoke whenever corresponding event will trigger. Event can be in form of string, object and space-separated event names.


#### listeners:
 - It is function which is react when a event is trigger

#### Listenees (Event Emmiter):
 - It is responsible for event triggering


#### _.extend method:
 - underscore extend method use to shallow copy of soruce object to destination object

#### interop :
 - Backbone js make it false initially and uses counter in listening to handle multiple fired same events. If interop is true it means that it
   can be cause the issue with another library if library has same event and iteract with Backbone js.


### listenTo Event:
 - This event tells to backbone js object to listen events of another objects and also track their events. ListenTo event has inversion of control feature, means it's not depend upon the event emmiter like ON event, it invokes the event itself.

### off event:
 Off Event removes specified event callback functions from object. It also has 3 arguement event name, callback, context. It has different senorio.
  - If event name and its callback is pass in aurgument then it will remove that callback only.
  - If only specific event name is pass thenit will remove all relevent callback of this event
  - If null is passed with context then it will remove all events respective context from the object.
  - if no argument is pass then it will remove all events from object

 ---> So basically we can use it to remove the event callback with different different scenorio.

### once event:
 -  Once method trigger only one time after that it remove the callback automatically. It's use once method of underscore js to register the event


### StopListening:

 - Basically this event tell object listener that don't listen other event object. It removes specified event from object. And of there is no aurgument then it will remove all registered callback from object.



### ListenToOnce:
 - this event is bind up with once and stopListening event in object. It will not track event of another object once it's fired.



# Model #
 - Model is the basic data structure of database. Model also has some method to get control over the data manuplition.


### Id:
 - Id is unique identifire of model when model save to server. It's not created in locally.

### cid:
 - cid is unique identifire it's created when model is created on client side (locally) not on server. It is also a temporary id.


### cidPrefix:
 - cidPrefix helps to create cid with unique key to prevent the conflict between cid and id values.


### idAttribute:
 - idAttribute a property of backbone where we can define custom id to tell backbone to identify the model on basis of idAttribute if it's defined in Model. Otherwise backbone will identify the model on basis of id.   

### attributes:
 - Attibutes represents the state of model in form of JSON object.


### changed:
 - It is a property which has all changed attributes since last changes has done.


### defaults:
 - By defaults hash( plain javscript object) we can set defaults data in Model. While creating instance of the Model defaults set attributs  

### preinitialize:
 - This method will call when you will create the model is created just before the initialization. We can add some logic in this methid before the inserting the data in Model.

### initialize:
 -  Initialize method is basically inserting data in Model if Model get created with some data.


### get Method:
 - By get method we can get the specific key's value from Model by passing the key in get argument.

### set Method:
 - set key-value in Model using this method. When we set any data in Model a change event will trigger.

### escape Method:
 - Escape Method return the HTML-escape (convert to safe HTML entity equivalent) value without effecting HTML in way that HTML show in correct way.

### has Method:
 - This method check that provided key is exist in model or not. It's return true or false.

### unset Method:
 - If we want to remove single value or multiple value from Model then we can use to remove those data form Model. And after removing the data it fire the change event.

### clear Method:
 - If we want to make empty the model then we can use clear method to delet all data from Model After removing the data it fire change event. If we don't want to trigger that event then we can pass silent in option.

### toJSON:
 - return a shallow copy of attributes from model in JSON object.


### Sync:
 - Sync method is make communication between model and server and keep syncing with data changes with model and server database. It uses RESTful Api HTTP request to communicate.

### fetch:
 - Whenever we want to make a request to get data from sever we use fetch method. It uses sync method internally to make a reuqest.

### save:
 - Save method used to save the data in server database. Save method check if model is new then it hits create method automatically. and if find existing model then hits update method. If we want to change update method to patch by then we need to set patch true in argument.

### destroy:
 - Destroy method delete the model from sever using DELETE HTTP request by sync.

### Validate:
 - By default save method validate the model but if we want to make own validate method we can override with our custom logic.


### validationError:
 - Whenever validation is failed then return validation error.

### url:
 - This method return a relative url from urlRoot or url of collection and model Id.


### urlRoot:
 -  urlRoot is used if there is not collection of models.


### isNew:
 - This method check id in model if there is id present then it's not new for server. If there is not id found in model then it's new. 


### hasChanged:
 - This method check the attributes in changed then it's return true otherwise false.

### changedAttributes:
 - It returns all changed hash attributes if attributes not changed then it return false.


### previous:
 - It returns previous value of attributes which has last changed in model.

### previousAttributes:
 - It return a copy of last changed previous attributes from model. 

### isValid:
 - this method will invoke whenever model attributes set or save and validate the model data




# Collection #
 -  Collection is ordered set of models data. We can bind the change event to notified when model has updated or changed. Any event is trigger in model it will also trigger in collection.


### model:
 - This is a property of collection where we can set a model. By default it has Model of Backbone.


### modelId:
 - modelId method is tell collection to identify the model according to the modelID. This method help collection to read the model if models have same Id.

### Models:
 - It is represent the array of Model.

 

### preinitialize:
 - whenever collection is first created preinitialize method will call.


### add Method:
 - add models to collection one by one with add event and after that trigger update event.If collection is added with existingg model then it will be ignored but if set merge true then it will merge.

### remove Method
 - This method takes a model aurgument then remove from collection.


### reset:
 - By using this method we can change entire collection with new models, it's different from add and remove method. If we didn't pass any argument then it will be remove entire collection


### set Method (add, remove, change, and update):
 - It's update the exiting model( find the ID and update corresponding model) and also add the new model
 - remove all exiting model which are not setting in the model
 - Trigger add, remove, change, and update Events

### get method:
 - By using get method we can obtain model detail with model id.

### at method:
 - Simplest method to get the model data if your data is sorted.


### push method:
 - By push method we can append data in collection at the end of collection

### pop method:
 - Pop method remove and return the last model from collection.


### shift:
 - Shift method always remove and return first model from collection.

### unshift method:
 - It's add model at the begining in collection.

### slice method:
 - By the slice method we can always return a shallow copy of models, we can set the indexes begining and last.

### Comparator Method:
 - If you want to sort the model with some attributes you can use comparator method in collection 

### Sort Method:
 - If we need to sort manually then we can use sort method

### pluk Method:
 - Pluk method use to retrive the specific attribute's value from every models.

### Where Method:
 - where method is find out those all models which we have pass thier attributes in where method.

### findWhere:
 - findwhere is similar to where method but it return only single model.


### url:
 - set url in collection to reference its location on the server

### fetch Method:
 - Fetch the data from server then use parse method to parse the response data in json

### create Method:
 - Create method basically create the a model in collection as well as on server if server is sync.

### mixin method:
 - Mixing a way to share the re-usable method through out model or collections using prototype of model and collection





# CollectionIterator #

  - Collection Iterator is a object as we can say it is a custom iterator of Backbone js.
  - It's iterating over the collections just like for loop in javscript


### $$iterator:
 - Symbolic representation of iterator, it's ensure that iterator is iterable itself or not.


### next method:
 - this method use to iterate over the iterator






# View #
 - it is simplity a javascript object which holds the junk of UI.
 - It can be single item, entire list



### extend:
 - It is used to create custom methods, subclasess, property of View


### el:
 - All view has own DOM element. it's pointing to container element

### $el:
 - get all element of selector in array form


### template:
 - to insert the data dynamically we can use template formating 


### render:
 -  render the HTML part

### remove:
 - remove element from DOM

### events:
 - it's bind all DOM event in View like change, click etc.


### delegateEvents:
 - If we need to manualy bind the events then we can use this method in view But it's automatically bind the events hash whenever View initilize.

### undelegateEvents:
 - It's unbind all event which is bind with View.

# Router #
 - Router means a object that maps URL of App.

### routes:
 - urls pattern of App

### navigate:
 - whenever we want to navigate to new URL

### execute:
 - whenever we want to validate or do some logic before moving to next url, we can use this method




# History #
 - History saves the URL changes as well track the url movment and ensure that url proccessing is going well managed.

### window.location:
 - window location provide information of the current url.

### window.history:
 - This provides the information of browser session history

### interval:
 - interval are used in Backbone to chech the hash changes in URl becuase older browser didn't support onhashchange.

### atRoot:
 - Method checks the browser current url with application root path. It return true aor false.


### matchRoot:
 - This method is matching Root with path of browser url.


### decodeFragment:
 - 

 discussion : 
 - PushState
 - void 0 : void is a javascript operator, which assign undefined in variable. We use it becuase in ES5 some older library uses undefined as a variable so it get conflict with variable so to prevent this. We use void 0 instead of undefined.
 - 




# HELPER #

# Extend method :- expand the object with subclass

# 

















