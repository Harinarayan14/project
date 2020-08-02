class STriangleClass{
    constructor()
    { 
    this.Stext1 = createElement("h1");
    this.Stext1.html("Triangle -Area(Heron's Formula) and Perimeter Calculator");
    this.Stext1.position(windowWidth/5,windowHeight/1.2);
    this.Stext2 = createElement("h2");
    this.Stext2.html("Enter Value of First Side");
    this.Stext2.position(windowWidth/10,windowHeight);
    this.sideS1 = createInput("");
    this.sideS1.position(windowWidth/10,windowHeight*10/9);
    this.Stext12 = createElement("h2");
    this.Stext12.html("Enter Value of Second Side");
    this.Stext12.position(windowWidth/2.5,windowHeight);
    this.sideS2 = createInput("");
    this.sideS2.position(windowWidth/2.5,windowHeight*10/9);
    this.Stext22 = createElement("h2");
    this.Stext22.html("Enter Value of Third Side");
    this.Stext22.position(windowWidth/1.4,windowHeight);
    this.sideS3 = createInput("");
    this.sideS3.position(windowWidth/1.4,windowHeight*10/9);
    this.areaS1 = createElement("h2");
    this.areaS1.position(windowWidth/5,windowHeight*1.2);
    this.perimeterS1 = createElement("h2");
    this.perimeterS1.position(windowWidth/5,windowHeight*1.3);
    this.semiperimeterS1 = createElement("h2");
    this.semiperimeterS1.position(windowWidth/5,windowHeight*1.4);


    }
    loop(){
        var side1 = this.sideS1.value();
    var side2 = this.sideS2.value();
    var side3 = this.sideS3.value();
    var semiperimeter= (1*side1 + 1*side2 + 1*side3)/2;
    var areaAnswerS1 = Math.sqrt(semiperimeter*(semiperimeter-side1)*(semiperimeter-side2)*(semiperimeter-side3));
    var perimeter1 = 1*side1 + 1*side2 + 1*side3;
    this.areaS1.html("Area: "+ areaAnswerS1 + " unit square");
    this.perimeterS1.html("Perimeter: "+ perimeter1 + " units");
    this.semiperimeterS1.html("Semi-Perimeter: "+ semiperimeter + " units");
    
    textSize(25);
    fill("red");
    
    text("Note : Enter only numbers.", windowWidth/10, windowHeight*1.7)

    }




}