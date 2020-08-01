var SquareB, RectB, TriangleB, CircleB, TrapeziumB, ParallelogramB, CubeB, CuboidB, SphereB,
 CylinderB,ConeB, HemisphereB, SInterestB , CInterestB , APB , GPB , QequationB, PLequationB;
 
 var trianglePressed = false;

var APstate =0, Circlestate =0, CompoundIstate =0, Conestate =0, Cubestate =0, Cuboidstate =0,
Cylinderstate =0, GPstate =0,Parallelogramstate=0,Hemispherestate=0, Qequationstate=0,
Plequationstate =0 ,SIntereststate=0, Spherestate=0, Trapeziumstate=0, Rectstate=0, Squarestate=0
,RATrianglestate = 0,ITrianglestate = 0,ETrianglestate = 0,STrianglestate = 0;



function preload (){
   bg = loadImage("bg.jpg")
}
function setup(){   
    canvas = createCanvas(windowWidth- 30, windowHeight *2);
    SquareB = createButton("Square");
    SquareB.position(windowWidth/10,windowHeight/3.4);
    RectB = createButton("Rectangle");
    RectB.position(windowWidth/10,windowHeight/3.03);
    TriangleB = createButton("Triangle");
    TriangleB.position(windowWidth/10,windowHeight/2.72);
    CircleB = createButton("Circle");
    CircleB.position(windowWidth/10,windowHeight/2.47);
    TrapeziumB = createButton("Trapezium");
    TrapeziumB.position(windowWidth/10,windowHeight/2.27);
    ParallelogramB = createButton("Parallelogram");
    ParallelogramB.position(windowWidth/10,windowHeight/2.1);
    CubeB = createButton("Cube");
    CubeB.position(windowWidth/4.3,windowHeight/3.4);
    CuboidB = createButton("Cuboid");
    CuboidB.position(windowWidth/4.3,windowHeight/3.03);
    CylinderB = createButton("Cylinder");
    CylinderB.position(windowWidth/4.3,windowHeight/2.72);
    ConeB = createButton("Cone");
    ConeB.position(windowWidth/4.3,windowHeight/2.47);
    SphereB = createButton("Sphere");
    SphereB.position(windowWidth/4.3,windowHeight/2.27);
    HemisphereB = createButton("Hemisphere");
    HemisphereB.position(windowWidth/4.3,windowHeight/2.1);
    SInterestB = createButton("Simple Interest");
    SInterestB.position(windowWidth/2.8,windowHeight/3.4);
    CInterestB = createButton("Compound Interest");
    CInterestB.position(windowWidth/2.8,windowHeight/3.03);
    APB = createButton("Arithmetic Progressions");
    APB.position(windowWidth/2.04,windowHeight/3.4);
    GPB = createButton("Geometric Progressions");
    GPB.position(windowWidth/2.04,windowHeight/3.03);
    QequationB = createButton("Quadratic Equations");
    QequationB.position(windowWidth/1.55,windowHeight/3.4);
    PLequationB = createButton("Pair of linear equations in two variables");
    PLequationB.position(windowWidth/1.55,windowHeight/3.03);
    RATriangleB = createButton("Right-Angled Triangle");
    ITriangleB = createButton("Isosceles Triangle");
    ETriangleB = createButton("Equilateral Triangle");
    STriangleB = createButton("Scalene Triangle (Heron's Formula)");

}
function draw(){
         background(bg);
         textSize(30);
         fill("floralwhite");
         rect(windowWidth/100000,windowHeight/1.6,windowWidth/1.035,windowHeight*1.3)
         fill("black")
         text("Maths Solver", windowWidth/2.3, windowHeight/ 10);
         line(windowWidth/2.3, windowHeight/ 9.7, windowWidth/1.75, windowHeight/ 9.7);
         fill("yellow");
         rect(windowWidth/12,windowHeight/4.3,windowWidth/8,windowHeight/3.5)
         fill("black")
         textSize(20);
         text("2-D Shapes",windowWidth/11,windowHeight/5);
         fill("green");
         rect(windowWidth/4.75,windowHeight/4.3,windowWidth/8,windowHeight/3.5)
         fill("black")
         textSize(20);
         text("3-D Shapes",windowWidth/4.75,windowHeight/5);
         fill("tomato");
         rect(windowWidth/2.95,windowHeight/4.3,windowWidth/8,windowHeight/3.5)
         fill("black")
         textSize(20);
         text("Interests",windowWidth/2.75,windowHeight/5);
         fill("teal");
         rect(windowWidth/2.14,windowHeight/4.3,windowWidth/6.5,windowHeight/3.5)
         fill("black")
         textSize(20);
         text("Progressions",windowWidth/2,windowHeight/5);
         fill("violet");
         rect(windowWidth/1.6,windowHeight/4.3,windowWidth/4.5,windowHeight/3.5)
         fill("black")
         textSize(20);
         text("Algebra",windowWidth/1.5,windowHeight/5);
         if(trianglePressed===true){
         textSize(25);
         fill("red");
         text("Select.", windowWidth/10, windowHeight/1.7)}
         
         Pressed();
         if(APstate ===1){
            
            ap1.loop();
         }
         if(Circlestate ===1){
            
            Circle1.loop();
         }
         if(CompoundIstate ===1){
            
            CompoundI1.loop();
         }
         if(Conestate ===1){
            
            Cone1.loop();
         }
         if(Cuboidstate ===1){
            
            Cuboid1.loop();
         }
         if(Cubestate ===1){
            
            Cube1.loop();
         }
         if(GPstate ===1){
            
            GP1.loop();
         }
         if(Cylinderstate ===1){
            
            Cylinder1.loop();
         }
         if(Parallelogramstate ===1){
            
            Parallelogram1.loop();
         }
         if(Hemispherestate ===1){
            
            Hemisphere1.loop();
         }
         if(Qequationstate ===1){
            
            Qequation1.loop();
         }
         if(Plequationstate ===1){
            
            Plequation1.loop();
         }
         if(SIntereststate ===1){
            
            SInterest1.loop();
         }
         if(Rectstate ===1){
            
            Rect1.loop();
         }
         if(Squarestate ===1){
            
            Square1.loop();
         }
         if(Spherestate ===1){
            
            Sphere1.loop();
         }
         if(Trapeziumstate ===1){
            
            Trapezium1.loop();
         }
         if(RATrianglestate ===1){
            
            RATriangle1.loop();
         }
         if(ETrianglestate ===1){
            
            ETriangle1.loop();
         }
         if(STrianglestate ===1){
            
            STriangle1.loop();
         }
         if(ITrianglestate ===1){
            
            ITriangle1.loop();
         }

     }
     
     function Pressed(){
        APB.mousePressed(()=>{
            APstate = 1;
            ap1 = new ap();
        })
        CircleB.mousePressed(()=>{
            Circlestate = 1;
            Circle1 = new circleClass();
        })
        CInterestB.mousePressed(()=>{
            CompoundIstate = 1;
            CompoundI1 = new CIclass();
        })
        ConeB.mousePressed(()=>{
            Conestate = 1;
            Cone1 = new ConeClass();
        })
        CubeB.mousePressed(()=>{
            Cubestate = 1;
            Cube1 = new CubeClass();
        })
        CuboidB.mousePressed(()=>{
            Cuboidstate = 1;
            Cuboid1 = new CuboidClass();
        })
        CylinderB.mousePressed(()=>{
            Cylinderstate = 1;
            Cylinder1 = new CylinderClass();
        })
        GPB.mousePressed(()=>{
            GPstate = 1;
            GP1 = new GPClass();
        })
        HemisphereB.mousePressed(()=>{
            Hemispherestate = 1;
            Hemisphere1 = new HemisphereClass();
        })
        ParallelogramB.mousePressed(()=>{
         Parallelogramstate = 1;
         Parallelogram1 = new ParallelogramClass();
        })
        PLequationB.mousePressed(()=>{
         Plequationstate = 1;
         Plequation1 = new PlequationClass();
        })
        QequationB.mousePressed(()=>{
         Qequationstate = 1;
         Qequation1 = new QequationClass();
        })
        RectB.mousePressed(()=>{
         Rectstate = 1;
         Rect1 = new RectClass();
        })
        
        SquareB.mousePressed(()=>{
         Squarestate = 1;
         Square1 = new SquareClass();
        })
        SInterestB.mousePressed(()=>{
         SIntereststate = 1;
         SInterest1 = new SInterestClass();
        })
        SphereB.mousePressed(()=>{
         Spherestate = 1;
         Sphere1 = new SphereClass();
        })
        TrapeziumB.mousePressed(()=>{
         Trapeziumstate = 1;
         Trapezium1 = new TrapeziumClass();
        })    
        
        TriangleB.mousePressed(()=>{
         trianglePressed = true;
         RATriangleB.position(windowWidth/10,windowHeight/1.5);
         ITriangleB.position(windowWidth/3,windowHeight/1.5);
         ETriangleB.position(windowWidth/2,windowHeight/1.5);
         STriangleB.position(windowWidth/1.4,windowHeight/1.5);

         RATriangleB.mousePressed(()=>{
            RATrianglestate = 1;
            RATriangle1 = new RATriangleClass();
            ITriangleB.hide();
            ETriangleB.hide();
            STriangleB.hide();

         })
         ITriangleB.mousePressed(()=>{
            ITrianglestate = 1;
            ITriangle1 = new ITriangleClass();
            RATriangleB.hide();
            ETriangleB.hide();
            STriangleB.hide();
            
         })
         ETriangleB.mousePressed(()=>{
            ETrianglestate = 1;
            ETriangle1 = new ETriangleClass();
            ITriangleB.hide();
            RATriangleB.hide();
            STriangleB.hide();
            
         })
         STriangleB.mousePressed(()=>{
            STrianglestate = 1;
            STriangle1 = new STriangleClass();
            ITriangleB.hide();
            ETriangleB.hide();
            RATriangleB.hide();
            
         })
        })   
     }
