let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
canvas = <HTMLCanvasElement>document.getElementById("canvas1");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray: Particle[];
let particleArray2: ParticleCircles[];

class Particle{
    public moveRadius: number;
    public step: number;
    public position: number;
    public size: number;
    
    constructor(moveRadius:number, step:number, position:number, size:number){
        this.moveRadius = moveRadius;
        this.step = step;
        this.position = position;
        this.size = size;

    }
    draw(){
        ctx.beginPath();
        ctx.arc(Math.cos(this.position)*this.moveRadius + 
        canvas.width/2,
        Math.sin(this.position)*this.moveRadius + canvas.height/2,
        this.size, 0, Math.PI*2);
        ctx.closePath();
        ctx.fillStyle = "white";
        ctx.fill();
    }
    update(){
        this.position += this.step;
        this.draw();
    }
}

function init(){
    particleArray = [];
    for(let i=0; i<500; i++){
        let moveRadius = Math.random() * canvas.width;
        let step = (Math.random()*0.002)+0.002;
        let position = Math.random()*(Math.PI*2);
        let size = (Math.random()*8)+ 0.5;

        particleArray.push(new Particle(moveRadius, step, position, size));
    }
}

function animate(){
    requestAnimationFrame(animate);
    ctx.fillStyle = 'rgba(0,0,0,0.01)';
    ctx.fillRect(0,0,innerWidth, innerHeight);

    for(let i=0; i < particleArray.length; i++){
        particleArray[i].update();
    }
}
//////////////////////////////////////////////////////////////////////////////////////

class ParticleCircles{
    public moveRadius: number;
    public step: number;
    public position: number;
    public size: number;

    constructor(moveRadius:number, step:number, position:number, size:number){
        this.moveRadius = moveRadius;
        this.step = step;
        this.position = position;
        this.size = size;

    }
    draw(){
        ctx.beginPath();
        ctx.arc(Math.cos(this.position)*this.moveRadius + 
        canvas.width/2,
        Math.sin(this.position)*this.moveRadius + canvas.height/2,
        this.size, 0, Math.PI*2);
        ctx.closePath();
        ctx.strokeStyle = "lime";
        ctx.stroke();
    }
    update(){
        this.position += this.step;
        this.draw();
    }
}

function init2(){
    particleArray = [];
    for(let i=0; i<500; i++){
        let moveRadius = Math.random() * canvas.width;
        let step = (Math.random()*0.002)+0.002;
        let position = Math.random()*(Math.PI*2);
        let size = (Math.random()*20)+ 10;

        particleArray.push(new ParticleCircles(moveRadius, step, position, size));
    }
}

function animate2(){
    requestAnimationFrame(animate2);
    ctx.fillStyle = 'rgba(0,0,0,0.01)';
    ctx.fillRect(0,0,innerWidth, innerHeight);

    for(let i=0; i < particleArray.length; i++){
        particleArray[i].update();
    }
}
/////////////////////////////////////////////////////////////////////////////////////
class ParticleStar{
    public moveRadius: number;
    public step: number;
    public position: number;
    public size: number;

    constructor(moveRadius:number, step:number, position:number, size:number){
        this.moveRadius = moveRadius;
        this.step = step;
        this.position = position;
        this.size = size;

    }
    draw(){
        let x = Math.cos(this.position)*this.moveRadius + 
        canvas.width/2;
        let y = Math.sin(this.position)*this.moveRadius + canvas.height/2;
        drawStar(x, y, 5, this.size, this.size/2);
        ctx.fillStyle = "aqua";
        ctx.fill();
    }
    update(){
        this.position += this.step;
        this.draw();
    }
}

function init3(){
    particleArray = [];
    for(let i=0; i<200; i++){
        let moveRadius = Math.random() * canvas.width;
        let step = (Math.random()*0.002)+0.002;
        let position = Math.random()*(Math.PI*2);
        let size = (Math.random()*25)+ 25;

        particleArray.push(new ParticleStar(moveRadius, step, position, size));
    }
}

function animate3(){
    requestAnimationFrame(animate2);
    ctx.fillStyle = 'rgba(0,0,0,0.01)';
    ctx.fillRect(0,0,innerWidth, innerHeight);

    for(let i=0; i < particleArray.length; i++){
        particleArray[i].update();
    }
}

function drawStar(positionX:number, positionY:number, spikes:number, outerRadius:number, innerRadius:number){
    let rotation = Math.PI/2 *3;
    let x = positionX;
    let y = positionY;
    let step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(positionX, positionY - outerRadius);
    for(let i=0; i<spikes; i++){
        x = positionX + Math.cos(rotation)* outerRadius;
        y = positionY + Math.sin(rotation)* outerRadius;
        ctx.lineTo(x,y);
        rotation += step;

        x = positionX + Math.cos(rotation)* innerRadius;
        y = positionY + Math.sin(rotation)* innerRadius;
        ctx.lineTo(x,y);
        rotation += step;
    }
    ctx.lineTo(positionX, positionY - outerRadius);
    ctx.closePath();

}
/////////////////////////////////////////////////////////////////////////////////////
class ParticleSquare{
    public moveRadius: number;
    public step: number;
    public position: number;
    public size: number;

