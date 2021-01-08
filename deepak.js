/*Task
1.when a user press start buttonthen only active the textarea else disable it vise-versa
2.Every time new set of lines to the top.whenever a start buttonis pressed. Not to done
3.get the time and change the button text to done
4.get the end time when user clicked on done button Find the total time taken
5.find the total word of setforWords
6.find the speed of the user and show in the top when user clicked on done
7.the call the compared word fun and find out how many words are matching and how many not
display result of speed*/






const setWords=[
    "I am deepak singh tanwar",
    'I study in b.tech',
    'I live in pataudi gurgaon'
]
const msg=document.getElementById('msg');
const typeword=document.getElementById('myword');
const btn=document.getElementById('button');
let startTime,endTime;

const playGame=()=>{
    let randomNumbers=Math.floor(Math.random()*setWords.length);
    msg.innerText=setWords[randomNumbers];
    let date=new Date();
    startTime=date.getTime();
    btn.innerText='Done';
}
const endplay=()=>{
    let date=new Date();
    endTime=date.getTime();
    let totalTime=((endTime-startTime)/1000);
    console.log(totalTime);
    let totalstr=typeword.value;
    let wordcount=wordCounter(totalstr)
    
    let speed=Math.round((wordcount/totalTime)*60);
    let finalmsg="your typing speed is "+speed+" per minutes ";
    finalmsg += compareWords(msg.innerText,totalstr);
    msg.innerText=finalmsg;
}
const compareWords=(str1,str2)=>{
    let words1=str1.split(" ");
    let words2=str2.split(" ");
    let cnt=0;
    words1.forEach(function(item,index){
     if(item==words2[index]){
         cnt++;
     }
    })
    let errorwords=(words1.length-cnt);
    return (cnt+" correct out of "+words1.length+" words and the total number of error are "+errorwords);

}
const wordCounter=(str)=>{
let response=str.split(" ").length;

console.log(response);
return response;
}

btn.addEventListener('click', function(){
    console.log(this)
    if(this.innerText == 'Start'){
    typeword.disabled=false;
    playGame();
    }
    else if(this.innerText=='Done'){
        typeword.disabled=true;
        btn.innerText='Start';
        endplay();
    }
})