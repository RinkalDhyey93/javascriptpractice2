var user="admin";
switch(user)
{
    case "admin":
        console.log("you are get full access");
        break;

        case "subadmin":
        console.log("get access to create/delete courses");
        break;

        case "testprep":
        console.log("get access to create/delete test");
        break;

        case "user":
        console.log("get access to consume content");
        break;
    default:
        console.log("Trial user");
        break;
}