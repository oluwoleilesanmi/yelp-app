import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

var UserSchema = new mongoose.Schema({
  username: String,
  password: String
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
