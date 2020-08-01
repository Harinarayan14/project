class SphereClass{
    constructor()
    {
    this.Text1 = createElement("h1");
    this.Text1.html("Sphere- Area and Volume Calculator");
    this.Text1.position(windowWidth/5,windowHeight/1.2);
    this.Text2 = createElement("h2");
    this.Text2.html("Enter Value of Radius");
    this.Text2.position(windowWidth/4.5,windowHeight);
    this.radius = createInput("");
    this.radius.position(windowWidth/3.5,windowHeight*10/9);
    this.TsareaAns = createElement("h2");
    this.TsareaAns.position(windowWidth/100,windowHeight*1.3);
    this.VolumeAns = createElement("h2");
    this.VolumeAns.position(windowWidth/100,windowHeight*1.4);
    this.DiameterAns = createElement("h2");
    this.DiameterAns.position(windowWidth/4,windowHeight*1.2);
}
loop(){
    var radiusAns = this.radius.value();
    var Tsarea = 4*PI*radiusAns*radiusAns;
    var Tsarea1 = 4*22*radiusAns*radiusAns;
    if(Tsarea1%7 === 0){
        Tsarea1 = Tsarea1/7;
        console.log("clear")
        this.TsareaAns.html("Total Surface Area: "+ Tsarea + " unit square ="+Tsarea1+" unit square");
    }
    else if(Tsarea1%7 != 0){
        var ts = Tsarea1%7;
        Tsarea1 = Tsarea1 - ts;
        Tsarea1 = Tsarea1/7
    this.TsareaAns.html("Total Surface Area: "+ Tsarea + " unit square ="+Tsarea1+"+"+ts+"/7 unit square");
    }
    
    
    
    var Volume = (radiusAns* radiusAns* radiusAns*4*PI)/3;
    var Volume1 = (radiusAns* radiusAns* radiusAns*4*22)/3;
    if(Volume1%7 === 0){
        Volume1 = Volume1/7;
        this.VolumeAns.html("Curved Surface Area: "+ Volume + " unit square ="+Volume1+" unit square");
    }
    else{
        var v = Volume1%7;
        Volume1 = Volume1 - v;
        Volume1 = Volume1/7
    this.VolumeAns.html("Volume: "+ Volume + " unit square ="+Volume1+"+"+v+"/7 unit square");
    }
    var Diameter = radiusAns*2;
    this.DiameterAns.html("Diameter: "+ Diameter + " units");
    
    textSize(25);
    fill("red");
    text("Refresh the page to select a different calculator.", windowWidth/10, windowHeight*1.6)
    text("Note : Enter only numbers.", windowWidth/10, windowHeight*1.7)

}
}