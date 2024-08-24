
import User from '../models/User.js';

const getUser = async (req, res) => {
    try {
   
        const user = await User.findById(req.user._id);
        console.log(req.user);


        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Send response with user details
        res.json({ name: user.name });
    } catch (error) {
        console.error('Error fetching user:', error.message);
        // Check if headers are already sent
        if (!res.headersSent) {
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    }
};

export default getUser;
