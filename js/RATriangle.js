class RATriangleClass{
    constructor()
    { 
    this.Text1 = createElement("h1");
    this.Text1.html("Right Angled Triangle -Area and Perimeter Calculator");
    this.Text1.position(windowWidth/5,windowHeight/1.2);
    this.Text2 = createElement("h2");;
    this.Text2.html("Enter Value of Base");
    this.Text2.position(windowWidth/4.5,windowHeight);
    this.base = createInput("");
    this.base.position(windowWidth/4.5,windowHeight*10/9);
    this.Text3 = createElement("h2");;
    this.Text3.html("Enter Value of Height");
    this.Text3.position(windowWidth/1.5,windowHeight);
    this.height1 = createInput("");
    this.height1.position(windowWidth/1.5,windowHeight*10/9);
    this.areaAns = createElement("h2");
    this.areaAns.position(windowWidth/5,windowHeight*1.3);
    this.perimeterAns = createElement("h2");
    this.perimeterAns.position(windowWidth/5,windowHeight*1.4);
    this.hypotenuseAns = createElement("h2");
    this.hypotenuseAns.position(windowWidth/5,windowHeight*1.5);


    }
    loop(){
        
    var heightAns = this.height1.value();
    var baseAns = this.base.value();
    var hypotenuse = Math.sqrt(baseAns*baseAns + heightAns*heightAns);
    var area = heightAns * baseAns/2;
    var perimeter = 1*heightAns + 1*baseAns  + 1*hypotenuse;
    this.areaAns.html("Area: "+ area + " unit square");
    this.perimeterAns.html("Perimeter: "+ perimeter + " units");
    this.hypotenuseAns.html("Hypotenuse: "+ hypotenuse + " units");
    
    textSize(25);
    fill("red");
    text("Note : Enter only numbers.", windowWidth/10, windowHeight*1.8)

    }




}