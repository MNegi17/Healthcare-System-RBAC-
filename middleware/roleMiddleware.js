
const roles = ['admin', 'moderator', 'user']; // These are the roles available in the system

// Middleware to check if the user has the required role
const checkRole = (role) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Access denied" });
        }

        if (req.user.role !== role && req.user.role !== 'admin') {
            // Admins can always access any route
            return res.status(403).json({ message: "You do not have permission to access this resource" });
        }

        next(); // User has the correct role, proceed to the next middleware or route handler
    };
};

module.exports = checkRole;
