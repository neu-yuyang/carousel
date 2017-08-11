/*
* @Author: the king
* @Date:   2017-08-11 15:00:56
* @Last Modified by:   the king
* @Last Modified time: 2017-08-11 15:01:09
*/

'use strict';
var imgs = document.getElementsByTagName('img');
var container = document.getElementById('container');
var len = imgs.length;
var count = 1;
for(var i=0; i<len; i++){
	imgs[i].onclick = function(){
		container.style.transform = 'rotateY('+(-40*count)+'deg)';
		count++;
	}
}