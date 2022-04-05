var canvas;
let mouseFilter;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  canvas.style('position', 'fixed');
}
  
function draw() {
  background(255);
  
  // line
  strokeWeight(1.0);
  stroke(220, 100);
  let lineSpan = 12; 
  for (let i = 0; i < windowWidth/lineSpan; i++) {
    line(i*lineSpan, 0, i*lineSpan, windowHeight)
  }
  for (let i = 0; i < windowHeight/lineSpan; i++) {
    line(0, i*lineSpan, windowWidth, i*lineSpan)
  }

  // mouse
	translate(mouseX,mouseY);
  noStroke();
  fill('rgba(255, 130, 255, 0.6)');
	drawLiq(14,120,80,500);
  noFill();
  stroke('rgba(255, 130, 255, 0.6)');
	drawLiq(15,90,70,500);
  noFill();
  stroke('rgba(255, 130, 255, 0.6)');
	drawLiq(13,100,82,500);
}


function drawLiq(vNnum,nm,sm,fcm) {
  let raduis = windowHeight/1.8;
	push();
	rotate(frameCount/fcm);
	let dr = TWO_PI/vNnum;
	beginShape();
	for(let i = 0; i  < vNnum + 3; i++){
		let ind = i%vNnum;
		let rad = dr *ind;
		let r = raduis*0.2 + noise(frameCount/nm + ind) * raduis*0.1 + sin(frameCount/sm + ind)*raduis*0.03;
		curveVertex(cos(rad)*r, sin(rad)*r);
	}
	endShape();
	pop();
}