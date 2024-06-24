// <--swap 2 numbers without using third variable.-->

a=10;
b=15;
document.write("<b>Initial values a and b:</b>" +a +"," +b);
a=a+b;
b=a-b;
a=a-b;
document.write("<br><br>");
document.write("<b>After swap values a and b:</b>" +a +"," +b);
document.write("<br><br>")

// <--temperature in Celsius and convert into Fahrenheit.-->

C=20;
document.write("Temparature in Celsius:" +C);
F = (1.8 * C) + 32;
document.write("<br><br>");
document.write("Temparature in Fahrenheit:" +F);
document.write("<br><br>");


// <--area of rectangle-->

length=20;
width=30;
document.write("Length and Width values:" +length +"," +width);

Area=length*width;
document.write("<br><br>");
document.write("Area of rectangle:" +Area);
document.write("<br><br>")

// <--calculate sum of digit-->

x=25;
document.write("Enter the x value:" +x);
y=x%10;
document.write("<br><br>");
z=parseInt(x/10);
Sum=y+z;
document.write("Sum of the digits:" +Sum);



