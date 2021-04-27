var global_id = 0;
function add()
{
	var slowo = document.getElementById("inputid").value;
	var number = global_id;
	stworz(slowo,number);
	global_id = global_id + 1;
}
function stworz(tekst,number)
{
	var para = document.createElement("P");       
	para.innerHTML = tekst;
	para.setAttribute("id", number);
	document.getElementById("TODO").appendChild(para);        
	
	var button1 = document.createElement("button");
	button1.innerHTML = "AKCEPTUJ";
	button1.setAttribute("id", number);
	button1.setAttribute("onclick", 'acc(this.id)');	
	document.getElementById("TODO").appendChild(button1);

	var button2 = document.createElement("button");
	button2.innerHTML = "USUN";
	button2.setAttribute("id",number);
	button2.setAttribute("onclick", 'del(this.id)');
	document.getElementById("TODO").appendChild(button2);
}
function acc(number)
{
	var slowo = document.getElementById(number).innerHTML;
	removee(number);
	przenes(slowo,1,number);
}
function del(number)
{
	var slowo = document.getElementById(number).innerHTML;
	removee(number);
	przenes(slowo,0,number);
}
function removee(number)
{
	for (var i = 0 ; i < 3 ; i++)
	{
		var ajdi = document.getElementById(number);
		ajdi.remove();
	}
}
function przenes(tekst, wartosc,number)
{
	var para = document.createElement("P");
	para.innerHTML = tekst;
	para.setAttribute("id",number);
	document.getElementById("DONE").appendChild(para);
	if(wartosc == 0)
	{
		para.style = "color:red";
	}
	else
	{
		para.style = "color:green";
	}
	var button1 = document.createElement("button");
	button1.innerHTML = "COFNIJ";
	button1.setAttribute("id",number);
	button1.setAttribute("onclick",'cofnij(this.id)');
	document.getElementById("DONE").appendChild(button1);
}
function cofnij(number)
{
	var tekst = document.getElementById(number).innerHTML;
	for (var i = 0 ; i < 2 ; i++)
	{
		var ajdi = document.getElementById(number);
		ajdi.remove();
	}
	stworz(tekst,number);
}