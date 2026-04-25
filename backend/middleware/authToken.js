import jwt from 'jsonwebtoken';


const authToken = (req, res, next) => {
  try {
    
    const authHeaders = req.headers["authorization"];
    if (!authHeaders) {
      return res.json({ success: false, message: "you have no access" });
    }

    const token = authHeaders.split(" ")[1];
    const token_decoded = jwt.verify(token, process.env.JWT_SECRET);

    if(!token_decoded){
      return res.json({ success: false, message: "you'r not authorized" });
    }

    next(); 
  } catch (error) {
    return res.json({ success: false, message: "you'r not authorized" });
  }
};

export default authToken;

