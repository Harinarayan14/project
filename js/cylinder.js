class CylinderClass{
    constructor()
    {
    this.Text1 = createElement("h1");
    this.Text1.html("Cylinder-Area and Volume Calculator");
    this.Text1.position(windowWidth/5,windowHeight/1.2);
    this.Text2 = createElement("h2");
    this.Text2.html("Enter Value of Radius");
    this.Text2.position(windowWidth/4.5,windowHeight);
    this.radiusI = createInput("");
    this.radiusI.position(windowWidth/4.5,windowHeight*10/9);
    this.Text4 = createElement("h2");
    this.Text4.html("Enter Value of Height");
    this.Text4.position(windowWidth/1.5,windowHeight);
    this.height = createInput("");
    this.height.position(windowWidth/1.5,windowHeight*10/9);
    this.TsareaAns = createElement("h2");
    this.TsareaAns.position(windowWidth/5,windowHeight*1.3);
    this.CsareaAns = createElement("h2");
    this.CsareaAns.position(windowWidth/5,windowHeight*1.4);
    this.VolumeAns = createElement("h2");
    this.VolumeAns.position(windowWidth/5,windowHeight*1.5);
}

loop(){
    var radiusAns = this.radiusI.value();
    var heightAns = this.height.value();
    var Tsarea = 2*PI*radiusAns*(radiusAns*1+heightAns*1);
    var Tsarea1 = 2*22*radiusAns*(radiusAns*1+heightAns*1);
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

    var Csarea = 2*PI*radiusAns*heightAns;
    var Csarea1 = 2*22*radiusAns*heightAns;
    
    if(Csarea1%7 === 0){
                Csarea1 = Csarea1/7;
                this.CsareaAns.html("Curved Surface Area: "+ Csarea + " unit square ="+Csarea1+" unit square");
            }
            else{
                var cs = Csarea1%7;
                Csarea1 = Csarea1 - cs;
                Csarea1 = Csarea1/7
            this.CsareaAns.html("Curved Surface Area: "+ Csarea + " unit square ="+Csarea1+"+"+cs+"/7 unit square");
            }
    var Volume = PI*radiusAns*radiusAns*heightAns;
    var Volume1 = 22*radiusAns*radiusAns*heightAns;
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

    
    textSize(25);
    fill("red");
    text("Note : Enter only numbers.", windowWidth/10, windowHeight*1.8)

}
}