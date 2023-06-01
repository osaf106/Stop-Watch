var hr=0;
var mint =0;
var sec=0;
var count=0;

var timer = false;

function start()
{
    timer = true;
    stopwatch();
}
function stop()
{
    timer = false;
}
function reset()
{
    timer=false;
    hr=0;
    mint=0;
    sec=0;
    count=0;

    document.getElementById("count").innerHTML = "00";
        document.getElementById("scnd").innerHTML = "00";
        document.getElementById("mint").innerHTML = "00";
        document.getElementById("hr").innerHTML ="00";
}

function stopwatch()
{
    if(timer==true)
    {
        count = count+1;
        if(count==100)
        {
        
            sec = sec+1;
            count=0; 
        }
        if(sec==60)
        {
                mint=mint+1;
                
                sec=0;
        }
        
        if(mint==60)
        {
                hr=hr+1;
                mint=0;
                sec=0;

        }
        
        var hrstring =hr;
        var mintstring =mint;
        var secstring =sec;
        var countstring =count;

        if(hr<10)
        {
            hrstring="0"+ hrstring;
        }
        if(mint<10)
        {
            mintstring="0"+ mintstring;
        }
        if(sec<10)
        {
            secstring="0"+ secstring;
        }
        if(count<10)
        {
            countstring="0"+ countstring;
        }



        document.getElementById("count").innerHTML = countstring;
        document.getElementById("scnd").innerHTML = secstring;
        document.getElementById("mint").innerHTML = mintstring;
        document.getElementById("hr").innerHTML = hrstring;
        setTimeout("stopwatch()",1);
    }
}