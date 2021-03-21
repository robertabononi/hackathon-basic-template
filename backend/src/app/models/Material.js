import { model, Schema } from "mongoose";

const MaterialSchema = new Schema(
    {
        title: {
            type: String,
            unique: true,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

export default model("Material", MaterialSchema);
