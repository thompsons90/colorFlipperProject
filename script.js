function changeColor() {
     const newColor = makeColor();
     document.getElementById('box').style.backgroundColor = newColor;
     document.getElementById('rgb').innerHTML = newColor;
}
function printNumbers() {
     for (const n of myArr) {
      document.getElementById('box').innerHTML += `<div>${n}</div>`;
    
    }
    }


function makeColor() {
     const arr = [];
     for(let i = 0; i < 3; i ++){
          const num = Math.floor(Math.random() * 256) //creates a random number between 0 - 255 anywhere from 0000 0000 to all 1111 1111 (256 options)
          arr.push(num); //math.floor rounds down the decimal to the normal number math.ceil rounds up
     } 
     return 'rgb(' + arr[0] + ',' + arr[1] + ',' + arr[2] + ')';
      //math.random will give you a random number anywhere between 0 - .999999~
     const newRgb = 'rgb(' + arr[0] + ',' + arr[1] + ',' + arr[2] + ')';
     return newRgb;
}