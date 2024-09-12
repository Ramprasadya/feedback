import mongoose ,{Schema,Document} from "mongoose";

export interface Message extends Document{
    content : string,
    createdAt : Date
}

const MessageSchema : Schema<Message> = new Schema({
    content:{
        type:String,
        required : true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }
})


export interface User extends Document{

    username:string;
    email:string;
    password:string;
    varifyCode:string;
    varifyCodeExpiry : Date ;
    isVarified : boolean ;
    isAcceptingMessage : boolean;
    message : Message[];


}

const UserSchema : Schema<User> = new Schema({
    username : {
        type:String,
        required:[true,"username is required"],
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
        match : [/.+\@.+\..+/, "Please use a valid email address"]

    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    varifyCode:{
        type:String,
        required:[true,"varify code is required"]
    },
    varifyCodeExpiry:{
        type:Date,
        required:[true,"varify code expiry is required"]
    },
    isVarified:{
        type: Boolean ,
        default : false
    },
    isAcceptingMessage:{
        type: Boolean ,
        default : true
    },
    message : [MessageSchema]

   

})


const UserModal = (mongoose.models.User as mongoose.Model<User> ) || mongoose.model<User>("User",UserSchema) 