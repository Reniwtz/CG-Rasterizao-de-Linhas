let color_buffer = new Canvas("canvas");
color_buffer.clear();

function MidPointLineAlgorithm(x1, y1, x2, y2, color_0, color_1) {
  var d = 0;

  var dx = Math.abs(x2 - x1);
  var dy = Math.abs(y2 - y1);

  var dx2 = 2 * dx;
  var dy2 = 2 * dy;

  var ix = x1 < x2 ? 1 : -1;
  var iy = y1 < y2 ? 1 : -1;

  var x = x1;
  var y = y1;

  var color = [4];
  color = color_0;
  var r = (color_1[0] - color_0[0]) / dx;
  var g = (color_1[1] - color_0[1]) / dx;
  var b = (color_1[2] - color_0[2]) / dx;

  var r2 = (color_1[0] - color_0[0]) / dy;
  var g2 = (color_1[1] - color_0[1]) / dy;
  var b2 = (color_1[2] - color_0[2]) / dy;
  
  var r3 = (color_1[0] - color_0[0]) / x;
  var g3 = (color_1[1] - color_0[1]) / x;
  var b3 = (color_1[2] - color_0[2]) / x;

  color[0] = color[0] + r3;
  color[1] = color[1] + g3;
  color[2] = color[2] + b3;
  color_buffer.putPixel(x, y, color)
  if (dx >= dy) {
    while (true) {
      color[0] = color[0] + r;
      color[1] = color[1] + g;
      color[2] = color[2] + b;
      color_buffer.putPixel(x, y, color)
      if (x == x2)
        break;
      x += ix;
      d += dy2;
      if (d > dx) {
        y += iy;
        d -= dx2;
      }
    }
  } else {
    while (true) {
      color[0] = color[0] + r2;
      color[1] = color[1] + g2;
      color[2] = color[2] + b2;
      color_buffer.putPixel(x, y, color)
      if (y == y2)
        break;
      y += iy;
      d += dx2;
      if (d > dy) {
        x += ix;
        d -= dy2;
      }
    }
  } 
  color[0] = color[0] + r2;
  color[1] = color[1] + g2;
  color[2] = color[2] + b2;
  color_buffer.putPixel(x, y, color)
}

function DrawTriangle(x1, y1, x2, y2, x3, y3, color_0, color_1, color_2) {

  MidPointLineAlgorithm(x1, y1, x2, y2, color_0, color_1);
  MidPointLineAlgorithm(x2, y2, x3, y3, color_1, color_2);
  MidPointLineAlgorithm(x3, y3, x1, y1, color_2, color_0);

}
//DrawTriangle(25, 30, 50, 100, 100, 15, [255, 0, 0, 255], [0, 0, 255, 255], [0, 255, 0, 255]);

MidPointLineAlgorithm(66, 66, 96, 96, [255, 0, 0, 255], [255, 255, 0, 255]); 
MidPointLineAlgorithm(66, 66, 96, 81, [255, 0, 0, 255], [255, 255, 0, 255]); //testando o primeiro quadrante
MidPointLineAlgorithm(64, 66, 64, 96, [255, 0, 0, 255], [255, 255, 0, 255]); 
MidPointLineAlgorithm(66, 66, 81, 96, [255, 0, 0, 255], [255, 255, 0, 255]); //Testando o segundo quadrante
MidPointLineAlgorithm(62, 66, 32, 96, [255, 0, 0, 255], [255, 255, 0, 255]);  
MidPointLineAlgorithm(62, 66, 47, 96, [255, 0, 0, 255], [255, 255, 0, 255]); //testando o terceiro quadrante
MidPointLineAlgorithm(62, 64, 32, 64, [255, 0, 0, 255], [255, 255, 0, 255]); 
MidPointLineAlgorithm(62, 66, 32, 81, [255, 0, 0, 255], [255, 255, 0, 255]); //testando o quarto quadrante
MidPointLineAlgorithm(62, 62, 32, 32, [255, 0, 0, 255], [255, 255, 0, 255]); 
MidPointLineAlgorithm(62, 62, 32, 47, [255, 0, 0, 255], [255, 255, 0, 255]); //testando o quinto quadrante
MidPointLineAlgorithm(64, 62, 64, 32, [255, 0, 0, 255], [255, 255, 0, 255]);  
MidPointLineAlgorithm(62, 62, 47, 32, [255, 0, 0, 255], [255, 255, 0, 255]); //testando o sexto quadrante
MidPointLineAlgorithm(66, 62, 96, 32, [255, 0, 0, 255], [255, 255, 0, 255]);  
MidPointLineAlgorithm(66, 62, 81, 32, [255, 0, 0, 255], [255, 255, 0, 255]); //testando o sétimo quadrante
MidPointLineAlgorithm(66, 64, 96, 64, [255, 0, 0, 255], [255, 255, 0, 255]); 
MidPointLineAlgorithm(66, 62, 96, 47, [255, 0, 0, 255], [255, 255, 0, 255]); //testando o oitavo quadrante