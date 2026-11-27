const name="Mansi Kshirsagar";
 const company="Wisdom Sprouts";
 product_description=`sad aaefdf aeafksm.snjsbww dshd,rtyrdfbb   ,,ddrfd`
msg='Welcome ${name}'

console.log(typeof name)//string

console.log(company.length);
//accessing chara
console.log(company[7]);
console.log(company.charAt(7));

//concatenation
SName="Rohit";
Lname="Sharma"
full_name=SName+" "+Lname
console.log(full_name);
fName=SName.concat(" " ,Lname)
console.log(fName);

//case conversion
console.log(full_name.toLowerCase());
console.log(full_name.toUpperCase());
console.log("_________________________________");


//searching String
user="mandar"
console.log(user.charAt(0).toUpperCase()+user.slice("1","6"));
console.log(company.startsWith("W"));
console.log(company.endsWith("W"));
console.log(company.includes("@@@@@@@"));
console.log(company.indexOf("zzz"));
 console.log(company.indexOf("zzz"));
  console.log(company.indexOf("W"));
   console.log(company.indexOf("Sprouts"));


   str="javascript is Fun! Fun and easy to Learn javascript";
      console.log(str.indexOf("Fun"));
      console.log(str.lastIndexOf("Fun"));


      //extracting slice,substring(), substr()
//1.accept single parameter in slice
//2.accept negative parameter slice(-5,-10) 
//3.accept parameter in sequence order substring
      //slice return
      console.log(str.substring(0,10));
      console.log(str.slice(0,10));

       //slice return
      console.log(str.substring(0,10));
    Uname="            Padmini"
     //slice return
      console.log(Uname.trim().length);
   if(Uname.trim().length)
   {
     //slice return
    
      console.log("enter the Value");


   }

   //slice return
    console.log(str.replace("javascript", "React JS"));
    console.log(str.replaceAll("javascript", "React JS"));
    ///split

    numberr="12345"
    fruit="Banana*Apple*orange"
    console.log(numberr.split(""));
     console.log(fruit.split(""));