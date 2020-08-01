class SInterestClass{
    constructor()
    {
    this.Text1 = createElement("h1");
    this.Text1.html("Simple Interest Calculator");
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
    this.InterestAns = createElement("h2");
    this.InterestAns.position(windowWidth/5,windowHeight*1.3);
    this.AmountAns = createElement("h2");
    this.AmountAns.position(windowWidth/5,windowHeight*1.4);
}
loop(){
    var principalAns = this.principal1.value();
    var rateAns = this.rate.value();
    var timeAns = this.time.value();
    var Interest = (principalAns*rateAns*timeAns)/100;
    this.InterestAns.html("Simple Interest: ₹"+ Interest );
    var Amount = 1*Interest + 1*principalAns;
    this.AmountAns.html("Amount: ₹"+ Amount );
      
    textSize(25);
    fill("red");
    text("Refresh the page to select a different calculator.", windowWidth/10, windowHeight*1.6)
        

}
}