var canvas;
var ctx;
canvas = document.getElementById("canvas1");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var particleArray;
var particleArray2;
var Particle = /** @class */ (function () {
    function Particle(moveRadius, step, position, size) {
        this.moveRadius = moveRadius;
        this.step = step;
        this.position = position;
        this.size = size;
    }
    Particle.prototype.draw = function () {
        ctx.beginPath();
        ctx.arc(Math.cos(this.position) * this.moveRadius +
            canvas.width / 2, Math.sin(this.position) * this.moveRadius + canvas.height / 2, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = "white";
        ctx.fill();
    };
    Particle.prototype.update = function () {
        this.position += this.step;
        this.draw();
    };
    return Particle;
}());
function init() {
    particleArray = [];
    for (var i = 0; i < 500; i++) {
        var moveRadius = Math.random() * canvas.width;
        var step = (Math.random() * 0.002) + 0.002;
        var position = Math.random() * (Math.PI * 2);
        var size = (Math.random() * 8) + 0.5;
        particleArray.push(new Particle(moveRadius, step, position, size));
    }
}
function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'rgba(0,0,0,0.01)';
    ctx.fillRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
    }
}
//////////////////////////////////////////////////////////////////////////////////////
var ParticleCircles = /** @class */ (function () {
    function ParticleCircles(moveRadius, step, position, size) {
        this.moveRadius = moveRadius;
        this.step = step;
        this.position = position;
        this.size = size;
    }
    ParticleCircles.prototype.draw = function () {
        ctx.beginPath();
        ctx.arc(Math.cos(this.position) * this.moveRadius +
            canvas.width / 2, Math.sin(this.position) * this.moveRadius + canvas.height / 2, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.strokeStyle = "lime";
        ctx.stroke();
    };
    ParticleCircles.prototype.update = function () {
        this.position += this.step;
        this.draw();
    };
    return ParticleCircles;
}());
function init2() {
    particleArray = [];
    for (var i = 0; i < 500; i++) {
        var moveRadius = Math.random() * canvas.width;
        var step = (Math.random() * 0.002) + 0.002;
        var position = Math.random() * (Math.PI * 2);
        var size = (Math.random() * 20) + 10;
        particleArray.push(new ParticleCircles(moveRadius, step, position, size));
    }
}
function animate2() {
    requestAnimationFrame(animate2);
    ctx.fillStyle = 'rgba(0,0,0,0.01)';
    ctx.fillRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
    }
}
/////////////////////////////////////////////////////////////////////////////////////
var ParticleStar = /** @class */ (function () {
    function ParticleStar(moveRadius, step, position, size) {
        this.moveRadius = moveRadius;
        this.step = step;
        this.position = position;
        this.size = size;
    }
    ParticleStar.prototype.draw = function () {
        var x = Math.cos(this.position) * this.moveRadius +
            canvas.width / 2;
        var y = Math.sin(this.position) * this.moveRadius + canvas.height / 2;
        drawStar(x, y, 5, this.size, this.size / 2);
        ctx.fillStyle = "aqua";
        ctx.fill();
    };
    ParticleStar.prototype.update = function () {
        this.position += this.step;
        this.draw();
    };
    return ParticleStar;
}());
function init3() {
    particleArray = [];
    for (var i = 0; i < 200; i++) {
        var moveRadius = Math.random() * canvas.width;
        var step = (Math.random() * 0.002) + 0.002;
        var position = Math.random() * (Math.PI * 2);
        var size = (Math.random() * 25) + 25;
        particleArray.push(new ParticleStar(moveRadius, step, position, size));
    }
}
function animate3() {
    requestAnimationFrame(animate2);
    ctx.fillStyle = 'rgba(0,0,0,0.01)';
    ctx.fillRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
    }
}
function drawStar(positionX, positionY, spikes, outerRadius, innerRadius) {
    var rotation = Math.PI / 2 * 3;
    var x = positionX;
    var y = positionY;
    var step = Math.PI / spikes;
    ctx.beginPath();
    ctx.moveTo(positionX, positionY - outerRadius);
    for (var i = 0; i < spikes; i++) {
        x = positionX + Math.cos(rotation) * outerRadius;
        y = positionY + Math.sin(rotation) * outerRadius;
        ctx.lineTo(x, y);
        rotation += step;
        x = positionX + Math.cos(rotation) * innerRadius;
        y = positionY + Math.sin(rotation) * innerRadius;
        ctx.lineTo(x, y);
        rotation += step;
    }
    ctx.lineTo(positionX, positionY - outerRadius);
    ctx.closePath();
}
/////////////////////////////////////////////////////////////////////////////////////
var ParticleSquare = /** @class */ (function () {
    function ParticleSquare(moveRadius, step, position, size) {
        this.moveRadius = moveRadius;
        this.step = step;
        this.position = position;
        this.size = size;
    }
    ParticleSquare.prototype.draw = function () {
        var x = Math.cos(this.position) * this.moveRadius +
            canvas.width / 2;
        var y = Math.sin(this.position) * this.moveRadius + canvas.height / 2;
        drawSquare(x, y, 2, this.size, this.size);
        ctx.fillStyle = "purple";
        ctx.fill();
    };
    ParticleSquare.prototype.update = function () {
        this.position += this.step;
        this.draw();
    };
    return ParticleSquare;
}());
function init4() {
    particleArray = [];
    for (var i = 0; i < 100; i++) {
        var moveRadius = Math.random() * canvas.width;
        var step = (Math.random() * 0.002) + 0.002;
        var position = Math.random() * (Math.PI * 2);
        var size = (Math.random() * 25) + 25;
        particleArray.push(new ParticleSquare(moveRadius, step, position, size));
    }
}
function animate4() {
    requestAnimationFrame(animate2);
    ctx.fillStyle = 'rgba(0,0,0,0.01)';
    ctx.fillRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
    }
}
function drawSquare(positionX, positionY, spikes, outerRadius, innerRadius) {
    var rotation = Math.PI / 2 * 3;
    var x = positionX;
    var y = positionY;
    var step = Math.PI / spikes;
    ctx.beginPath();
    ctx.moveTo(positionX, positionY - outerRadius);
    for (var i = 0; i < spikes; i++) {
        x = positionX + Math.cos(rotation) * outerRadius;
        y = positionY + Math.sin(rotation) * outerRadius;
        ctx.lineTo(x, y);
        rotation += step;
        x = positionX + Math.cos(rotation) * innerRadius;
        y = positionY + Math.sin(rotation) * innerRadius;
        ctx.lineTo(x, y);
        rotation += step;
    }
    ctx.lineTo(positionX, positionY - outerRadius);
    ctx.closePath();
}
////////////////////////////////////////////////////////////////////////////////////
var ParticleHexagon = /** @class */ (function () {
    function ParticleHexagon(moveRadius, step, position, size) {
        this.moveRadius = moveRadius;
        this.step = step;
        this.position = position;
        this.size = size;
    }
    ParticleHexagon.prototype.draw = function () {
        var x = Math.cos(this.position) * this.moveRadius +
            canvas.width / 2;
        var y = Math.sin(this.position) * this.moveRadius + canvas.height / 2;
        drawHexagon(x, y, 3, this.size, this.size);
        ctx.strokeStyle = "gold";
        ctx.stroke();
    };
    ParticleHexagon.prototype.update = function () {
        this.position += this.step;
        this.draw();
    };
    return ParticleHexagon;
}());
function init5() {
    particleArray = [];
    for (var i = 0; i < 200; i++) {
        var moveRadius = Math.random() * canvas.width;
        var step = (Math.random() * 0.002) + 0.002;
        var position = Math.random() * (Math.PI * 2);
        var size = (Math.random() * 25) + 25;
        particleArray.push(new ParticleHexagon(moveRadius, step, position, size));
    }
}
function animate5() {
    requestAnimationFrame(animate2);
    ctx.fillStyle = 'rgba(0,0,0,0.01)';
    ctx.fillRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
    }
}
function drawHexagon(positionX, positionY, spikes, outerRadius, innerRadius) {
    var rotation = Math.PI / 2 * 3;
    var x = positionX;
    var y = positionY;
    var step = Math.PI / spikes;
    ctx.beginPath();
    ctx.moveTo(positionX, positionY - outerRadius);
    for (var i = 0; i < spikes; i++) {
        x = positionX + Math.cos(rotation) * outerRadius;
        y = positionY + Math.sin(rotation) * outerRadius;
        ctx.lineTo(x, y);
        rotation += step;
        x = positionX + Math.cos(rotation) * innerRadius;
        y = positionY + Math.sin(rotation) * innerRadius;
        ctx.lineTo(x, y);
        rotation += step;
    }
    ctx.lineTo(positionX, positionY - outerRadius);
    ctx.closePath();
}
////////////////////////////////////////////////////////////////////////////////////
function girarPuntos() {
    init();
    animate();
}
function girarCirculos() {
    init2();
    animate2();
}
function girarEstrella() {
    init3();
    animate3();
}
function girarCuadrado() {
    init4();
    animate4();
}
function girarHexagono() {
    init5();
    animate5();
}
window.addEventListener("resize", function () {
    canvas.width = this.innerWidth;
    canvas.height = this.innerHeight;
    init();
});
