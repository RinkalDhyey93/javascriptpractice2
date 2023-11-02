var user=function(firstname,coursecount)
{
    this.firstname=firstname;
    this.coursecount=coursecount;
    this.getcoursecount=function()
    {
        console.log(`course count is:${this.coursecount}`);
    };
};
user.prototype.getfirstname=function(){
    console.log(`your first naem is:${this.firstname}`);
}



var rinkal=new user("rinkal",2)
rinkal.getcoursecount();
if(rinkal.hasOwnProperty("firstname"))
{
    rinkal.getfirstname();
}

//console.log(rinkal.firstname);
//console.log(rinkal);
var sam=new user("sam",1);
sam.getcoursecount();
//console.log(sam);
sam.getfirstname();