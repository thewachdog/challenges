const button = document.querySelectorAll("#button");
console.log(button);
button.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("ClickHandler!");
  });
});

let correctans=0;

function ans1(btn){

  if (document.getElementById('a').value=='apple'){
    document.getElementById(btn.id).disabled = true;
    alert("Button has been disabled.");
    correctans+=1;
    console.log(correctans);
    if (correctans==5){
      document.getElementById('navigate').disabled = false;
      alert('button was unlocked');
    }
  }else{
    alert('try again')
  }
}

function ans2(btn){

  if (document.getElementById('b').value=='apple'){
    document.getElementById("button2").disabled = true;
    alert("Button has been disabled.");
    correctans+=1;
    console.log(correctans);
    if (correctans==5){
      document.getElementById('navigate').disabled = false;
      alert('button was unlocked');
    }
  }else{
    alert('try again')
  }
}

function ans3(btn){

  if (document.getElementById('c').value=='apple'){
    document.getElementById(btn.id).disabled = true;
    alert("Button has been disabled.");
    correctans+=1;
    console.log(correctans);
    if (correctans==5){
      document.getElementById('navigate').disabled = false;
      alert('button was unlocked');
    }
  }else{
    alert('try again')
  }
}

function ans4(btn){

  if (document.getElementById('d').value=='apple'){
    document.getElementById(btn.id).disabled = true;
    alert("Button has been disabled.");
    correctans+=1;
    console.log(correctans);
 
    if (correctans==5){
      document.getElementById('navigate').disabled = false;
      alert('button was unlocked');
    }
  }else{
    alert('try again')
  }
}

function ans5(btn){

  if (document.getElementById('e').value=='apple'){
    document.getElementById(btn.id).disabled = true;
    alert("Button has been disabled.");
    correctans+=1;
    console.log(correctans);

    if (correctans===5){
      document.getElementById('navigate').disabled = false;
      alert('button was unlocked');
}
  }else{
    alert('try again')
  }
}

function navigated(){
  window.location.href = "https://thewachdog.github.io/mnzxlkaspoqw.html";
}
document.getElementById('navigate').disabled = true;
alert("Button has been disabled.");
