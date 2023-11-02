var user={
    firstname:"rinkal",
    lastname:"solanki",
    role:"user",
    logincount:32,
    facebooksignedin:true,
    couserlist:[],
    buycourse:function(coursename)
    {
this.couserlist.push(coursename);
    },
    getcourse:function()
    {
        return `${this.couserlist} and ${this.couserlist.length}`
    },    
};
var courselist=true;
console.log(user.getcourse());
user.buycourse("React js course");
console.log(user.getcourse());
user.buycourse("info");
console.log(user.getcourse());
//console.log(user.firstname);
//console.log(user["lastname"]);
//console.log(user.logincount);
user.logincount=44;
//console.log(user.logincount);

//console.table(user);

var iphone={
    name:"iphone",
    version:16
};

//console.table(iphone);













