const Address = require("../models/addressModel");
const Restaurant = require("../models/restaurantModel");

module.exports = {
    async createRestaurant(req, user) {
        try {
            const address = new Address({
                fullName: req.address.fullName,
                streetAddress: req.address.streetAddress,
                city: req.address.city,
                state: req.address.state,
                postalCode: req.address.postalCode,
                country: req.address.country,
            });

            const savedAddress = await address.save();

            const restaurant = new Restaurant({
                address: savedAddress,
                contactInformation: req.contactInformation,
                cuisineType: req.cuisineType,
                description: req.description,
                images: req.images,
                name: req.name,
                openingHours: req.openingHours,
                registrationDate:req.registrationDate,
                owner: user,
            })

            const savedRestaurant = await restaurant.save();
            return savedRestaurant;

        } catch (error) {
            throw new Error(error.message);
        }
    },

    async getAllRestaurants() {
        try {
            const restaurants = await Restaurant.find();
            return restaurants;

        } catch (error) {
            throw new Error(error.message);
        }
    },

    async findRestaurantById(id) {
        try {
            const restaurant = await Restaurant.findById(id);
            if (!restaurant) throw new Error("Restaurant not found.")
            return restaurant;

        } catch (error) {
            throw new Error(error.message);
        }
    },

    async deleteRestaurant(id) {
        try {
            this.findRestaurantById(id);
            const restaurant = await Restaurant.deleteById(id);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    async getRestaurantByUserId(id) {
        try {
            const restaurant = await Restaurant.findOne({owner: id}).populate('owner').populate("address");
            if (!restaurant) throw new Error("Restaurant not found.")
            return restaurant;

        } catch (error) {
            throw new Error(error.message);
        }
    },

    async searchRestaurant(key) {
        try {
            const restaurant = await Restaurant.find({
                $or:[
                    {
                        name: {$regex: key, $options: 'i'},
                        description: {$regex: key, $options: 'i'},
                        cuisineType: {$regex: key, $options: 'i'},
                    }
                ]
            })
            return restaurant;

        } catch (error) {
            throw new Error(error.message);
        }
    },

    async addToFavourite(restaurantId, user) {
        try {
            const restaurant = this.findRestaurantById(restaurantId);

            const dto = {
                _id: restaurant._id,
                title: restaurant.name,
                images: restaurant.images,
                description: restaurant.description,
            };
            

        } catch (error) {
            throw new Error(error.message);
        }
    },
}