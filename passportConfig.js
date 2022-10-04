const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const GithubStrategy = require("passport-github2").Strategy;
// const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");
const User = require("./models/User");
const dotenv = require('dotenv').config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

// GITHUB_CLIENT_ID = "your id";
// GITHUB_CLIENT_SECRET = "your id";

// FACEBOOK_APP_ID = "your id";
// FACEBOOK_APP_SECRET = "your id";

const googleCallbackURL = `${process.env.BACKEND_URL}/api/passport-auth/google/callback`

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: googleCallbackURL,
        },
        async function (req, accessToken, refreshToken, profile, done) {

            const user = {
                email: profile.emails[0].value,
                name: profile.displayName,
            }
            console.log("from strategy ",user)
            
            //save user in the database

            //if no errors do this 👇
            if (user) done(null, profile);
        }
    )
);

// passport.use(
//   new GithubStrategy(
//     {
//       clientID: GITHUB_CLIENT_ID,
//       clientSecret: GITHUB_CLIENT_SECRET,
//       callbackURL: "/auth/github/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       done(null, profile);
//     }
//   )
// );

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: FACEBOOK_APP_ID,
//       clientSecret: FACEBOOK_APP_SECRET,
//       callbackURL: "/auth/facebook/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       done(null, profile);
//     }
//   )
// );

passport.serializeUser((user, done) => {

    done(null, user);
});

passport.deserializeUser(async (userID, done) => {
    
    const user = await User.findOne({ googleID: userID.id }).catch((err)=>{
        console.log("from deserializeUse ", err)
    }) 
    
    
    
    console.log("userID from deserializeUser ", userID)
    console.log("user from deserializeUser ", user)
    
    if (user) {

        //fetch user data from database
        
        done(null, user);

        
    }
    else {
        console.log("user not found")
        //create user in database
        done(null, user);
    }
});