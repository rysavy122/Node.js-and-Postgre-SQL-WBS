import { pool} from "../db.js";

export const viewAllUsers = async (req, res)=>{
    console.log("All Users loaded");

    const {rows} = await pool.query('SELECT * from users');

/*  res.render("../public/views/users.ejs");
 */ res.json(rows);
    res.send("All users ");
    res.end();
}

export const addUser = async (req, res)=>{


    console.log("User added", req.body);

    const { firstname, lastname, age } = req.body;

    const query ='INSERT INTO users (first_name, last_name, age) VALUES ($1, $2, $3)';
    const values = [firstname, lastname, age];
    try {
        const result = await pool.query(query, values)
        console.log(result.rows[0])
        res.status(200).json(result)
    }catch(err){
        console.log(err.stack)
    }
/* 
    res.send("User added ");
    res.end(); */
}

export const viewUser =  async(req, res)=>{
    const {id} =  req.params;
    const {rows} = await pool.query('SELECT * from users WHERE id=$1', [id]);

    console.log("Single User laoded");
    res.json(rows);
    res.end();
}

export const editUser = async (req, res)=>{
    const { id } = req.params;
    const { firstname, lastname, age} = req.body;

    const query = 'UPDATE users SET first_name=$1, last_name=$2, age=$3 WHERE id=$4 RETURNING *';
    const values = [firstname, lastname, age, id]

    try {
        const result = await pool.query(query, values);
        console.log(result);
        return res.status(200).json({msg:`edited user id ${id}`});
    }catch(err){
        console.log(err.stack)
    }

    console.log("User edited");
    res.send("User edited ");
    res.end();
}

export const deleteUser = async (req, res)=>{
    const {id} = req.params;
    
    const query = 'DELETE from users WHERE id=$1';
    const values = [id]

    try{
        const {rows} = await pool.query(query, values)
        return res.status(202).json({msg: `deleted user mit id ${id}`})
    } catch(err){
        console.log(err.stack);
    }



    console.log("User deleted");
    res.send("User deleted ");
    res.end();
}

