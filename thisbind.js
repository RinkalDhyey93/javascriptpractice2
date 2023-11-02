//boring a method

const hitesh={
    firstname:"hitesh",
    lastname:"Coudhry",
    role:"admin",
    coursecount:3,
    getinfo:function()
    {
        console.log(`
        FirstName is ${this.firstname}
        Last name is${this.lastname}
        his Role is${this.role}
        and he is studying ${this.coursecount}
        `);
    },
};

//getinfo();

const dj={
    firstname:"rock",
    lastname:"Dj",
    Role:"Sub-admin",
    coursecount:4,
}
// hitesh.getinfo();
// dj.getinfo();

//bimd gave a refferance of object and run that object
//var djinfo=hitesh.getinfo.bind(dj);
//djinfo();

hitesh.getinfo.call(dj);

