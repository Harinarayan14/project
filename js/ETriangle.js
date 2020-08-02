class ETriangleClass{
    constructor()
    { 
        this.text1 = createElement("h1");
        this.text1.html("Equilateral Triangle - Area and Perimeter Calculator");
        this.text1.position(windowWidth/5,windowHeight/1.2);
        this.text2 = createElement("h2");
        this.text2.html("Enter Value of Side");
        this.text2.position(windowWidth/4.5,windowHeight);
        this.sideI = createInput("");
        this.sideI.position(windowWidth/3.5,windowHeight*10/9);
        this.areaAns1 = createElement("h2");
        this.areaAns1.position(windowWidth/5,windowHeight*1.3);
        this.perimeterAns1 = createElement("h2");
        this.perimeterAns1.position(windowWidth/5,windowHeight*1.4);


    }
    loop(){
        var sideAns = this.sideI.value();
    var area1 = sideAns*sideAns * Math.sqrt(3)/4;
    var perimeter1 = 3*sideAns;
    this.areaAns1.html("Area: "+ area1 + " unit square");
    this.perimeterAns1.html("Perimeter: "+ perimeter1 + " units");

    
    textSize(25);
    fill("red");
    text("Note : Enter only numbers.", windowWidth/10, windowHeight*1.7)

    }




}