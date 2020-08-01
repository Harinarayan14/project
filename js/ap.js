class ap {
    constructor(){
        
        this.Text1 = createElement("h1");
    this.Text1.html("AP- n<sup>th</sup> Term and Sum of n terms Calculator");
    this.Text1.position(windowWidth/3.5,windowHeight/1.2);
    this.Text2 = createElement("h2");
    this.Text2.html("Enter the first term(a).");
    this.Text2.position(windowWidth/10,windowHeight);
    this.first1 = createInput("");
    this.first1.position(windowWidth/10,windowHeight*10/9);
    this.Text3 = createElement("h2");
    this.Text3.html("Enter the common difference(d).");
    this.Text3.position(windowWidth/2.5,windowHeight);
    this.commonD  = createInput("");
    this.commonD.position(windowWidth/2.5,windowHeight*10/9);
    this.Text4 = createElement("h2");
    this.Text4.html("Enter the number of terms(n).");
    this.Text4.position(windowWidth/1.4,windowHeight);
    this.nI  = createInput("");
    this.nI.position(windowWidth/1.4,windowHeight*10/9);
    this.nthTermAns = createElement("h2");
    this.nthTermAns.position(windowWidth/5,windowHeight*1.2);
    this.SumAns = createElement("h2");
    this.SumAns.position(windowWidth/5,windowHeight*1.3);
    }
    loop(){
        var firstTerm = this.first1.value();
        var d =  this.commonD.value();
        var n =  this.nI.value();
        var nthTermval = 1*firstTerm+(1*(n-1)*d);
        var sumval = (n*(1*firstTerm+1*nthTermval))/2;
    
        this.nthTermAns.html("n<sup>th</sup> term: "+ nthTermval);
        this.SumAns.html("Sum of n terms: "+ sumval ); 
       
    textSize(25);
    fill("red");
    text("Refresh the page to select a different calculator.", windowWidth/10, windowHeight*1.6)
         }
}
