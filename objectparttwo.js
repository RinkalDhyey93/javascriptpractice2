var user={
    name:"",
    getusername:function()
    {
        console.log(`user name is: ${this.name}`);
    },
};
var rinkal=Object.create(user);
console.log(rinkal);
rinkal.name="Rinkal Solanki";
rinkal.getusername();

var sam=Object.create(user,{
    name:{value:"sammy"}
    // coursercount:{value:3},
});
sam.getusername();