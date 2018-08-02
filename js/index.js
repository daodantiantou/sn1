/*
* @Author: Administrator
* @Date:   2018-07-22 11:19:12
* @Last Modified by:   Administrator
* @Last Modified time: 2018-07-24 09:45:17
*/
window.onload=function(){
	let banner=document.getElementsByClassName('banner')[0];
	let listbox=document.getElementsByClassName('listbox')[0];
	let li=listbox.getElementsByTagName('li');
	let dingwei=listbox.getElementsByClassName('dingwei');
	console.log(dingwei);

	for(let i=0;i<li.length;i++){
		li[i].onmouseenter=function(){
			for(let j=0;j<li.length;j++){
				dingwei[j].style.width="1001px";
				dingwei[j].style.display="none";
			}
			dingwei[i].style.display="block";
			dingwei[i].style.border="1px solid #000";
		}

		li[i].onmouseleave=function(){
			// dingwei[i].style.display="none";
			dingwei[i].style.width="0px";
			dingwei[i].style.border="none";
			dingwei[i].style.transition="width 0.5s";
		}
	}




	
	let imgbox=banner.getElementsByClassName('imgbox')[0];
	let img=imgbox.getElementsByTagName('img');
	let left=banner.getElementsByClassName('left')[0];
	let right=banner.getElementsByClassName('right')[0];
	let btns=banner.getElementsByClassName('btns')[0];
	let btn=btns.getElementsByClassName('btn');
	console.log(btn);
	let num=0;
	let t=setInterval(fn,2000);
	function fn(){
		num++;
		if(num==img.length){
			num=0;
		}
		for(let i=0;i<img.length;i++){
			img[i].style.zIndex="5";
			btn[i].className="btn";
		}
		img[num].style.zIndex="10";
		btn[num].className="btn btn1";
	}
	function fn1(){
		num--;
		if(num<0){
			num=img.length-1;
		}
		for(let i=0;i<img.length;i++){
			img[i].style.zIndex="5";
			btn[i].className="btn";

		}
		img[num].style.zIndex="10";
		btn[num].className="btn btn1";
	}
	banner.onmouseenter=function(){
		clearInterval(t)
	}
	banner.onmouseleave=function(){
		t=setInterval(fn,2000)
	}
	right.onclick=function(){
		fn();
	}
	left.onclick=function(){
		fn1();
	}

	for(let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
			for(let j=0;j<btn.length;j++){
				img[j].style.zIndex="5";
				btn[j].className="btn";
			}
			img[i].style.zIndex="10";
			btn[i].className="btn btn1";
			num=i;
		}
	}

}
