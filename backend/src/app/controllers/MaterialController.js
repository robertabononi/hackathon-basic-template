import MaterialModel from "../models/Material";

class MaterialController {
    async find(req, res) {
        try{
            let materials = []
            if(req.query.title){
                materials = await MaterialModel.find({ title : req.query.title });
            }else {
                materials = await MaterialModel.find({});
            }

            return res.json(materials);
        }catch(error){
            return res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }
    async create(req, res) {
        try{
            if(!req.body.title || !req.body.amount){
                return res.status(400).json({
                    message: "Validation failed"
                })
            }

            const createdMaterial = await MaterialModel.create({ title: req.body.title, amount: req.body.amount });
            return res.json(createdMaterial);
        }catch(error){
            return res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }

    async update(req, res) {
        try{

            if(!req.body.title || !req.body.amount){
                return res.status(400).json({
                    message: "Validation failed"
                })
            }

            const updatedMaterial = await MaterialModel.findOneAndUpdate({ _id: req.params.id },{ title : req.body.title, amount: req.body.amount }, { new: true });
            return res.json(updatedMaterial);
        }catch(error){
            return res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }

    async delete(req, res) {
        try{
            const updatedMaterial = await MaterialModel.findByIdAndDelete({ _id: req.params.id });
            return res.json(updatedMaterial);
        }catch(error){
            return res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }
}

export default new MaterialController();
