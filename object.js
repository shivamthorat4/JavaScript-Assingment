alert("Alert on incoming malicious virus!!");



var Rectangle = function(width,height) //declaring object with "constructor function"
{
    this.width = width;
    this.height = height;
    this.area = function()
    {
        console.log("Area of the Rectangle is : " +this.width * this.height);
    }
} 

var myRect1 = new Rectangle(10,20); //calling objects/making intances
var myRect2 = new Rectangle(30,40);
var myRect3 = new Rectangle(50,60);
var myRect4 = new Rectangle(30,90);

console.log(myRect1.width); //calling objects' properties
console.log(myRect1.height);
myRect1.area();
console.log("---------------------");
//document.write(myRect1.width);
//document.write(myRect1.height);
console.log(myRect2.width); //calling objects' properties
console.log(myRect2.height);
myRect2.area();
console.log("---------------------")
console.log(myRect3.width); //calling objects' properties
console.log(myRect3.height);
myRect3.area();
console.log("---------------------")
console.log(myRect4.width); //calling objects' properties
console.log(myRect4.height);
myRect4.area();
console.log("---------------------")




//2) Adding getArea method using prototype property
Rectangle.prototype.getArea = function()
{
    console.log("Getting Area using prototype property : " +this.width * this.height);
}

console.log(Rectangle.prototype);
myRect1.getArea(); //calling method which is created using prototype property
myRect2.getArea();
myRect3.getArea();
myRect4.getArea();


Rectangle.prototype.getAreaForRect = function(width,height)  //this is because of Global scope and LOcal scope.
{
    console.log("Getting Area using prototype property : " +width * height);
}

console.log(Rectangle.prototype);
myRect1.getAreaForRect(4,5); //calling method which is created using prototype property
myRect2.getAreaForRect(5,6);
myRect3.getAreaForRect(7,8);
myRect4.getAreaForRect(11,2);


//4) make a variable whose value is an object with firstName and lastName properties
var obj = {
    firstName : "Shivam",
    lastName : "Thorat"
};
console.log(obj);

//5) try reading the middleName from a property by assigning to it.

var obj1 = {
    firstName : "Shivam",
    middleName : "Vikas",
    lastName : "Thorat"
};
console.log(obj1);


//6)Create a string with what looks like an object with firstName and lastName,use eval() property.

var myString = new String('2 + 2')
eval(myString.toString());
console.log(eval(myString.toString()));





//8) Creating a Person dynamic object
function Person(firstName,lastName,age,skills,dateOfbirth,address,married,profession)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skills = skills;
    this.dateOfbirth = dateOfbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}

Person1 = new Person("Shivam","Thorat",99,['python','c'],"13/04/1998",{city:"Pune",pincode:411045},"false","Software Engineer");
Person2 = new Person("Sagar","thorat",3,["cpp","c#"],"15/07/1990",{city:"Shrirampur",pincode:413715},"false","Analyst");

console.log(Person1);
console.log(Person2);

print=function()       //printing the object using Global print method.
{
    console.log(Person1);
    console.log(Person2);
}();



//9) Akshay and Twinkle program
function Person(firstName,lastName,age,skills,dateOfbirth,address,married,profession)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skills = skills;
    this.dateOfbirth = dateOfbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}
Shubham = new Person("Shubham","Kalpe",99,['java','cpp'],"04/04/1989",{city:"Pune",pincode:411045},"false","A4");
Pallavi = new Person("Pallavi",55,["html5","js"],"08/12/1998","false","Jr.SDE");
Akku = new Person("Akku",10,"11/06/2005","false","SDE");

var Pallavi = Object.create(Akshay); //inheriting the common properties/storing Akshay object in Twinkle
var Akku = Object.create(Pallavi);  //it has become Heirarchical inheritance now--> Akshay is a supermost class 
//var Aarav = Object.create(Akshay);
print = function()
{
    console.log(Sagar);
    console.log(Pallavi.lastName);
    console.log(Pallavi.address);
    console.log(Akku.lastName);
    console.log(Akku.skills);
    console.log(Akku.address);
    console.log(Pallavi.firstName);
}();



//10) Bank Account Application

function Account(accountNumber,accountHolderName,accountBalance) 
{
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
}
function Savings(isSalary,accountNumber,accountHolderName,accountBalance)
{
    this.isSalary = isSalary;
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
    this.withdraw = function(amount)
    {
        if(this.accountBalance > 0 && this.accountBalance < 100)
        {
            console.log("Insuffient balance! You have less than 100 rs.");
        } 
        if((this.accountBalance >= 100 && this.accountBalance <= 500) && amount === 200)
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Your money after debiting : " + this.accountBalance);
        }
        if((this.accountBalance > 500 && this.accountBalance <= 5000) && amount === 500 || amount === 2000);
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Your money after debiting : " + this.accountBalance);
        }
        if((this.accountBalance > 5000) && amount === 200 || amount === 500 || amount ===2000)
        {
            this.accountBalance = this.accountBalance - amount;
            console.log("Your money after debiting : " + this.accountBalance);
        }
        if(this.accountBalance <= 0)
        {
            console.log("ATM says! I cant give you the money, Please deposit some amount to withdraw later, Now Please goo!");
        }
      
    };
    this.getCurrentBalance = function()
    {
        console.log("Your current Account balance is : " + this.accountBalance);
    };
}
function Current(odLimit,accountNumber,accountHolderName,accountBalance)
{
    this.odLimit = odLimit;
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.accountBalance = accountBalance;
    this.withdraw = function(amount)
    {
        if(odLimit > 500)
        {
            if((this.accountBalance > 500 && this.accountBalance < 2000) && amount === 200 || amount === 500)
            {
                this.accountBalance = this.accountBalance - amount;
                console.log("Your balance after debiting the money is : " +this.accountBalance);
            }
            if((this.accountBalance > 2000) && amount=== 200 || amount === 500 || amount === 2000)
            {
                this.accountBalance = this.accountBalance - amount;
                console.log("Your balance after debiting the money is : " +this.accountBalance);
            }
        } 
        else
        {  
            console.log("Your odLimit for Current acocunt is less than 500");
        }  
    };
    this.getCurrentBalance = function()
    {
        console.log("Your current Account balance is : " + this.accountBalance);
    };
       
}

var obj1 = new Account(6546567,"Shivam",413715);
console.log(obj1);
//var Savings = Object.create(Account); //inheriting the common properties
//var Current = Object.create(Account); //inheriting the common properties

var objSavings = new Savings("true",56765,"Vijay",413710); //creating Savings object
console.log(objSavings);
console.log(objSavings.withdraw(500));
console.log(objSavings.getCurrentBalance());

var objCurrent = new Current(333,9765642,"Sagar",413715); //creating Current object
console.log(objCurrent);
console.log(objCurrent.withdraw(1500));
console.log(objCurrent.getCurrentBalance());
