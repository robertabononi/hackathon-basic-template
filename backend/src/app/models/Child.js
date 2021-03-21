import { model, Schema } from "mongoose";

const ChildSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        school: {
            type: String,
            required: true,
        },
        materials: [{ type: Schema.Types.ObjectId, ref: 'Material' }] 
    },
    { timestamps: true }
);

export default model("Child", ChildSchema);
