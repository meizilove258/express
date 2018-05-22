var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
   title: String,
   author: String,
   body: String,
   comments: [{body: String, date: Date}],
   date: {type: Date, default: Date.now()},
   hidden: Boolean,
   meta: {
       votes: Number,
       favs: Number
   }
});
var Blog = mongoose.model('Blog', blogSchema);
var animalSchema = new Schema({name: String, type: String});
animalSchema.method.findSimilarTypes = function(cb) {
    return this.model('Animal').find({type: this.type}, cb);
};
var Amimal = mongoose.model('Animal', animalSchema);
var dog = new Animal({type: 'dob'});
dog.findSimilarTypes(function (err, dogs) {
    console.log(dogs);
});