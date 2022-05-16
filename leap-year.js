let year = 2022;
let n = 20;
let count = 0;
while (count != n)
    {
        year = year + 1;
           if ((year % 400 == 0)|| (year % 4 == 0 && year % 100 != 0)) {
              count++; 
              console.log("Leap Years : "+ year);
            }
    }
