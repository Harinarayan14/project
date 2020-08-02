class PlequationClass{
    constructor()
    {  
    this.Text1 = createElement("h1");
    this.Text1.html("Solve for x and y.");
    this.Text1.position(windowWidth/3,windowHeight/1.5);
    this.text = createElement("h2");
    this.text.html("First Equation");
    this.text.position(windowWidth/10,windowHeight/1.3);
    this.Text2 = createElement("h3");
    this.Text2.html("Enter the coefficient of x(a<sub>1</sub>).");
    this.Text2.position(windowWidth/10,windowHeight/1.1);
    this.a1 = createInput("");
    this.a1.position(windowWidth/5,windowHeight*1.1);
    this.Text3 = createElement("h3");
    this.Text3.html(" x + ");
    this.Text3.position(windowWidth/3,windowHeight*1.07);
    this.Text4 = createElement("h3");
    this.Text4.html("Enter the coefficient of y(b<sub>1</sub>).");
    this.Text4.position(windowWidth/3.1,windowHeight);
    this.b1  = createInput("");
    this.b1.position(windowWidth/2.7,windowHeight*1.1);
    this.Text5 = createElement("h3");
    this.Text5.html("y + ");
    this.Text5.position(windowWidth/1.95,windowHeight*1.07);
    this.Text6 = createElement("h3");
    this.Text6.html("Enter the constant term(c<sub>1</sub>).");
    this.Text6.position(windowWidth/1.9,windowHeight/1.1);
    this.c1  = createInput("");
    this.c1.position(windowWidth/1.85,windowHeight*1.1);
    this.Text8 = createElement("h3");
    this.Text8.html("=   0 ");
    this.Text8.position(windowWidth/1.45,windowHeight*1.07);
    this.text1 = createElement("h2");
    this.text1.html("Second Equation");
    this.text1.position(windowWidth/10,windowHeight*1.2);
    this.Text9 = createElement("h3");
    this.Text9.html("Enter the coefficient of x(a<sub>2</sub>).");
    this.Text9.position(windowWidth/10,windowHeight*1.3);
    this.a2 = createInput("");
    this.a2.position(windowWidth/5,windowHeight*1.5);
    this.Text10 = createElement("h3");
    this.Text10.html(" x + ");
    this.Text10.position(windowWidth/3,windowHeight*1.48);
    this.Text11 = createElement("h3");
    this.Text11.html("Enter the coefficient of y(b<sub>2</sub>).");
    this.Text11.position(windowWidth/3.1,windowHeight*1.4);
    this.b2  = createInput("");
    this.b2.position(windowWidth/2.7,windowHeight*1.5);
    this.Text12 = createElement("h3");
    this.Text12.html("y + ");
    this.Text12.position(windowWidth/1.95,windowHeight*1.48);
    this.Text13 = createElement("h3");
    this.Text13.html("Enter the constant term(c<sub>2</sub>).");
    this.Text13.position(windowWidth/1.9,windowHeight*1.3);
    this.c2  = createInput("");
    this.c2.position(windowWidth/1.85,windowHeight*1.5);
    this.Text14 = createElement("h3");
    this.Text14.html("=   0");
    this.Text14.position(windowWidth/1.45,windowHeight*1.48);
    this.x = createElement("h2");
    this.x.position(windowWidth/5,windowHeight*1.65);
    this.y = createElement("h2");
    this.y.position(windowWidth/5,windowHeight*1.75 );
}
loop (){
    var a3 = this.a1.value();
    var b3 = this.b1.value();
    var c3 = this.c1.value();
    var a4 = this.a2.value();
    var b4 = this.b2.value();
    var c4 = this.c2.value();
    var d= a3/a4;
    var e = b3/b4;
    var f = c3/c4;
    var xAns, yAns;
    if(a3!=" " && b3!="" && c3!= " " && a4!=" " && b4!="" && c4!= " " ){
    if (d!=e){
        var xValue = (b3*c4 - b4*c3)/(a3*b4 - a4*b3); 
        var yValue = (c3*a4 - c4*a3)/(a3*b4 - a4*b3);         
        xAns =" x = " + xValue;
        yAns =" y = " + yValue;
    }
    else{
        if(e!=f){
            xAns = " There are no solutions for this pair of linear equations."
            yAns ="";
        }
        else{
            xAns =" There are infinite solutions for this pair of linear equations."
            yAns ="";

        }
         
    } 
    this.x.html(xAns);
    this.y.html(yAns);
}
  
     }
}