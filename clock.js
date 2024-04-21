function showTime(){
    var d=new Date();
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();
    var sec="AM";
    if(h>12){
        h=h-12;
    }
    if(h>=12){
        sec="PM";
    }
h=h<10?"0"+h:h;
m=m<10?"0"+m:m;
s=s<10?"0"+s:s;

    var set=h+" : "+m+" : "+s+" "+sec+" ";
    
    document.getElementsByTagName('h2')[0].innerText=set;
    setTimeout(showTime,1000);
}
