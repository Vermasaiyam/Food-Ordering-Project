const User = require("../models/userModel");
const bcrypt = require("bcrypt");

module.exports = {
    async createUser(userData){
        try {
            let {fullName, email, password, role} = userData;

            const isUserExists = await User.findOne({email: email});

            if (isUserExists){
                throw new Error("User Already Exists.");
            }

            password = await bcrypt.hash(password, 8);

            const user = await User.create({
                fullName: fullName,
                email: email,
                password: password,
                role,
            });

            return user;

        } catch (error) {
            throw new Error(error.message);
        }
    },

    async getUserByEmail(email){
        try {
            const user = await User.findOne({email});
            if (!user){
                throw new Error("User not found.");
            }
            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async getUserById(userId){
        try {
            const user = await User.findById(userId).populate("addresses");
            if (!user){
                throw new Error("User not found.");
            }
            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    },
}