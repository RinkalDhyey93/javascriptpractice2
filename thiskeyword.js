//for all regual function calls,this points to window object

console.log(this);

var user={
    firstname:"rinkal",
    coursecount:4,
    getcoursecount:function()
    {
        console.log("Line 7",this);
    },
};
user.getcoursecount();

