class GPClass{
    constructor()
    {
    this.Text1 = createElement("h1");
    this.Text1.html("GP - n<sup>th</sup> Term and Sum of n terms Calculator");
    this.Text1.position(windowWidth/3.5,windowHeight/1.2);
    this.Text2 = createElement("h2");
    this.Text2.html("Enter the first term(a).");
    this.Text2.position(windowWidth/10,windowHeight);
    this.first1 = createInput("");
    this.first1.position(windowWidth/10,windowHeight*10/9);
    this.Text3 = createElement("h2");
    this.Text3.html("Enter the common ratio(r).");
    this.Text3.position(windowWidth/2.5,windowHeight);
    this.commonR  = createInput("");
    this.commonR.position(windowWidth/2.5,windowHeight*10/9);
    this.Text4 = createElement("h2");
    this.Text4.html("Enter the number of terms(n).");
    this.Text4.position(windowWidth/1.4,windowHeight);
    this.n = createInput("");
    this.n.position(windowWidth/1.4,windowHeight*10/9);
    this.nthTermAns = createElement("h2");
    this.nthTermAns.position(windowWidth/5,windowHeight*1.2);
    this.SumAns = createElement("h2");
    this.SumAns.position(windowWidth/5,windowHeight*1.3);
}
    loop(){
        var firstAns = this.first1.value();
        var commonRAns = this.commonR.value();
        var nAns = this.n.value();
        var nthTerm = 1*firstAns*Math.pow(commonRAns,(nAns-1));
        var Sum = (1*firstAns-1*firstAns*Math.pow(commonRAns,(nAns)))/(1-(1*commonRAns));
        this.nthTermAns.html("nth term:"+ nthTerm );
        this.SumAns.html("Sum of n terms:"+ Sum );
          

    }
}