export class Hospital {

    public _id: string;
    public name: string;
    public email: string;
    public city: string;
    public password: string;
    public cnpj: string;
    public createdAt: string;


    
    
 
    constructor(
        _id:string ,
        name: string, 
        email: string, 
        city: string, 
        password: string, 
        cnpj: string, 
        createdAt: string,
       ){
  
         this._id = _id;
         this.name= name;
         this.email = email;
         this.city =city;
         this.password =password;
         this.cnpj=cnpj;
         this.createdAt =createdAt;

  
      }
  
  
  }