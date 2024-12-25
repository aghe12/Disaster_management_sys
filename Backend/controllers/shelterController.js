const Shelter = require('../models/shelter');

// Add Shelter
const addShelter = async (req, res) => {
    try {
        const { name, location, capacity, availableSpace, contact } = req.body;

        // Create a new shelter
        const shelter = new Shelter({
            name,
            location,
            capacity,
            availableSpace,
            contact,
        });

        const savedShelter = await shelter.save();
        res.status(201).json({ message: 'Shelter added successfully!', data: savedShelter });
    } catch (error) {
        console.error('Error adding shelter:', error);
        res.status(500).json({ message: 'Error adding shelter', error });
    }
};

// Update Shelter
const updateShelter = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, location, capacity, availableSpace, contact } = req.body;

        const updatedShelter = await Shelter.findByIdAndUpdate(
            id,
            { name, location, capacity, availableSpace, contact },
            { new: true } // Return the updated document
        );

        if (!updatedShelter) {
            return res.status(404).json({ message: 'Shelter not found' });
        }

        res.status(200).json({ message: 'Shelter updated successfully!', data: updatedShelter });
    } catch (error) {
        console.error('Error updating shelter:', error);
        res.status(500).json({ message: 'Error updating shelter', error });
    }
};

// Get All Shelters
const getAllShelters = async (req, res) => {
    try {
        const shelters = await Shelter.find();
        res.status(200).json({ message: 'Shelters fetched successfully!', data: shelters });
    } catch (error) {
        console.error('Error fetching shelters:', error);
        res.status(500).json({ message: 'Error fetching shelters', error });
    }
};

module.exports = {
    addShelter,
    updateShelter,
    getAllShelters,
};

