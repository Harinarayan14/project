class ITriangleClass{
    constructor()
    { 
        this.txt1 = createElement("h1");
    this.txt1.html("Isosceles Triangle -Area and Perimeter Calculator");
    this.txt1.position(windowWidth/5,windowHeight/1.2);
    this.txt2 = createElement("h2");
    this.txt2.html("Enter Value of Equal Side");
    this.txt2.position(windowWidth/4.5,windowHeight);
    this.equalSideI = createInput("");
    this.equalSideI.position(windowWidth/4.5,windowHeight*10/9);
    this.txt3 = createElement("h2");
    this.txt3.html("Enter Value of Other Side");
    this.txt3.position(windowWidth/1.5,windowHeight);
    this.otherSideI = createInput("");
    this.otherSideI.position(windowWidth/1.5,windowHeight*10/9);
    this.IareaAns = createElement("h2");
    this.IareaAns.position(windowWidth/5,windowHeight*1.3);
    this.IperimeterAns = createElement("h2");
    this.IperimeterAns.position(windowWidth/5,windowHeight*1.4);


    }
    loop(){
        var equalSide = this.equalSideI.value();
    var otherSide = this.otherSideI.value();
    var Iarea = (Math.sqrt(equalSide*equalSide-otherSide*otherSide/4)*otherSide)/2;
    var Iperimeter= 2*equalSide + otherSide;
    this.IareaAns.html("Area: "+ Iarea + " unit square");
    this.IperimeterAns.html("Perimeter: "+ Iperimeter + " units");
    
    textSize(25);
    fill("red");
    text("Refresh the page to select a different calculator.", windowWidth/10, windowHeight*1.6)
    text("Note : Enter only numbers.", windowWidth/10, windowHeight*1.7)


    }




}