    constructor(moveRadius:number, step:number, position:number, size:number){
        this.moveRadius = moveRadius;
        this.step = step;
        this.position = position;
        this.size = size;

    }
    draw(){
        let x = Math.cos(this.position)*this.moveRadius + 
        canvas.width/2;
        let y = Math.sin(this.position)*this.moveRadius + canvas.height/2;
        drawSquare(x, y, 2, this.size, this.size);
        ctx.fillStyle = "purple";
        ctx.fill();
    }
    update(){
        this.position += this.step;
        this.draw();
    }
}

function init4(){
    particleArray = [];
    for(let i=0; i<100; i++){
        let moveRadius = Math.random() * canvas.width;
        let step = (Math.random()*0.002)+0.002;
        let position = Math.random()*(Math.PI*2);
        let size = (Math.random()*25)+ 25;

        particleArray.push(new ParticleSquare(moveRadius, step, position, size));
    }
}

function animate4(){
    requestAnimationFrame(animate2);
    ctx.fillStyle = 'rgba(0,0,0,0.01)';
    ctx.fillRect(0,0,innerWidth, innerHeight);

    for(let i=0; i < particleArray.length; i++){
        particleArray[i].update();
    }
}

function drawSquare(positionX:number, positionY:number, spikes:number, outerRadius:number, innerRadius:number){
    let rotation = Math.PI/2 *3;
    let x = positionX;
    let y = positionY;
    let step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(positionX, positionY - outerRadius);
    for(let i=0; i<spikes; i++){
        x = positionX + Math.cos(rotation)* outerRadius;
        y = positionY + Math.sin(rotation)* outerRadius;
        ctx.lineTo(x,y);
        rotation += step;

        x = positionX + Math.cos(rotation)* innerRadius;
        y = positionY + Math.sin(rotation)* innerRadius;
        ctx.lineTo(x,y);
        rotation += step;
    }
    ctx.lineTo(positionX, positionY - outerRadius);
    ctx.closePath();

}

////////////////////////////////////////////////////////////////////////////////////
class ParticleHexagon{
    public moveRadius: number;
    public step: number;
    public position: number;
    public size: number;

    constructor(moveRadius:number, step:number, position:number, size:number){
        this.moveRadius = moveRadius;
        this.step = step;
        this.position = position;
        this.size = size;

    }
    draw(){
        let x = Math.cos(this.position)*this.moveRadius + 
        canvas.width/2;
        let y = Math.sin(this.position)*this.moveRadius + canvas.height/2;
        drawHexagon(x, y, 3, this.size, this.size);
        ctx.strokeStyle = "gold";
        ctx.stroke();
    }
    update(){
        this.position += this.step;
        this.draw();
    }
}

function init5(){
    particleArray = [];
    for(let i=0; i<200; i++){
        let moveRadius = Math.random() * canvas.width;
        let step = (Math.random()*0.002)+0.002;
        let position = Math.random()*(Math.PI*2);
        let size = (Math.random()*25)+ 25;

        particleArray.push(new ParticleHexagon(moveRadius, step, position, size));
    }
}

function animate5(){
    requestAnimationFrame(animate2);
    ctx.fillStyle = 'rgba(0,0,0,0.01)';
    ctx.fillRect(0,0,innerWidth, innerHeight);

    for(let i=0; i < particleArray.length; i++){
        particleArray[i].update();
    }
}

function drawHexagon(positionX:number, positionY:number, spikes:number, outerRadius:number, innerRadius:number){
    let rotation = Math.PI/2 *3;
    let x = positionX;
    let y = positionY;
    let step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(positionX, positionY - outerRadius);
    for(let i=0; i<spikes; i++){
        x = positionX + Math.cos(rotation)* outerRadius;
        y = positionY + Math.sin(rotation)* outerRadius;
        ctx.lineTo(x,y);
        rotation += step;

        x = positionX + Math.cos(rotation)* innerRadius;
        y = positionY + Math.sin(rotation)* innerRadius;
        ctx.lineTo(x,y);
        rotation += step;
    }
    ctx.lineTo(positionX, positionY - outerRadius);
    ctx.closePath();

}
////////////////////////////////////////////////////////////////////////////////////

function girarPuntos(){
    init();
    animate();
}
function girarCirculos(){
    init2();
    animate2();
}
function girarEstrella(){
    init3();
    animate3();
}
function girarCuadrado(){
    init4();
    animate4();
}
function girarHexagono(){
    init5();
    animate5();
}

window.addEventListener("resize", 
    function(){
        canvas.width = this.innerWidth;
        canvas.height = this.innerHeight;
        init();
    }
)