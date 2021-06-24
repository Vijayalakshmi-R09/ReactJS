let wmap=new WeakMap();
let key1={name:"Name"};
let key2={job:"JOB"};
wmap.set(key1,"ZackAddy");
wmap.set(key2,"Student");
console.log("Fecthing key1  value: "+wmap.get(key1));
key2=null;
console.log("Key2 value after null: "+wmap.get(key2));