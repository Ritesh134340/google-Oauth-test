require("dotenv").config()
const { v4: uuidv4 } = require('uuid');
const passport=require("passport")
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const {User}=require("../models/users.model")
passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/google/callback",
    passReqToCallback   : true
  },

    async function(request, accessToken, refreshToken, profile, done) {
        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //   return done(err, user);
        // });
        const email=(profile._json.email)
        const user=new User({email:email,password:uuidv4()})
        await user.save()
      
        return done(null,user)
   
       
      }

   
  
));

module.exports=passport