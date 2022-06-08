class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon_image = loadImage("assets/canon.png"); //carregando imagem do canhão
    this.cannon_base = loadImage("assets/cannonBase.png"); // carregando imagem da base do canhão
  }

  display() {

    //controle para o canhão
   if (keyIsDown(RIGHT_ARROW) && this.angle<70  ) {
      this.angle += 1;
    }

    if (keyIsDown(LEFT_ARROW) && this.angle>-30 ) {
      this.angle -= 1;
    }

    push();    //Salva as configurações de estilo do desenho atual
    translate(this.x, this.y);   // mudando a posição de x e y
    rotate(this.angle);   // rotacionando o ângulo
    imageMode(CENTER);    //referência de posição central para as imagens
    image(this.cannon_image, 0, 0, this.width, this.height);  //mostrar imagem da bala de canhão
    pop();   //retira uma configuração
    image(this.cannon_base, 70, 20, 200, 200);  //mostrar imagem da base do canhão
    noFill();  //sem cor
  }
}
