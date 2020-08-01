class SquareClass{
    constructor()
    {
    this.Text1 = createElement("h1");
    this.Text1.html("Square-Area and Perimeter Calculator");
    this.Text1.position(windowWidth/5,windowHeight/1.2);
    this.Text2 = createElement("h3");
    this.Text2.html("Enter Value of Side");
    this.Text2.position(windowWidth/4.5,windowHeight);
    this.SideI = createInput("");
    this.SideI.position(windowWidth/3.5,windowHeight*10/9);
    this.areaAns = createElement("h2");
    this.areaAns.position(windowWidth/5,windowHeight*1.2);
    this.perimeterAns = createElement("h2");
    this.perimeterAns.position(windowWidth/5,windowHeight*1.3);

}
loop(){
    
    var side = this.SideI.value();
    var area = side * side;
    var perimeter = side *4;
    this.areaAns.html("Area: "+ area + " unit²");
    this.perimeterAns.html("Perimeter: "+ perimeter + " units");
    
    textSize(25);
    fill("red");
    text("Refresh the page to select a different calculator.", windowWidth/10, windowHeight*1.5)
    text("Note : Enter only numbers.", windowWidth/10, windowHeight*1.6)

}
}