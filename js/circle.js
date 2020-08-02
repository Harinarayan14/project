class circleClass{
    constructor(){
        this.Text1 = createElement("h1");
        this.Text1.html(" Circle -Area and Circumference Calculator");
        this.Text1.position(windowWidth/5,windowHeight/1.2);
        this.Text2 = createElement("h2");
        this.Text2.html("Enter Value of Radius");
        this.Text2.position(windowWidth/4.5,windowHeight);
        this.radiusI = createInput("");
        this.radiusI.position(windowWidth/3.5,windowHeight*10/9);
        this.diameter = createElement("h3");
        this.diameter.position(windowWidth/4,windowHeight*1.2);
        this.originalPi = createElement("h2");
        this.originalPi.position(windowWidth/100,windowHeight*1.3);
        this.areaAns = createElement("h3");
        this.areaAns.position(windowWidth/100,windowHeight*1.5);
        this.circumferenceAns = createElement("h3");
        this.circumferenceAns.position(windowWidth/100,windowHeight*1.6);
        this.pi = createElement("h2");
        this.pi.position(windowWidth/3,windowHeight*1.3);
        this.areaAns1 = createElement("h3");
        this.areaAns1.position(windowWidth/3,windowHeight*1.5);
        this.circumferenceAns1 = createElement("h3");
        this.circumferenceAns1.position(windowWidth/3,windowHeight*1.6);
        this.fractionPi = createElement("h2");
        this.fractionPi.position(windowWidth/1.5,windowHeight*1.3);
        this.areaAns2= createElement("h3");
        this.areaAns2.position(windowWidth/1.5,windowHeight*1.5);
        this.circumferenceAns2 = createElement("h3");
        this.circumferenceAns2.position(windowWidth/1.5,windowHeight*1.6);
    
    }
    
loop(){
    this.originalPi.html("For original value of Pi <br>(upto 15 decimals)");
    this.pi.html("For Pi = 3.14");
    this.fractionPi.html("For Pi = 22/7");
    var radius = this.radiusI.value();
    console.log(radius);    
    var area = radius * radius * PI;
    var circumference = radius * PI * 2;
    var area1 = radius * radius * 3.14;
    var circumference1 = radius * 3.14 * 2;
    var area2 = radius * radius * 22;
    var circumference2 = radius * 22 * 2;
    var diameter1 = radius* 2
    this.diameter.html("Diameter: "+ diameter1 +" units")
    this.areaAns.html("Area: "+ area + " unit square");
    this.circumferenceAns.html("Circumference: "+ circumference + " units");
    this.areaAns1.html("Area: "+ area1 + " unit square");
    this.circumferenceAns1.html("Circumference: "+ circumference1 + " units");
    if(area2%7===0){
        this.areaAns2.html("Area: "+ area2/7 + " unit square");
        this.circumferenceAns2.html("Circumference: "+ circumference2/7 + " units");} 
    else{
        var area3 = area2%7
        area2 = area2 - (area2%7);
        var circumference3 = circumference2%7
        circumference2 = circumference2 - (circumference2%7);
        
        
        this.areaAns2.html("Area: "+ area2 + "+"+ area3+ "/7 unit square");
        this.circumferenceAns2.html("Circumference: "+ circumference2+ "+"+ circumference3 + "/7units");
    }
    textSize(25);
    fill("red");
    text("Note : Enter only numbers.", windowWidth/10, windowHeight*1.75)
}
}