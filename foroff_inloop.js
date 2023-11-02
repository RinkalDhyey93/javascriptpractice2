//for off array

const names=["youtube","facebook","instagram","netflix","amazon"];
for(const n of names)
{
    console.log(n);
}
//for in object
const symbols={
    yt:"youtube",
    ig:"Instagram",
    fb:"facebook",
    lco:"Lear code online"
};


for(const n in symbols)
{
    console.log(symbols[n]);
    console.log(`key is :${n} and value is :${symbols[n]}`);
}