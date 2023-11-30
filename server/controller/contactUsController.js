const ContactUs = require('../model/contactUs');

// Controller to handle contact form submission
const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Check if required fields are provided
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required' });
    }

    // Create a new ContactUs document
    const contactEntry = new ContactUs({ name, email, message });

    // Save the entry to the database
    await contactEntry.save();

    res.json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  submitContactForm,
};
