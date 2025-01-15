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
 - The basic data structure which is store in databse


### preinitialize:
 - it will call method when you will create the model or collection is created

### initialize:
 -  we can pass the value in model when model is initialize


### get Method:
 - get value of required key

### set Method:
 - set key value in Model using this method

### escape Method:
 - return HTML-escape value without effecting HTML in way that HTML show in correct way

### has Method:
 - This method check that provided key is exist in model or not.

### unset Method:
 - it will remove key-value from model

### clear Method:
 - It will clear all alltribute from model

### toJSON:
 - return a shallow copy of attributes from model

### isValid:
 - this method will invoke whenever model attributes set or save and validate the model data








# Collection #
 -  Collection is set of models data.


### preinitialize:
 - whenever collection is first created preinitialize method will call.


### add Method:
 - add models to collection

### remove Method
 - remove model from collection with there id


### reset:
 - By using this method we can change entire collection with new models, it's different from add and remove method.


### set Method (add, remove, change, and update):
 - It's update the exiting model( find the ID and update corresponding model) and also add the new model
 - remove all exiting model which are not setting in the model
 - Trigger add, remove, change, and update Events

### get method:
 - get model detail with model id.

### at method:
 - simplest method to get the model data if your data is sorted.


### Comparator Method:
 - if you want to sort the model with some attributes you can use comparator method in collection 

### Sort Method:

 - If we need to sort manually then we can use sort method

### pluk Method:

 - Pluk method use to retrive the specific attributs from every models

### Where Method:
 - where method is find out those all models which we have pass thier attributes in where method.

### findWhere:
 - findwhere is similar to where method but it return only single model.


### url:

 - set url in collection to reference its location on the server

### fetch Method:
 - Fetch the data from server then use parse method to parse the response data in json

### create Method:
 - Create method basically create the a model in collection 

### mixin method:
 - Mixing a way to share the re-usable method through out model or collections using prototype of model and collection





# CollectionIterator #

  - Collection Iterator is a object as we can say it is a custom itrator of Backbone js.
  - It's itrating over the collections just like for loop in javscript


### $$iterator:
 - Symbolic representation of iterator, it's ensure that itarator is itarable itself or not.


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
 - If we need to manualy bind the events we use this method in view But it's autmatically bind the events hash whenever View initilize.

### undelegateEvents:
 - It's unbine all event which is bind with View.





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


 discussion : 
 - PushState
 - void 0 : void is a javascript operator, which assign undefined in variable. We use it becuase in ES5 some older library uses undefined as a variable so it get conflict with variable so to prevent this. We use void 0 instead of undefined.
 - 




# HELPER #

# Extend method :- expand the object with subclass

# 

















