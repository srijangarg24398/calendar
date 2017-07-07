var date= new Date();
var currday=date.getDay();
var currdate=date.getDate();
var currmonth=date.getMonth();
var curryear = date.getFullYear();
var tempmonth=currmonth;
var tempyear=curryear;
var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

console.log(currday,"-",date,"-",currmonth,"-",curryear);
document.getElementById("currdate").innerHTML=date.toDateString();
function moduleLibrary(cmonth,cyear){
	document.getElementById("date").innerHTML=month[cmonth]+" "+cyear;
		if (cmonth==0)
		{
			cmonth=12;
			tempmonth=cmonth;
		}
	    var noofdays = new Date(cyear, cmonth+1, 0).getDate();
	    var firstDay = new Date(cyear, cmonth, 1).getDay();
		var lastDay = new Date(cyear, cmonth+1 , -0).getDay();
		console.log(noofdays,firstDay,lastDay,cmonth+1,cyear);
		var tabledata=document.getElementsByTagName("td");
		for (var i=0;i<tabledata.length;i++){
			tabledata[i].innerHTML=" ";
		}
		for(var i=0;i<noofdays;i++){
			tabledata[i+firstDay].innerHTML=i+1;
		}
		tempmonth=cmonth;
		tempyear=cyear;
	
};
btn=document.getElementsByClassName("btn");
btn[0].addEventListener('click',function(){moduleLibrary(tempmonth,tempyear-1)});
btn[1].addEventListener('click',function(){moduleLibrary((tempmonth-1),tempyear)});
btn[2].addEventListener('click',function(){moduleLibrary((tempmonth+1)%12,tempyear)});
btn[3].addEventListener('click',function(){moduleLibrary(tempmonth,tempyear+1)});
moduleLibrary(tempmonth,tempyear);
yo=document.getElementById("yo");
yo.addEventListener('click',function(){
	moduleLibrary(currmonth,curryear);
});