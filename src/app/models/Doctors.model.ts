export class Doctors {

    public _id: string;
    public name: string;
    public email: string;
    public city: string;
    public password: string;
    public crm: string;
    public specialization: string;
    public createdAt: string;


    
    
 
    constructor(
        _id:string ,
        name: string, 
        email: string, 
        city: string, 
        password: string, 
        crm: string, 
        specialization: string, 
        createdAt: string,
       ){
  
         this._id = _id;
         this.name= name;
         this.email = email;
         this.city =city;
         this.password =password;
         this.crm=crm;
         this.specialization =specialization;
         this.createdAt =createdAt;

  
      }
  
  
  }