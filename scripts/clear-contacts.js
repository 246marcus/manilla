const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

async function clearContacts() {
  try {
    // Wait for connection to be ready
    await mongoose.connection.asPromise();
    
    // Clear all contacts from the database
    const result = await mongoose.connection.db.collection('contacts').deleteMany({});
    console.log(`Cleared ${result.deletedCount} contacts from database`);
    
    console.log('Contacts collection cleared successfully!');
    console.log('You can now test the new contact form with the updated schema.');
    
    process.exit(0);
  } catch (error) {
    console.error('Error clearing contacts:', error);
    process.exit(1);
  }
}

clearContacts();
