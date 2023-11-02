var getuserRole=function (name,role)
{
    switch(role)
    {
        case "admin":
        return`${name} admin with all acess`;
        //break;

        case "subadmin":
        return`${name} subadmin with all acess to create and delete courses`;
        //break;

        case "testprep":
        return`${name} testprep with all acess to create and delete test`;
        //break;

        case "user":
            return`${name} is user to consume content`;
          //  break;
        
            default:
                return`${name} is a trial user`;
            //    break;
    }
}
console.log(getuserRole("HITESH","testprep"));

var getrole=getuserRole("sammy","user");
console.log(getrole);