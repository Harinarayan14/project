class CIclass {
    constructor(){
    this.Text1 = createElement("h1");
    this.Text1.html("Compound Interest Calculator");
    this.Text1.position(windowWidth/3.5,windowHeight/1.2);
    this.Text2 = createElement("h2");
    this.Text2.html("Enter Principal(In ₹)");
    this.Text2.position(windowWidth/10,windowHeight);
    this.principal1 = createInput("");
    this.principal1.position(windowWidth/10,windowHeight*10/9);
    this.Text3 = createElement("h2");
    this.Text3.html("Enter Rate of Interest(In %)");
    this.Text3.position(windowWidth/2.5,windowHeight);
    this.rate  = createInput("");
    this.rate.position(windowWidth/2.5,windowHeight*10/9);
    this.Text4 = createElement("h2");
    this.Text4.html("Enter Time (in years)");
    this.Text4.position(windowWidth/1.4,windowHeight);
    this.time = createInput("");
    this.time.position(windowWidth/1.4,windowHeight*10/9);
    }
    loop(){
        var principalAns = this.principal1.value();
        var rateAns = this.rate.value();
        var timeAns = this.time.value();
        var Amount = 1*principalAns*(Math.pow((1+(rateAns/100)),timeAns));
        var Interest = 1*Amount-1*principalAns;
        textSize(25);
        text("Compound Interest: ₹"+ Interest,windowWidth/5,windowHeight*1.3 )
        text("Amount: ₹"+ Amount ,windowWidth/5,windowHeight*1.4 )

    }
}
