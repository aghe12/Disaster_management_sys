const BankDetails = require('../models/bankdetails');

// Add a new bank detail
exports.addBankDetail = async (req, res) => {
    const { bankName, accountNumber, ifscCode } = req.body;

    if (!bankName || !accountNumber || !ifscCode) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const existingBank = await BankDetails.findOne({ accountNumber });
        if (existingBank) {
            return res.status(400).json({ error: 'Account number already exists' });
        }

        const newBankDetail = new BankDetails({ bankName, accountNumber, ifscCode });
        await newBankDetail.save();
        res.status(201).json({ message: 'Bank detail added successfully', data: newBankDetail });
    } catch (error) {
        console.error('Error adding bank detail:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Get all bank details
exports.getAllBankDetails = async (req, res) => {
    try {
        const bankDetails = await BankDetails.find();
        res.status(200).json(bankDetails);
    } catch (error) {
        console.error('Error fetching bank details:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Update a bank detail
exports.updateBankDetail = async (req, res) => {
    const { id } = req.params;
    const { bankName, accountNumber, ifscCode } = req.body;

    try {
        const updatedBankDetail = await BankDetails.findByIdAndUpdate(
            id,
            { bankName, accountNumber, ifscCode },
            { new: true }
        );

        if (!updatedBankDetail) {
            return res.status(404).json({ error: 'Bank detail not found' });
        }

        res.status(200).json({ message: 'Bank detail updated successfully', data: updatedBankDetail });
    } catch (error) {
        console.error('Error updating bank detail:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete a bank detail
exports.deleteBankDetail = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBankDetail = await BankDetails.findByIdAndDelete(id);

        if (!deletedBankDetail) {
            return res.status(404).json({ error: 'Bank detail not found' });
        }

        res.status(200).json({ message: 'Bank detail deleted successfully' });
    } catch (error) {
        console.error('Error deleting bank detail:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
