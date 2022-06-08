class CannonBall {
  constructor(x, y) {
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    this.trajectory = [];
    World.add(world, this.body);
  }

  //Metódo que faz a atirar a bala de canhão
  shoot() {
   var newAngle = cannon.angle - 28;
    newAngle = newAngle *(3.14/180)
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {
      x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)})
  }

  //Metódo que mostra a bala de canhão
  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();

    // Criando a trajetória da bala de canhão
    if (this.body.velocity.x > 0 && pos.x > 10) {
      var position = [pos.x, pos.y]; //variável de matriz que guarda posições x e y
      this.trajectory.push(position); //inserindo as posições x e y na matriz this.trajectory
    }

    //for => percorre uma matriz, em nosso caso a this.trajectory, pega as posições x e y da matriz e insere imagem
    for (var i = 0; i < this.trajectory.length; i++) {
      image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
    }
  }
}
