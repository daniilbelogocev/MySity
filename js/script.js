const head = document.querySelector('.header');
const head_cont = document.querySelector('.header_cont');
const navs = document.querySelectorAll('.navigation_title');
const navs_ico = document.querySelectorAll('.navigation_icon');
const navs_cont = document.querySelectorAll('.navigation');
const nav = document.querySelector('.navigations');
const links = document.querySelectorAll('.link_title');
const link = document.querySelectorAll('.link');
const link_cont = document.querySelector('.links');
const link_ico = document.querySelectorAll('.link_icon_img');
const logo_title = document.querySelector('.navigation_logo_title');
const about = document.querySelector('.about');
const unlock = document.querySelector('.button_enter');
const lock = document.querySelector('.lock');
const lock_button = document.querySelector('.lock_button');
const lock_trigger = document.querySelector('.unlock_trigger');
const begin_links = document.querySelectorAll('.link_begin');
const begin = document.querySelector('.begin');
const begin_cont = document.querySelector('.begin_cont');
// ================================================ //

const screenWidth = window.screen.width
const screenHeight = window.screen.height

if (screenWidth <= 425){
	begin.style.flexDirection = "column";
}

for (let i = 0, length = navs.length; i < length; i++){
		navs[i].style.display = "none";
	}
for (let i = 0, length = links.length; i < length; i++){
		links[i].style.display = "none";
	}
logo_title.style.display = "none";

function showing(){
	const logo_title = document.querySelector('.navigation_logo_title');
	const navs = document.querySelectorAll('.navigation_title');
	head_cont.style.cssText = 'animation-name: showing-header;animation-duration: 300ms;animation-fill-mode: forwards;';
	for (let i = 0, length = navs.length; i < length; i++){
		link_cont.style.cssText = 'flex-direction: row;';
		// navs[i].style.display = "block";
		navs[i].style.cssText = 'animation-name: activating;animation-duration: 400ms;animation-fill-mode: forwards;';
		navs[i].style.cssText = 'animation-name: showing-title;animation-duration: 200ms;animation-fill-mode: forwards; animation-delay: 100ms;';
	}

	logo_title.style.cssText = 'animation-name: activating_small;animation-duration: 400ms;animation-fill-mode: forwards;';
	logo_title.style.cssText = 'animation-name: showing-title;animation-duration: 200ms;animation-fill-mode: forwards; animation-delay: 100ms;';

	
	for (let a = 0, length = navs_ico.length; a < length; a++){
		navs_ico[a].style.cssText = 'animation-name: showing-ico;animation-duration: 300ms;animation-fill-mode: forwards;';
	}
	for (let b = 0, length = links.length; b < length; b++){
		let delay = (b+1)*200;
		links[b].style.cssText = 'animation-name: showing-title;animation-duration: 300ms;animation-fill-mode: forwards; animation-delay: ${delay};';
	}
	for (let a = 0, length = link_ico.length; a < length; a++){
		link_ico[a].style.cssText = 'animation-name: showing-link-ico;animation-duration: 300ms;animation-fill-mode: forwards;';
	}
}
function hiding(){
	const navs = document.querySelectorAll('.navigation_title');
	const logo_title = document.querySelector('.navigation_logo_title');
	head_cont.style.cssText = 'animation-name: hiding-header;animation-duration: 300ms;animation-fill-mode: forwards;';
	for (let i = 0, length = navs.length; i < length; i++){
		navs[i].style.display = "none";
	}
	for (let i = 0, length = links.length; i < length; i++){
		links[i].style.cssText = 'animation-name: deactivating;animation-duration: 100ms;animation-fill-mode: forwards;';
	}
	for (let a = 0, length = navs_ico.length; a < length; a++){
		navs_ico[a].style.cssText = 'animation-name: hiding-ico;animation-duration: 300ms;animation-fill-mode: forwards;';
	}
	link_cont.style.cssText = 'flex-direction: column;';
	for (let a = 0, length = link_ico.length; a < length; a++){
		link_ico[a].style.cssText = 'animation-name: hiding-link-ico;animation-duration: 300ms;animation-fill-mode: forwards;';
	}
	logo_title.style.display = "none";
	// logo_title.style.cssText = 'animation-name: deactivating_small;animation-duration: 400ms;animation-fill-mode: forwards;';
	// logo_title.style.cssText = 'animation-name: hiding-title;animation-duration: 200ms;animation-fill-mode: forwards; ';

}
function activate(){
	this.style.cssText = 'animation-name:active-nav; animation-duration: 300ms; animation-fill-mode: forwards;';
}
function deactivate(){
	this.style.cssText = 'animation-name:deactive-nav; animation-duration: 100ms; animation-fill-mode: forwards;';
}
head_cont.addEventListener('mouseover', showing);
head_cont.addEventListener('mouseout', hiding);

navs_cont.forEach(NavItem =>{NavItem.addEventListener('mouseover', activate);})
navs_cont.forEach(NavItem =>{NavItem.addEventListener('mouseout', deactivate);})

// for (let nav of navs_cont){
// 		nav.addEventListener('mouseover', activate);
// 		nav.addEventListener('mouseout', deactivate);
// 	}
link.forEach(linkItem =>{linkItem.addEventListener('mouseover', activate);})
link.forEach(linkItem =>{linkItem.addEventListener('mouseout', deactivate);})

function unlocking(){
	lock.classList.add('unlock')
	lock_trigger.style.display = 'flex';
}

function locking(){
	lock.classList.remove('unlock')
	lock_trigger.style.display = 'none';
}

window.addEventListener("scroll", function(event){
	console.log(pageYOffset);
	if (pageYOffset >= 1318){
		// about.classList.remove('about-back-animation');
		about.classList.add('about-animation');
		
	}if (pageYOffset <= 720){
		// about.classList.add('about-back-animation');
		about.classList.remove('about-animation');
	}

	if (pageYOffset >= 676){
		begin_cont.classList.add('begin-animation');
	} if (pageYOffset <= 92){
		begin_cont.classList.remove('begin-animation');
	}
});



unlock.addEventListener('click', unlocking);
lock_button.addEventListener('click', locking);