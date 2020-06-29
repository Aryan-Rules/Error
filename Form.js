class Form {

  constructor() {
    this.input = createInput("NAME");
    this.input2 = createInput("Email-Id");
    this.button = createButton('Continue');
    this.greeting = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h1')
    title.html("DONATE FOR A CAUSE");
    title.position(50, 0);

    this.input.position(130, 160);
    this.input2.position(130,200);
    this.button.position(170, 300);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.input2.hide();
      this.button.hide();
      player.name = this.input.value();
      player.Emailid=this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 100);
    });

  }
}
