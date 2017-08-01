const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const messages=[];
// const messages = [{
//     to: 'Mr. Grinch',
//     from: 'Whovilles',
//     body: 'you\'re a mean one, mr grinch'
//   },
//   {
//     to: 'potus',
//     from: 'liberals',
//     body: 'you\'re racist'
//   },
//   {
//     to: 'aliens',
//     from: 'tom delonge',
//     body: 'pls send proof'
//   },
//   {
//     to: 'Adele\'s momma',
//     from: 'Adele',
//     body: 'hello'
//   }
// ];

app.listen(3000, function() {
  console.log("Yo ho, yo ho, a pirate's life for me");
})

app.use(express.static('assets'))
app.use(bodyParser.json());

app.get('/messages', function(req, res, next) {
  console.log(req.body);
  res.status(200).json({
    messages: messages
  })
})

app.post('/messages',function(req,res,next){
  messages.push({message: req.body.message, time: new Date()});
  console.log(req.body);
  res.status(200).json({messages:messages})
})








//
