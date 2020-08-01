class CubeClass{
    constructor()
    {
        this.Text1 = createElement("h1");
        this.Text1.html("Cube-Area and Volume Calculator");
        this.Text1.position(windowWidth/5,windowHeight/1.2);
        this.Text2 = createElement("h2");
        this.Text2.html("Enter Value of Side(no unit)");
        this.Text2.position(windowWidth/4.5,windowHeight);
        this.side = createInput("");
        this.side.position(windowWidth/3.5,windowHeight*10/9);
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
    var sideAns = this.side.value();
    var Tsarea = 6* sideAns* sideAns;
    this.TsareaAns.html("Total Surface Area: "+ Tsarea + " unit square");
    var Lsarea = 4* sideAns* sideAns;
    this.LsareaAns.html("Lateral Surface Area: "+ Lsarea + " unit square");
    var Volume = sideAns* sideAns* sideAns;
    this.VolumeAns.html("Volume: "+ Volume + " cubic unit");
    var Diagonal = sideAns;
    var Diagonal1 = sideAns * Math.sqrt(3);
    this.DiagonalAns.html("Diagonal: "+ Diagonal + "√3 units = " + Diagonal1 + " units");
    
    textSize(25);
    fill("red");
    text("Refresh the page to select a different calculator.", windowWidth/10, windowHeight*1.8)
    text("Note : Enter only numbers.", windowWidth/10, windowHeight*1.9)
}
}