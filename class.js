//getter is method throgh we can grab the ptivate info of class // we return the variable not a parameter
//setter is method throgh we can sset the data // except the parameter 
//# keycode we can create private data
//inherits parent and child class 
//static keyword throgh we can set the private data or function that means no one can inherit
//child class override the content of same function name like loggin
//concurrcy model and event loop read in mdn
class user
{ 
    constructor(name,email)
    {
        this.name=name;
        this.email=email;
    }
    #courselist=[];
    getinfo()
    {
        return{name:this.name,email:this.email};
    }
    enrollcoursr(name)
    {
        this.#courselist.push(name)
    }
    getcourselist()
    {
        return this.#courselist;
    }
    login()
    {
        return "you are logged in";
    }
}
class subadmin extends user{
    constructor(name,email)
    {
        super(name,email);//inherits the value
    }
    getadmininfo()
    {
        return " i am subadmin";
    }
    login()
    {
    return "login for admin only"  ;  
    }
}
const rock=new user("rock","rock@rock.com");
//console.log(rock.getinfo());
rock.enrollcoursr("python");
//console.log(rock.getcourselist());
//console.log(rock.courselist);

const tom=new subadmin("tom","tomjerry.com");
console.log(tom.getadmininfo());
console.log(tom.getinfo());
console.log(tom.login());

module.exports=user;

