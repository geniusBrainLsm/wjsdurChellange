const quote = document.querySelector("quotes");
const HTMLQuotes = document.querySelector(".quotes");

const quotes = [
{
  quote: "better the last smile than the first laughter."
},
{
  quote: "Courage is very important. Like a muscle, it is strengthened by use."
},
{
  quote: "Life is the art of drawing sufficient conclusions from insufficient premises."
},
{
  quote: "A man that hath no virtue in himself, ever envieth virtue in others."
},
{
  quote: "Error is the discipline through which we advance."
},
{
  quote: "Faith without deeds is useless."
},
{
  quote: "Pain past is pleasure."
},
{
  quote: "Who begins too much accomplishes little."
},
{
  quote: "Faith is a higher faculty than reason."
},
{
  quote: "I never think of the future. It comes soon enough."
},
{
  quote: "The will of a man is his happiness."
},
{
  quote: "A minute’s success pays the failure of years."
},
{
  quote: "Time is but the stream I go a-fishing in."
},
{
  quote: "Habit is second nature."
},
{
  quote: "Only the just man enjoys peace of mind."
},
{
  quote: "He is greatest who is most often in men’s good thoughts."
},
{
  quote: "Envy and wrath shorten the life."
},
{
  quote: "To be trusted is a greater compliment than to be loved."
},
{
  quote: "Education is the best provision for old age."
},
{
  quote: "Better is to bow than break."
},
{
  quote: "The less their ability, the more their conceit."
},
{
  quote: "Turn your wounds into wisdom."
},
{
  quote: "Be true to thyself."
},
{
  quote: "Pride sullies the noblest character."
},
{
  quote: "Only you can change yourself."
},
{
  quote: "Don’t dream it, be it."
}
];


randQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log(randQuote);
HTMLQuotes.innerText = randQuote.quote;



