const requestIp = require('request-ip');

const getIpAddress = (req, res) => {
    try {
        const ipAddress = requestIp.getClientIp(req);
        res.status(200).json({ ipOfUser: ipAddress });
    } catch (error) {
        res.status(500).json({ ipOfUser: 'Unknown' });
    }
};

export default getIpAddress;