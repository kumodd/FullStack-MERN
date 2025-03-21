const jwt=require('jsonwebtoken');
const authMiddleware=(req,res,next)=>{
    console.log(req.header)
    const token=req.header('Authorization')?.replace('Bearer ','');
    if(!token){
         res.status(401).json({message:'no token, auth denied'});
        try {
            const decoded=jwt.verify(token,'tokenByKumod');
            req.user=decoded;
            next();
            
        } catch (error) {
            res.status(401).json({message:"Invalid token!"})
            
        }
    }
}
module.exports=authMiddleware;