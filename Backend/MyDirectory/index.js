var giveMeAJoke=require("give-me-a-joke");

giveMeAJoke.getRandomDadJoke(function(joke){
    console.log(joke);
});
giveMeAJoke.getRandomCNJoke(function(joke){
    console.log(joke);
});
var fn = "Jackie";
var ln = "Chan";
giveMeAJoke.getCustomJoke (fn, ln, (joke)=>{ console.log(joke)});

var category = "blonde";
giveMeAJoke.getRandomJokeOfTheDay (category, (joke)=> console.log(joke));
