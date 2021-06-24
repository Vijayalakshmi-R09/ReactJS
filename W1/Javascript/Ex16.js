const arr=["Bijli","Hitch","Lexi","Keighs"];
console.log("Array Elements: "+arr);
arr[0]="Krish";
console.log("After assigining value at 0 index: "+arr);
arr.push("David");
console.log("After Adding new element: "+arr);
console.log("Size of the Array: "+arr.length);
console.log("Index of value 'Lexi': "+arr.indexOf("Lexi"));
arr.pop();
console.log("After deleting specific element: "+arr);
arr.splice(1,3);
console.log("Performing Slice Operation: "+arr);




