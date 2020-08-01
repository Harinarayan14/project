class ConeClass{
constructor()
{
    this.Text1 = createElement("h1");
    this.Text1.html("Cone- Area and Volume Calculator");
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
    this.SHeightAns = createElement("h2");
    this.SHeightAns.position(windowWidth/5,windowHeight*1.3);
    this.TsareaAns = createElement("h2");
    this.TsareaAns.position(windowWidth/80,windowHeight*1.4);
    this.CsareaAns = createElement("h2");
    this.CsareaAns.position(windowWidth/80,windowHeight*1.5);
    this.VolumeAns = createElement("h2");
    this.VolumeAns.position(windowWidth/100,windowHeight*1.6);

}    
loop(){
   var radiusAns = this.radiusI.value();
    var heightAns = this.height.value();
    var SHeight = Math.sqrt(radiusAns*radiusAns+heightAns*heightAns)
    this.SHeightAns.html("Slant Height: "+ SHeight + " units");
    var Tsarea = (PI*radiusAns*(1*radiusAns+1*SHeight)); 
    var Tsarea1 = (22*1*radiusAns*(1*radiusAns+1*SHeight));
    if(Tsarea1%7 === 0){
        Tsarea1 = Tsarea1/7;
        this.TsareaAns.html("Total Surface Area: "+ Tsarea + " unit square ="+Tsarea1+" unit square");
    }
    else if(Tsarea1%7 != 0){
        var ts = Tsarea1%7;
        Tsarea1 = Tsarea1 - ts;
        Tsarea1 = Tsarea1/7
    this.TsareaAns.html("Total Surface Area: "+ Tsarea + " unit square ="+Tsarea1+"+"+ts+"/7 unit square");
    }
    var Csarea = PI*radiusAns*SHeight;
    var Csarea1 = 22*radiusAns*SHeight;
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
    var Volume = (PI*radiusAns*radiusAns*heightAns)/3;
    var Volume1 = (22*radiusAns*radiusAns*heightAns);
    if(Volume1%21 === 0){
        Volume1 = Volume1/21;
        this.VolumeAns.html("Volume: "+ Volume + " cubic unit ="+Volume1+" cubic unit");
    }
    else{
        var v1 = Volume1%21;
        if(v1%3===0){
            Volume1 = Volume1/3;
            var v2 = Volume1%7
            this.VolumeAns.html("Volume: "+ Volume + " cubic unit ="+Volume1+"+"+v2+"/7 cubic unit");
            
        }
        else if(v1%7===0){
            Volume1 = Volume1/7;
            var v3 = Volume1%3
            this.VolumeAns.html("Volume: "+ Volume + " cubic unit ="+Volume1+"+"+v3+"/3 cubic unit");
            
        }
        else{

            var v = Volume1%21;
            Volume1 = Volume1 - v;
            Volume1 = Volume1/21
            this.VolumeAns.html("Volume of Cone: "+ Volume + " cubic unit ="+Volume1+"+"+v+"/21 cubic unit");
        }
        
    }
    
    textSize(25);
    fill("red");
    text("Refresh the page to select a different calculator.", windowWidth/10, windowHeight*1.8)
    text("Note : Enter only numbers.", windowWidth/10, windowHeight*1.9)
}
}