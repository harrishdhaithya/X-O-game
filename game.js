var myarray=new Array(3);        
for (var i=0; i <3; i++)          
    myarray[i]=new Array(3);
count=0;
for(var i=0;i<3;i++){
    for(var j=0;j<3;j++){
        myarray[i][j]=-1;
    }
}
function checkWinner(){
    for(var i=0;i<3;i++)
    {
        if(myarray[i][0]===myarray[i][1]&&myarray[i][1]===myarray[i][2]&&myarray[i][0]!==-1){
            return myarray[i][0];
        }
    }
    for(var i=0;i<3;i++){
        if(myarray[0][i]===myarray[1][i]&&myarray[1][i]===myarray[2][i]&&myarray[0][i]!==-1){
            return myarray[0][i];
        }
    }
    if(myarray[0][0]===myarray[1][1]&&myarray[1][1]===myarray[2][2])
       return myarray[0][0];
    return -1;
}
function clicked(a,b,c){
        console.log(a+" "+b);
        console.log(myarray);
        if(myarray[a][b]===-1){
            if(count%2===0){
                document.querySelector(".arr-"+c).textContent="X";
                myarray[a][b]=1;
            }
            else{
                document.querySelector(".arr-"+c).textContent="O";
                myarray[a][b]=0; 
            }
            count=count+1;
            var n= checkWinner();
            if(n!==-1){
                if(n===0){
                    alert("O won the match");
                }
                if(n===1){
                    alert("X won the Match");
                }
                window.location.reload();
            }
            else if(count===9){
                alert("Match Draw");
                window.location.reload();
            }
        }
        
}