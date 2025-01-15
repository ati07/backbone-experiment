#### Backbone Js ####

# Self (window): 
 - It's global object in browser and web workers(It help to javascript code in background)

# global:
 - global object in servers (node js)

# AMD (Asynchronous Module Definition) Environment:
 - loding the module Asynchronous 
 - It uses define (javscript module format) to load the library
 - # define : It is used to define the module with thier dependency

# CommonJs:
 - It is module system in node js. Which is use to import the library with using require keyword



\\\\ Note Start

Finally the concept is that how to set the backbone js, underscore, jQuery in root variable as global object in different different envioronment(AMD, Node /Common js, browser)

  Note End \\\\



### INITIAL Setup ###

# Emulate HTTP:
 - simulate HTTP request
 - # legacy HTTP servers : Older server which only support GET and POST request
 - make It's on to accept the PUT, DELETE, PATCH request by legacy HTTP servers
 - use _method to tell the request type and X-Http-Method-Override in header to overide the method


################################################################### Events #####################################################


# ON Event:
 - Backbone js uses ON event to bind the callback with Backbone Events which takes event name, callback and context as arguments.
   Callback will invoke whenever event will trigger. 
# listeners:
 - It is function which is react when a event is trigger

# Listenees (Event Emmiter):
 - It is responsible for event triggering


# extend method:
 - underscore extend method use to shallow copy of soruce object to destination object

# interop :
 - ability to intract with other system or component


# listenTo:
 - it allow to obj to track the events happening in another object.

# off event:
 - Actually it remove the event listener from events

# once event:
 -  it's use once method of underscore js to register the event

# StopListening:
 - Basically this event tell object listener that don't listen other event object.

# ListenToOnce:
 - this event is bind up with once and stopListening event





### Model ###
 - The basic data structure which is store in databse


# preinitialize:
 - it will call method when you will create the model or collection is created

# initialize:
 -  we can pass the value in model when model is initialize


# get Method:
 - get value of required key

# set Method:
 - set key value in Model using this method

# escape Method:
 - return HTML-escape value without effecting HTML in way that HTML show in correct way

# has Method:
 - This method check that provided key is exist in model or not.

# unset Method:
 - it will remove key-value from model

# clear Method:
 - It will clear all alltribute from model

# toJSON:
 - return a shallow copy of attributes from model

# isValid:
 - this method will invoke whenever model attributes set or save and validate the model data








### Collection ###
 -  Collection is set of models data.


# preinitialize:
 - whenever collection is first created preinitialize method will call.


# add Method:
 - add models to collection

# remove Method
 - remove model from collection with there id


# reset:
 - By using this method we can change entire collection with new models, it's different from add and remove method.


# set Method (add, remove, change, and update):
 - It's update the exiting model( find the ID and update corresponding model) and also add the new model
 - remove all exiting model which are not setting in the model
 - Trigger add, remove, change, and update Events

# get method:
 - get model detail with model id.

# at method:
 - simplest method to get the model data if your data is sorted.


# Comparator Method:
 - if you want to sort the model with some attributes you can use comparator method in collection 

# Sort Method:

 - If we need to sort manually then we can use sort method

# pluk Method:

 - Pluk method use to retrive the specific attributs from every models

# Where Method:
 - where method is find out those all models which we have pass thier attributes in where method.

# findWhere:
 - findwhere is similar to where method but it return only single model.


# url:

 - set url in collection to reference its location on the server

# fetch Method:
 - Fetch the data from server then use parse method to parse the response data in json

# create Method:
 - Create method basically create the a model in collection 

# mixin method:
 - mixing a way to share the re-usable method through out model or collections using prototype of model and collection





### CollectionIterator ###

  - Collection Iterator is a object as we can say it is a custom itrator of Backbone js.
  - It's itrating over the collections just like for loop in javscript


# $$iterator:
 - Symbolic representation of iterator, it's ensure that itarator is itarable itself or not.


# next method:
 - this method use to iterate over the iterator






### View ###
 - it is simplity a javascript object which holds the junk of UI.
 - It can be single item, entire list



# extend:
 - It is used to create custom methods, subclasess, property of View


# el:
 - All view has own DOM element. it's pointing to container element

# $el:
 - get all element of selector in array form


# template:
 - to insert the data dynamically we can use template formating 


# render:
 -  render the HTML part

# remove:
 - remove element from DOM

# events:
 - it's bind all DOM event in View like change, click etc.


# delegateEvents:
 - If we need to manualy bind the events we use this method in view But it's autmatically bind the events hash whenever View initilize.

# undelegateEvents:
 - It's unbine all event which is bind with View.





### Router ###
 - Router means a object that maps URL of App.


# routes:
 - urls pattern of App

# navigate:
 - whenever we want to navigate to new URL



# execute:
 - whenever we want to validate or do some logic before moving to next url, we can use this method




### History ### 
 - History saves the URL changes as well track the url movment and ensure that url proccessing is going well managed.


 discussion : PushState
 - void 0
 - 




### HELPER ###

# Extend method :- expand the object with subclass

# 

















