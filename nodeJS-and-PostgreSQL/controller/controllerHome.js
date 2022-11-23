
import {pool } from '../db.js'

export const getHome = (req, res)=>{
    console.log("HomePage loaded");
    console.log(pool)
    res.render('../public/views/index.ejs');
}

