// pages/api/subscribe.js

import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Validate the email
    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    try {
      const client = await clientPromise;
      const db = client.db('subscribers'); // Use 'subscribers' as the database name
      const collection = db.collection('subscribers'); // This is the collection where emails will be stored

      // Insert the email into the database
      await collection.insertOne({ email });

      return res.status(200).json({ message: 'Subscription successful' });
    } catch (error) {
      console.error('Database error:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
