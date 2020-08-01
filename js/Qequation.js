class QequationClass{
    constructor()
    {     
    this.Text1 = createElement("h1");
    this.Text1.html("Solve for x");
    this.Text1.position(windowWidth/2.8,windowHeight/1.3);
    this.Text2 = createElement("h2");
    this.Text2.html("Enter the coefficient of x²(a).");
    this.Text2.position(windowWidth/10,windowHeight/1.1);
    this.a = createInput("");
    this.a.position(windowWidth/5,windowHeight*1.1);
    this.Text3 = createElement("h3");
    this.Text3.html(" x² + ");
    this.Text3.position(windowWidth/3,windowHeight*1.07);
    this.Text4 = createElement("h2");
    this.Text4.html("Enter the coefficient of x(b).");
    this.Text4.position(windowWidth/3.1,windowHeight);
    this.b  = createInput("");
    this.b.position(windowWidth/2.7,windowHeight*1.1);
    this.Text5 = createElement("h3");
    this.Text5.html("x + ");
    this.Text5.position(windowWidth/1.95,windowHeight*1.07);
    this.Text6 = createElement("h2");
    this.Text6.html("Enter the constant term(c).");
    this.Text6.position(windowWidth/1.9,windowHeight/1.1);
    this.c  = createInput("");
    this.c.position(windowWidth/1.85,windowHeight*1.1);
    this.Text8 = createElement("h3");
    this.Text8.html("=   0");
    this. Text8.position(windowWidth/1.48,windowHeight*1.07);
    this.alpha = createElement("h2");
    this.alpha.position(windowWidth/5,windowHeight*1.3);
    this.beta = createElement("h2");
    this.beta.position(windowWidth/2,windowHeight*1.3);
    this.text = createElement("h2");
    this.text.position(windowWidth/3.2,windowHeight*1.4);

}

loop(){
    var a1 = this.a.value();
    var b1 = this.b.value();
    var c1 = this.c.value();
    var  d = (Math.sqrt(b1*b1-(4*a1*c1)));
    var  e = 2*a1;
    var x1 = (-1*b1+d)/e;
    var  x2 = (-1*b1-d)/e;
        
        this.alpha.html("x = "+ x1);
        this.beta.html("x = "+ x2 ); 


    if (x1!=NaN || x2 !=NaN){   
        this.text.html("");
    }else{
        this.text.html("This quadratic equation has no real roots.");
    } 
      
    textSize(25);
    fill("red");
    text("Refresh the page to select a different calculator.", windowWidth/10, windowHeight*1.6)
        
     }
}