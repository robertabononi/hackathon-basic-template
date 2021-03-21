import ChildModel from "../models/Child"
import UserModel from "../models/User"

class ChildController {
    async find(req, res) {
        try {
            const children = await ChildModel.find({});

            return res.json(children)
        }catch(error){
            return res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }

    async create(req, res) {
        try {
            if (!req.body.name || !req.body.school){
                return res.status(400).json({
                    message: "Validation failed"
                })
            }

            const createdChild = await ChildModel.create({ name: req.body.name, school:req.body.school });

            await UserModel.findByIdAndUpdate(req.params.userId, {
                $set: {
                    children: createdChild._id
                }
            })
           
            return res.json(createdChild)
        } catch(error) {
            return res.status(500).json({ message: "Internal Server Error"})
        }
    }

    async update(req, res) {
        try {
            if (!req.body.name || !req.body.school){
                return res.status(400).json({
                    message: "Validation failed"
                })
            }

            const updatedChild = await ChildModel.findOneAndUpdate({ _id:req.params.id }, {name: req.body.name, school: req.body.school }, { new: true })
            return res.json(updatedChild);
        } catch(error){
            return res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }

    async delete(req, res) {
        try{
            await ChildModel.findByIdAndUpdate(req.params.userId, {
                $unset: {
                    children: req.params.id
                }
            });
            
            const deletedChild = await ChildModel.findByIdAndDelete({ _id: req.params.id });

            return res.json(deletedChild);
        }
        catch(error){
            console.log("error", error)
            return res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }

}

export default new ChildController();