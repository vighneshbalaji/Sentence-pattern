 
var objDOM , objp1 , objp2 , objp3 , objp4 , objcans;	

var sp1,sp2,sp3,sp4,scans;

var rno = 0 , flag = 0, lk = 0, noq = 0, q = 0;

var uans="";

var sqp1 = "", sqp2 = "", sqp3 = "", sqp4 = "";

var scp1 = "", scp2 = "", scp3 = "", scp4 = "";

var j = 0 ;

var len1 = 0 , len2 = 0 , len3 = 0 , len4 = 0 ;

var qds = 0;

var bflag = 0;

var scr = 0;

	objDOM = new ActiveXObject("MSXML.DOMDocument");
			objDOM.load("spqp.xml");

			objp1 = objDOM.getElementsByTagName("p1");
			objp2 = objDOM.getElementsByTagName("p2");
			objp3 = objDOM.getElementsByTagName("p3");
			objp4 = objDOM.getElementsByTagName("p4");
			objcans = objDOM.getElementsByTagName("cans");
			noq = objp1.length; 
	        arr =  Array(noq);

			
function xmlassgn()
{            
	gm() ;

	sqp1 = "", sqp2 = "", sqp3 = "", sqp4 = "";
    scp1 = "", scp2 = "", scp3 = "", scp4 = "";
    len1 = 0 , len2 = 0 , len3 = 0 , len4 = 0 ;

    bsc1.innerHTML = "";
	bsc2.innerHTML = "";
	bsc3.innerHTML = "";
	bsc4.innerHTML = "";
    bsp1.style.color = "#000000";
    bsp2.style.color = "#000000";
    bsp3.style.color = "#000000";
    bsp4.style.color = "#000000";
    bsuanss.className = "clsh";
	bscanss.className = "clsh";
	bsuans.innerHTML = "";
	bscans.innerHTML = "";
	uans = "";
	
	document.senpat.up1.value = "";
	document.senpat.up2.value = "";
	document.senpat.up3.value = "";
	document.senpat.up4.value = "";	
	
	  sp1 = objp1.item(rno).firstChild.nodeValue;
	  sp2 = objp2.item(rno).firstChild.nodeValue;
	  sp3 = objp3.item(rno).firstChild.nodeValue;
	  sp4 = objp4.item(rno).firstChild.nodeValue;
	  scans = objcans.item(rno).firstChild.nodeValue;

	  len1 = sp1.length; sqp1 = sp1.substring(j,(sp1.indexOf("-",j)));	  j = sp1.indexOf("-",j)+1;	 scp1 = sp1.substring(j,len1);	j=0; 
	  len2 = sp2.length; sqp2 = sp2.substring(j,(sp2.indexOf("-",j)));	  j = sp2.indexOf("-",j)+1;	 scp2 = sp2.substring(j,len2);  j=0; 
	  len3 = sp3.length; sqp3 = sp3.substring(j,(sp3.indexOf("-",j)));	  j = sp3.indexOf("-",j)+1;	 scp3 = sp3.substring(j,len3);	j=0; 
	  len4 = sp4.length; sqp4 = sp4.substring(j,(sp4.indexOf("-",j)));	  j = sp4.indexOf("-",j)+1;	 scp4 = sp4.substring(j,len4);	j=0; 
	  
	  bsp1.innerHTML = sqp1;
	  bsp2.innerHTML = sqp2;
	  bsp3.innerHTML = sqp3;
	  bsp4.innerHTML = sqp4;

	

}

function check()
{

	if(bflag == 1)
	{
		    document.ians.className ="clsh";
			document.sbt.src = "images/go.jpg";
			document.sbt.title = "Submit Your Answer";
			xmlassgn();
			bflag = 0;
	}
	else if(bflag == 0)
	{
	document.ians.className ="clsv";

	if(len1 > 1)
		uans += document.senpat.up1.value;
	if(len2 > 1)
		uans += document.senpat.up2.value;
	if(len3 > 1)
		uans += document.senpat.up3.value;
	if(len4 > 1)
		uans += document.senpat.up4.value;

	if(uans == scans)
		{
			bscanss.style.color = "green";
			bsuanss.style.color = "green";
			bsuanss.className = "clsv";
			bscanss.className = "clsv";
			bsuans.innerHTML = uans;
			bscans.innerHTML = scans;
			document.ians.src = "images/crct.gif";
			scr++;
		}
	else
     	{
		    bscanss.style.color = "green";
			bsuanss.style.color = "red";
		    bsuanss.className = "clsv";
			bscanss.className = "clsv";
			bsuans.innerHTML = uans;
			bscans.innerHTML = scans;
			document.ians.src = "images/wrng.gif";
    	}
 

	    if(qds < 9) //no of question 3
	    {
			document.sbt.src = "images/next.jpg";
			document.sbt.title = "Go for next question";
			document.senpat.scrbrd.value = scr+" / "+(qds+1);
			bflag = 1;
			qds++;
	    }
	    else
	    {
	    	bflag = 2;
	    	document.sbt.title = "That's all";
	    	document.sbt.src ="images/end.jpg";
	    	document.senpat.scrbrd.value = scr+" / "+(qds+1);
	    }

   }
   else
   	    alert("Close the program and Strat again for another set of ten questions.");

}

function clue()
{
	bsc1.innerHTML = scp1;
	bsc2.innerHTML = scp2;
	bsc3.innerHTML = scp3;
	bsc4.innerHTML = scp4;
    bsp1.style.color = "#ff800d";
    bsp2.style.color = "#cc0000";
    bsp3.style.color = "#000080";
    bsp4.style.color = "#009707";
}


function score()
{

   scre.className = "clsv";
}

 function gm() //select unique question..
	{ 
	
	var j=0;
	
	while ( lk == 0 ) 
		{ 
		 rno = Math.floor(Math.random() * noq + 1) ;
		  if ( rno >= noq ) continue ;
		  if ( q > noq ) 
		   {
			  alert("Data Bank has been Exhausted."); break ;
		   }

		   for(j=0 ; j<= q ; j++)
			{
			 if (arr[j] == rno )
			  {
				flag = 1 ; break ; 
			   }
			 else
				flag = 0 ;
			}
			 if ( flag == 1 ) continue ;
			 if ( flag == 0 && q < noq ) 
			 {   
				 arr[q++] = rno ; 				 
				 break ;
			} 
		}
		 
	
		
	}
	