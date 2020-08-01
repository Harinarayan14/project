class TrapeziumClass{
    constructor()
    {
    this.Text1 = createElement("h1");
    this.Text1.html("Trapezium-Area Calculator");
    this.Text1.position(windowWidth/3.5,windowHeight/1.2);
    this.Text2 = createElement("h2");
    this.Text2.html("Enter Value of First Parallel Side");
    this.Text2.position(windowWidth/10,windowHeight);
    this.side1 = createInput("");
    this.side1.position(windowWidth/10,windowHeight*10/9);
    this.Text3 = createElement("h2");
    this.Text3.html("Enter Value of Second Parallel Side");
    this.Text3.position(windowWidth/2.5,windowHeight);
    this.side2 = createInput("");
    this.side2.position(windowWidth/2.5,windowHeight*10/9);
    this.Text4 = createElement("h2");
    this.Text4.html("Enter Value of Height");
    this.Text4.position(windowWidth/1.4,windowHeight);
    this.height = createInput("");
    this.height.position(windowWidth/1.4,windowHeight*10/9);
    this.areaAns = createElement("h2");
    this.areaAns.position(windowWidth/3.5,windowHeight*1.4);
}
loop(){
    var side1Ans = this.side1.value();
    var side2Ans = this.side2.value();
    var heightAns = this.height.value();
    var area = (1*side1Ans+1*side2Ans)*heightAns/2;
    this.areaAns.html("Area: "+ area + " unit square");

    
    textSize(25);
    fill("red");
    text("Refresh the page to select a different calculator.", windowWidth/10, windowHeight*1.6)
    text("Note : Enter only numbers.", windowWidth/10, windowHeight*1.7)

}
}