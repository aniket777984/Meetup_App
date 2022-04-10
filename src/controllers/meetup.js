const {Meetup} =  require("../models/meetup")

module.exports.allMeetupPage = (req,res)=>{
    const meetups =  Meetup.find().then((meetups)=>{
        res.render('meetup/meetup-list' , {meetups});
    }) 
}

module.exports.meetupForm = (req,res)=>{
    res.render("meetup/meetup-form");
}

module.exports.createMeetup = (req,res)=>{
    const meetup = req.body;
    Meetup.create(meetup).then((meetup)=>{
        console.log("created" , meetup);
        res.render("meetup/meetup-form" , {message : "Meetup Created"});
    }).catch((err)=>{
        res.render("meetup/meetup-form" , {error : err.message});
    })
}

module.exports.deleteMeetup = (req,res)=>{
    const id =req.params.id;
    Meetup.findByIdAndDelete(id).then((result)=>{
        res.redirect("/meetups");
    }).catch(()=>{
        res.redirect("/meetups");
    });
}

module.exports.meetupDetailPage = (req,res)=>{
   const id = req.params.id;
   Meetup.findById(id).then((meetup)=>{
    res.render('meetup/meetup-detail', {meetup : meetup});
   })
}