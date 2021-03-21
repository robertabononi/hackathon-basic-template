import UserModel from "../models/User";

class UserController {
    async find(req, res) {
        try{
            const users = await UserModel.find({});

            return res.json(users);
        }catch(error){
            return res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }
    async create(req, res) {
        try{
            if(!req.body.email || !req.body.password || !req.body.name || !req.body.userType ){
                return res.status(400).json({
                    message: "Validation failed"
                })
            }

            const createdUser = await UserModel.create({ email: req.body.email, password: req.body.password, name: req.body.name, userType: req.body.userType });
            return res.json(createdUser);
        }catch(error){
            console.log("error", error)
            return res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }

    async update(req, res) {
        try{

            if(!req.body.email || !req.body.password || !req.body.name || !req.body.userType ){
                return res.status(400).json({
                    message: "Validation failed"
                })
            }

            const updatedUser = await UserModel.findOneAndUpdate({ _id: req.params.id }, { email: req.body.email, password: req.body.password, name: req.body.name, userType: req.body.userType }, { new: true });
            return res.json(updatedUser);
        }catch(error){
            return res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }

    async delete(req, res) {
        try{
            const updatedUser = await UserModel.findByIdAndDelete({ _id: req.params.id });
            return res.json(updatedUser);
        }
        catch(error){
            console.log("error", error)
            return res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }
}

export default new UserController();
