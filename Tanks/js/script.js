const all = document.querySelectorAll(".a"),
	tank = document.querySelectorAll(".tank"),
	enemy = document.querySelector(".enemy"),
	player = document.querySelector("#player");
var speed = 5;
var en = {
	mat: enemy,
	posx: 0,
	posy: 0,
	dir: Math.floor(Math.random() * 4),
}
var pl = {
	mat: player,
	posx: 500,
	posy: 350,
	dir: Math.floor(Math.random() * 4),
}

function dirch() {
	en.dir = Math.floor(Math.random() * 4);
}
function move() {
	if (en.dir == 0) {
		en.mat.classList.remove("tank__up", "tank__down", "tank__left", "tank__right");
		en.mat.classList.add("tank__left");
		if (en.posx - speed >= 0) {
			en.posx -= speed;
			en.mat.style.left = en.posx;
		}
		else {
			Math.floor(Math.random() * 4);
		}
	}
	else if (en.dir == 1) {
		en.mat.classList.remove("tank__up", "tank__down", "tank__left", "tank__right");
		en.mat.classList.add("tank__up");
		if (en.posy - speed >= 0) {
			en.posy -= speed;
			en.mat.style.top = en.posy;
		}
		else {
			Math.floor(Math.random() * 4);
		}
	}
	else if (en.dir == 2) {
		en.mat.classList.remove("tank__up", "tank__down", "tank__left", "tank__right");
		en.mat.classList.add("tank__right");
		if (en.posx + speed <= 940) {
			en.posx += speed;
			en.mat.style.left = en.posx;
		}
		else {
			Math.floor(Math.random() * 4);
		}
	}
	else if (en.dir == 3) {
		en.mat.classList.remove("tank__up", "tank__down", "tank__left", "tank__right");
		en.mat.classList.add("tank__down");
		if (en.posy + speed <= 640) {
			en.posy += speed;
			en.mat.style.top = en.posy;
		}
		else {
			Math.floor(Math.random() * 4);
		}
	}
}

setInterval(
	function () {
		dirch();
	}, (Math.floor(Math.random() * 4) * 1000 + 1000)
)
setInterval(
	function () {
		move();
	}, 50
)



