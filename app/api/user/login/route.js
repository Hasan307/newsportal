export async function POST(req, res) {
    try{
        const reqBody= await req.json();
        const prisma =new PrismaClient();
        const user = await prisma.users.findUnique({
            where:reqBody
        })
        if (user.length==0){
            return NextResponse.json({status:"error",data:"user not found"})
        }
        else{
            return NextResponse.json({status:"success",data:user})
            const token = await CreateToken(user['email',user['id']])
            const expirationdate = new Date(Date.now()+ 24*60*60*1000)
            
        }
    }
    catch(error){
        return NextResponse.json({status:"error",data:error})    
    }
}