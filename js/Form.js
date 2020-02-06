class Form {

  constructor() {
    this.input = createInput("Email");
    this.button = createButton('Confirm');
    this.greeting = createElement('h2');
    this.yes1 = createButton('Yes I will');
    this.no1 = createButton('No I dont believe that It will affect the Climate!');
    this.yes2 = createButton('Yes I will');
    this.no2 = createButton('No I dont believe in doing so!');
    this.yes3 = createButton('Yes I do and Its a very serious thing!');
    this.no3 = createButton('Nah Its irrelevant ;)')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Survey 2020 by Falken-7");
    title.position(displayWidth/2-80,0);
    var q1 = createElement('h2');
       q1.html("Q1. Would to like to use Paper Bags instead of Plastic bags?");
         q1.position(displayWidth/2-240,displayHeight/2-200);
    var q2 = createElement('h2');
        q2.html("Q2. Would you donate funds for Charity?");
           q2.position(displayWidth/2-240,displayHeight/2-80);
    var q3 = createElement('h2');
        q3.html("Q3.Do you believe in climate change?");
          q3.position(displayWidth/2-240,displayHeight/2+40); 
   var th = createElement('h2');
      th.html("Thanks for participating!");
        th.position(displayWidth/2-240,displayHeight/2+140);      
    this.yes1.position(displayWidth/2-200,displayHeight/2-140);     
    this.no1.position(displayWidth/2-200,displayHeight/2-110);
    this.yes2.position(displayWidth/2-200,displayHeight/2-30);     
    this.no2.position(displayWidth/2-200,displayHeight/2);     
    this.yes3.position(displayWidth/2-200,displayHeight/2+90);     
    this.no3.position(displayWidth/2-200,displayHeight/2+120);    

    this.input.position(displayWidth/2-80,displayHeight/2-240);
    this.button.position(displayWidth/2-20,displayHeight/2-210);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Your Email is now registered as - " + player.name)
      this.greeting.position(displayWidth/2-200,displayHeight/2-270);
    });
      this.yes1.mousePressed(()=>{
        this.yes1.hide();
        this.no1.hide();
      });
      this.no1.mousePressed(()=>{
        this.yes1.hide();
        this.no1.hide();
      });
      this.no2.mousePressed(()=>{
        this.yes2.hide();
        this.no2.hide();
      });
      this.yes2.mousePressed(()=>{
        this.yes2.hide();
        this.no2.hide();
      });
      this.yes3.mousePressed(()=>{
        this.yes3.hide();
        this.no3.hide();
      });
      this.no3.mousePressed(()=>{
        this.yes3.hide();
        this.no3.hide();
      });
     
      
    

 

  }}
