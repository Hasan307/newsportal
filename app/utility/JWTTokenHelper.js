import { SignJWT, jwtVerify } from "jose";

export async function CreateToken(email,id){
    const secret = new TextEncoder.encode(process.env.JWT_SECRET);
    const payload= {email:email,id:id};
    const token= await new SignJWT(payload)
    .setProtectedHeader({alg:'HS256'})
    .setIssuer(process.env.JWT_ISSUER)
    .setIssuedAt()
    .setExpirationTime('process.env.JWT_EXPIRATION_TIME')
    .sign(secret);
    return token;
}
export async function VerifyToken(token){
   const secret= new TextEncoder.encode(process.env.JWT_SECRET);
    const decode=jwtVerify(token,secret);
    return decode['payload '];
}