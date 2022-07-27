const express = require("express");
const {check,validationResult} = require("express-validator/check");
const User = require("../model/User");
const router = express.Router();
const user = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post(
    "/signup",
    [
        check("email","Please enter a valid email").isEmail(),
        check("password","Please enter a password with minimum length of 5 characters").isLength({
            min:5
        })
    ],
    async (req,res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array()
            })
        }
        const {email,password} = req.body;
        try{
            let user = await User.findOne({email});
            if (user){
                return res.status(400).json({
                    error:"user already exists"
                });
            }
            user = new User({email,password});
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password,salt);
            await user.save();
            const jwtresponse = {
                user:{
                    id:user.id
                }
            };
            return jwt.sign(
                jwtresponse,
                "randomString",
                {expiresIn:3600},
                (error,token) => {
                    console.log(token)
                    if(error){
                        throw error;
                    }
                    return res.status(200).json({
                        token:token
                    });
                }
            )

        }catch (error){
            console.log(error.message);
            return res.status(500).json({
                error:"error saving"
            });
        }
    }
);


router.post(
    "/login",
    [
        check("email","Please enter a valid email").isEmail(),
        check("password","Please enter a password with minimum length of 5 characters").isLength({
            min:5
        })
    ],
    async (req,res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array()
            })
        }
        const {email,password} = req.body;
        try{
            let user = await User.findOne({email});
            if (!user){
                return res.status(400).json({
                    error:"user does not exist"
                });
            }
            const success = await bcrypt.compare(password,user.password);
            if (!success) {
                return res.status(401).json({
                    error:"wrong password"
                });
            }
            const jwtresponse = {
                user:{
                    id:user.id
                }
            };
            
            return jwt.sign(
                jwtresponse,
                "randomString",
                {expiresIn:3600},
                (error,token) => {
                    console.log(token)
                    if(error){
                        throw error;
                    }
                    return res.status(200).json({
                        token:token
                    });
                }
            )

        }catch (error){
            console.log(error.message);
            return res.status(500).json({
                error:"error logging in"
            });
        }
    }
);

module.exports = router;