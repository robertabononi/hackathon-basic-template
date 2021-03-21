import { model, Schema } from "mongoose";
//import ChildSchema from "./Child"

const UserSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        userType: {
            type: String,
            required: true,
        },
        // children: {
        //     type: [ChildSchema],
        //     default: []
        // }
    },
    { timestamps: true }
);

export default model("User", UserSchema);
