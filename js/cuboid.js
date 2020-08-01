class CuboidClass{
    constructor()
    {
    this.Text1 = createElement("h1");
    this.Text1.html("Cuboid -Area and Volume Calculator");
    this.Text1.position(windowWidth/3.5,windowHeight/1.2);
    this.Text2 = createElement("h2");
    this.Text2.html("Enter Value of Length");
    this.Text2.position(windowWidth/10,windowHeight);
    this.length1 = createInput("");
    this.length1.position(windowWidth/10,windowHeight*10/9);
    this.Text3 = createElement("h2");
    this.Text3.html("Enter Value of Breadth");
    this.Text3.position(windowWidth/2.5,windowHeight);
    this.breadth = createInput("");
    this.breadth.position(windowWidth/2.5,windowHeight*10/9);
    this.Text4 = createElement("h2");
    this.Text4.html("Enter Value of Height");
    this.Text4.position(windowWidth/1.4,windowHeight);
    this.height = createInput("");
    this.height.position(windowWidth/1.4,windowHeight*10/9);
    this.TsareaAns = createElement("h2");
    this.TsareaAns.position(windowWidth/80,windowHeight*1.4);
    this.LsareaAns = createElement("h2");
    this.LsareaAns.position(windowWidth/80,windowHeight*1.5);
    this.VolumeAns = createElement("h2");
    this.VolumeAns.position(windowWidth/80,windowHeight*1.6);
    this.DiagonalAns = createElement("h2");
    this.DiagonalAns.position(windowWidth/5,windowHeight*1.3);
}
loop(){
    var lengthAns = this.length1.value();
    var breadthAns = this.breadth.value();
    var heightAns = this.height.value();
    var Tsarea = 2* lengthAns*breadthAns+2* lengthAns*heightAns+2* heightAns*breadthAns;
    this.TsareaAns.html("Total Surface Area: "+ Tsarea + " unit square");
    var Lsarea = 2*heightAns*(1*lengthAns+1*breadthAns)
    this.LsareaAns.html("Lateral Surface Area: "+ Lsarea + " unit square");
    var Volume = lengthAns* breadthAns* heightAns;
    this.VolumeAns.html("Volume: "+ Volume + " cubic unit");
    var Diagonal = Math.sqrt(1*lengthAns*lengthAns+1*breadthAns*breadthAns+1*heightAns*heightAns)
    this.DiagonalAns.html("Diagonal: "+ Diagonal + " units");
    textSize(25);
    fill("red");
    text("Refresh the page to select a different calculator.", windowWidth/10, windowHeight*1.8)
    text("Note : Enter only numbers.", windowWidth/10, windowHeight*1.9)

}
}