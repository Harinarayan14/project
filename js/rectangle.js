class RectClass{
    constructor()
    {
    this.Text1 = createElement("h1");
    this.Text1.html("Rectangle-Area and Perimeter Calculator");
    this.Text1.position(windowWidth/5,windowHeight/1.2);
    this.Text2 = createElement("h2");
    this.Text2.html("Enter Value of Breadth");
    this.Text2.position(windowWidth/4.5,windowHeight);
    this.breadth = createInput("");
    this.breadth.position(windowWidth/4.5,windowHeight*10/9);
    this.Text3 = createElement("h2");
    this.Text3.html("Enter Value of Length");
    this.Text3.position(windowWidth/1.5,windowHeight);
    this.length1 = createInput("");
    this.length1.position(windowWidth/1.5,windowHeight*10/9);
    
    this.areaAns = createElement("h2");
    this.areaAns.position(windowWidth/5,windowHeight*1.3);
    this.perimeterAns = createElement("h2");
    this.perimeterAns.position(windowWidth/5,windowHeight*1.4);
    }
    loop(){
        var lengthAns = this.length1.value();
        var breadthAns = this.breadth.value();
        var area = lengthAns * breadthAns;
        var perimeter = 2*lengthAns+2*breadthAns;
        this.areaAns.html("Area: "+ area + " unit square");
        this.perimeterAns.html("Perimeter: "+ perimeter + " units");
        
    textSize(25);
    fill("red");
    text("Refresh the page to select a different calculator.", windowWidth/10, windowHeight*1.7)
    text("Note : Enter only numbers.", windowWidth/10, windowHeight*1.8)
    }
}
