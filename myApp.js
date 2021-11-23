const  mongoose  = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, () =>{
  console.log("Connected")
});

const Person = require('./schema');
/*var Schema = mongoose.Schema
var personSchema = new Schema({
  name: {type: String,required: true},
  age: Number,
  favouriteFoods: [String],
  
})

var Person = mongoose.model('Person',  personSchema);*/






/*var Schema = mongoose.Schema;

var personSchema = new Schema({
  name:  {type: String,required: true},
  age: Number,
  favoriteFoods:   [String]
});
Your test output will go here
*
*
/*Find an item by Id should succeed

var Person = mongoose.model('Person', personSchema);

var gabi = new Person({
  name: "gabi",
  age: 23,
  favoriteFoods: ['Pizza']
});

gabi.save(function(err, persons) {
  if(err){
    console.log("Failed");
  } else {
    console.log("Saved Successful");
    console.log(persons);
  }
});

var createAndSavePerson = function(done) {  */

  //done(null /*, data*/);

//};






/*var array0fPeople = [{
  name: "gabi",
  age: 23,
  favoriteFoods: ['Pizza']
},
{
  name: "emi",
  age: 18,
  favoriteFoods: ['Burger']
},

];

var createManyPeople = function(array0fPeople, done){
  Person.create(array0fPeople, function (err, people){
    if(err) return console.log(err);
    done(null, people);
  });
};*/








/*var findPeopleByName = function(personName, done){
  Person.find ({name: personName}, function(err, personFound){
    if(err) return console.log(err);
    done(null, personFound);
  } );
};*/







/*var findOneByFood = function(food, done){
  Person.findOne({favoriteFoods: food}, function(err, data){
    if(err) return console.log(err);
    done(null, data);

  });
};*/


/*var findPersonById = function(personId, done){
  Person.findPersonById(personId, function (err, data)
  {
    if(err) return console.log(err);
    done(null, data);
  });
};*/











/*const findEditThenSave = (personId, done)=> {
  const foodtoAdd = "hamburger";

  Person.findById(personId, (err, person) => {
    if(err) return console.log(err);
    person.favoriteFoods.push(foodToAdd);
    person.save((err, updatePerson) => {
      if(err) return console.log(err);
      done(null, updatePerson)
    })
  })
};*/







/*const findAndUpdate = (personName, done) => {
  const agetoSet =20;

  Person.findOneAndUpdate ({name: personName}, {age: ageToSet}, {new: true}, (err, updateDoc) => {
   if(err) return console.log(err);
   done(null, updateDoc) 
  })
};*/













