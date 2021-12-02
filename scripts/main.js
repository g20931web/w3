// Image switcher code

let myImage = document.querySelector('img');
//document は組み込みのオブジェクト
//ブラウザが表示しているページ、DOMとも呼ぶ。Document　Object Modelの略
//querySelectorはページの一部（HTML要素）を選ぶ関数

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/firefox2.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  //promptは組み込みの関数。prompt （pop-up） windowを表示してユーザ入力をさせる
  
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    //入力データを、特別ばな場所（変数ではないファイルなどに相当）に保存
    myHeading.innerHTML = 'こんにちは, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  //以前に特別な場所（ファイルなど）保存していた名前があれば、それを使う
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
