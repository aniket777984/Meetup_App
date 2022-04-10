const { allMeetupPage, createMeetup, deleteMeetup  , meetupForm, meetupDetailPage} = require("../controllers/meetup");

const express =  require("express");
const meetupRouter = express.Router();


// baseurl - /meetup
meetupRouter.get('/' , allMeetupPage);
meetupRouter.get('/create' , meetupForm );
meetupRouter.post('/create' , createMeetup);
meetupRouter.get('/:id' , meetupDetailPage)
meetupRouter.get('/delete/:id' , deleteMeetup);


// Updating the meetup is the combination of deelete and create meetup
// First add a update button in the meetup list and in the href of update button we will pass dynmaic url with id just as we have done for delete href . This will be a get rquest in wich we wiil render the user a meetup form and the url will contain the id of meetup to be updated .So now we wiil make a ppost request just we have done in create meetup
module.exports = {meetupRouter}
