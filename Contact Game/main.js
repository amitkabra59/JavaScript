var contact=['Ankit:123456789','Soni:144444455','Mota:444555666'];
var para= document.querySelector('p');
var btn= document.querySelector('button');
var input= document.querySelector('input');

btn.addEventListener('click',function(){
var searchName=input.value;
input.value='';

for(var i=0;i<contact.length;i++){
var splitCon = contact[i].split(':');
if(splitCon[0]===searchName){
	para.textContent=splitCon[0]+':'+splitCon[1];
	break;
}
else {
para.textContent='Contact not found';
}
}
});
