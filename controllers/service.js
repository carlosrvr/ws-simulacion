const formidable = require('formidable');
const bearerToken = "1234abc";
const dataResponse = {service: "12345678",invoice:[{value:35.53, currency: "CUP"}]}
exports.token = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    
    form.parse(req,(err,fields)=>{
        if(err) return res.status(400).json({error: "error unknowk"});
        
        console.log(req);
        console.log(fields);
        if (fields.username == "call_center" && fields.password == "center_112") return res.json({token: bearerToken });
    });
    
    //console.log(req);

   
};

exports.invoice = (req,res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req,(err,fields)=>{
        if(err) return res.status(400).json({error: "error unknown"});
        
        const autorization = req.headers.autorization;
        if(autorization.startsWith("Bearer")){
            const token = autorization.split(" ")[1];
            console.log(`the token is ${token}`);

           return (token == bearerToken) ? res.json(dataResponse) : res.status(400).json({error: "Bearer token is invalid"});
        
        }
        
    });
};