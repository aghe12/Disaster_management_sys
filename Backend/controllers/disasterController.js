// controllers/disasterController.js
const Disaster = require('../models/disaster');

// POST: Add a new disaster
const addDisaster = async (req, res) => {
    const { name, location, severity, description } = req.body;

    try {
        const newDisaster = new Disaster({
            name,
            location,
            severity,
            description,
        });

        await newDisaster.save();
        res.status(201).json({ message: 'Disaster added successfully', disaster: newDisaster });
    } catch (err) {
        res.status(500).json({ error: 'Failed to add disaster', details: err.message });
    }
};
const updateDisaster = async (req, res) => {
    const { id } = req.params;
    const { name, location, severity, description } = req.body;

    try {
        // Find the disaster by its ID
        const disaster = await Disaster.findById(id);

        if (!disaster) {
            return res.status(404).json({ message: 'Disaster not found' });
        }

        // Update the disaster with the new data
        disaster.name = name || disaster.name;
        disaster.location = location || disaster.location;
        disaster.severity = severity || disaster.severity;
        disaster.description = description || disaster.description;

        // Save the updated disaster to the database
        await disaster.save();

        res.status(200).json({ message: 'Disaster updated successfully', disaster });
    } catch (err) {
        res.status(500).json({ message: 'Error updating disaster', error: err.message });
    }
};

module.exports = { addDisaster,updateDisaster };
