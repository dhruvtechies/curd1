
const User =require('../modal/shikha')

const createuser = async(req, res)=>{
    try{
        const {userName, Email, Password}= req.body;
        const newuser = await User.create({userName, Email, Password})
        res.status(201).json(newuser);

    }catch(error){
        res.status(500).json({error:error.message})
    }
};

// get all user
const getalluser = async(req, res)=>{
    try{
        const getuser = await User.findAll(req.params.id);
        res.status(201).json(getuser);
    }

        catch(error){
            res.status(500).json({error:error.message})
        }
}

// get user
const findone = async(req, res)=>{
    try{
        const getone = await User.findone(req.params.id);
        res.status(201).json(getone);
    }

        catch(error){
            res.status(500).json({error:error.mess})
        }
}

// pk

const findpk = async(req, res)=>{
    try{
        const getpk = await User.findByPk(req.params.id);
        res.status(201).json(getpk);
    }

        catch(error){
            res.status(500).json({error:error.mess})
        }
}

// Update user
const updateuser = async (req, res) => {
    try {
        const { UserName, Email, Password } = req.body;
        const userId = req.params.id;
        await User.update({ UserName, Email, Password }, { where: { id: userId } });
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete user
const deleteuser = async (req, res) => {
    try {
        const userId = req.params.id;
        await User.destroy({ where: { id: userId } });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports={createuser, getalluser, findone, findpk, updateuser, deleteuser };