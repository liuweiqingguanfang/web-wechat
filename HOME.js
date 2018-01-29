function talk(){
	//alert('shabi')
	var sb=document.getElementById('xw');
	var sx=document.getElementById('pp');
	var a1=document.getElementById('dh');
	var tiaojian1=sb.style.display=="block";
	var tiaojian2=sx.style.display=="block";
	if (tiaojian1||tiaojian2) {
		sb.style.display="none";
		sx.style.display="none";
		a1.style.display="block"
	    }else{
			a1.style.display="block";
		}
}
function news(){
	//alert('shabi')
	var sb=document.getElementById('dh');
	var sx=document.getElementById('pp');
	sb.style.display="none";
	sx.style.display="none";
	var a1=document.getElementById('xw');
	a1.style.display="block";
}
function pp(){
	//alert('shabi')
	var sb=document.getElementById('xw');
	var sx=document.getElementById('dh');
	sb.style.display="none";
	sx.style.display="none";
	var a1=document.getElementById('pp');
	a1.style.display="block";
}
function lt01(){
	var sa=document.getElementById('r00');
	var sb=document.getElementById('r01');
	var sc=document.getElementById('r02');
	sa.style.display="none";
	sb.style.display="block";
	sc.style.display="none";
}
function lt02(){
	var sa=document.getElementById('r00');
	var sb=document.getElementById('r01');
	var sc=document.getElementById('r02');
	sa.style.display="none";
	sb.style.display="none";
	sc.style.display="block";
}
function wc(){
	var sa=document.getElementById('gl');
	sa.style.backgroundColor="white";
	var sb=document.getElementById('gl01');
	sb.style.backgroundColor="white";
	var sc=document.getElementById('gl02');
	sc.style.backgroundColor="white";
}
function wa(){
	var sa=document.getElementById('gl');
	sa.style.backgroundColor="#f6f6f6";
	var sb=document.getElementById('gl01');
	sb.style.backgroundColor="#f6f6f6";
	var sc=document.getElementById('gl02');
	sc.style.backgroundColor="#f6f6f6";
}
function wc01(){
	var sa=document.getElementById('gl03');
	sa.style.backgroundColor="white";
	var sb=document.getElementById('gl04');
	sb.style.backgroundColor="white";
	var sc=document.getElementById('gl05');
	sc.style.backgroundColor="white";
}
function wa01(){
	var sa=document.getElementById('gl03');
	sa.style.backgroundColor="#f6f6f6";
	var sb=document.getElementById('gl04');
	sb.style.backgroundColor="#f6f6f6";
	var sc=document.getElementById('gl05');
	sc.style.backgroundColor="#f6f6f6";
}function wc02(){
	var sa=document.getElementById('gl06');
	sa.style.backgroundColor="white";
	var sb=document.getElementById('gl07');
	sb.style.backgroundColor="white";
	var sc=document.getElementById('gl08');
	sc.style.backgroundColor="white";
}
function wa02(){
	var sa=document.getElementById('gl06');
	sa.style.backgroundColor="#f6f6f6";
	var sb=document.getElementById('gl07');
	sb.style.backgroundColor="#f6f6f6";
	var sc=document.getElementById('gl08');
	sc.style.backgroundColor="#f6f6f6";
}
