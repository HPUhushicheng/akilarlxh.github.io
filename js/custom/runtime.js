setInterval((()=>{let e=Math.round(new Date("2019-04-17 00:00:00").getTime()/1e3),r=Math.round((new Date).getTime()/1e3)-e,t=new Array(0,0,0,0,0);var i=function(e){return e>9?e:"0"+e};r>=31536e3&&(t[0]=parseInt(r/31536e3),r%=31536e3),r>=86400&&(t[1]=parseInt(r/86400),r%=86400),r>=3600&&(t[2]=i(parseInt(r/3600)),r%=3600),r>=60&&(t[3]=i(parseInt(r/60)),r%=60),r>0&&(t[4]=i(r)),Number(t[2])<22&&Number(t[2])>7?currentTimeHtml="<div class='ark-footer-reminder'>糖果屋营业中</div><div class='ark-footer-timer'>建站时间持续增长中</div><div id='ark-site-runtime'>"+t[0]+" YEAR "+t[1]+" DAYS "+t[2]+" : "+t[3]+" : "+t[4]+"</div>":currentTimeHtml="<div class='ark-footer-reminder'>糖果屋打烊了</div><div class='ark-footer-timer'>建站时间持续增长中</div><div id='ark-site-runtime'>"+t[0]+" YEAR "+t[1]+" DAYS "+t[2]+" : "+t[3]+" : "+t[4]+"</div>",document.getElementById("workboard").innerHTML=currentTimeHtml}),1e3);