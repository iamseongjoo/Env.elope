import { createCommunity } from "./dto/createCommunity.input";
import { Community } from './community.model'


// const express = require('express')
const communityModel= require('./community.model');

module.exports = {
    createCommunityBoard: async (req:any, res:any) => {
        
        try {
            // const community = new createCommunity({ 
            const community = new Community({ 
                category:req.body.category,
                title:req.body.title,
                content: req.body.content
            });
            
            await community.save();
            console.log("==== Success!! Save New createCommunity ====");
            // console.table([{id: community._id, content: todoTask.content, date: todoTask.date}]);
        } catch(err){
            console.error("==== Fail!! Save createCommunity ====");
            res.redirect("/");
        } 
    
    

    }
}
