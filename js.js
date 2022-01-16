function gameStart() {
    let divqus = document.getElementById("qusbox").children;
    let check = document.getElementById("checks");
  
    let line = document.querySelectorAll("li");
    let gamewon = document.getElementById("gameover");
  
    let num = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
    ];
  
    let display = document.getElementById("Display");
  
    let b = [];
  
    let ans = [
      "largest railway station",
      "Assam",
      "Kerala",
      "China",
      "Bihar",
      "Rs 20000 crore",
      "Akshay Kumar",
      "Sonu Sood",
      "Bamboo Products",
      "IPPB",
      "BYJU's",
      "500",
      "Russia",
      "Aruna Tanwar",
      "India",
      "UK",
      "Colombia",
    ];
    let a = 0;
    com(ans);
    fiftys(ans);
    computers(ans);
    twenty(ans);
  
    let c = "";
    let ansbox;
    let inneransbox;
  
    let counts = 0;
    line[divqus.length - 1].style.transform = "scale(1)";
    line[divqus.length - 1].style.opacity = "0.5";
  
    for (let i = 0; i < 1; i++) {
      a = num[Math.floor(Math.random() * divqus.length)];
  
      b.push(a);
  
      display.appendChild(divqus[b]);
  
      line[divqus.length - 1].style.transform = "scale(1.2)";
      line[divqus.length - 1].style.opacity = "1";
      let Text = line[divqus.length - 1].innerText;
      quits(Text);
  
      num.splice(a, 1);
    }
  
    ansbox = document.getElementById("Display").children;
  
    inneransbox = ansbox[0].children[1].querySelectorAll("h2");
  
    for (let k = 0; k < inneransbox.length; k++) {
      inneransbox[k].addEventListener("click", hell);
      document.getElementById("twos").addEventListener("click", function () {
        check.checked = true;
      });
      function hell() {
        c = ans.includes(inneransbox[k].innerText);
        counts += 1;
        console.log(counts);
        if (divqus.length != 0) {
          if (c == true) {
            document.getElementById("Display").children[0].remove();
  
            setTimeout(gameStart, 1000);
          }
          if (check.checked) {
          } else {
            if (c == false) {
              document.getElementById("gameover").style.display = "flex";
              document.getElementById("point").innerText =
                line[divqus.length - 1].innerText;
            }
          }
        }
        if (1 < counts) {
          check.checked = false;
          check.disabled = true;
          if (c == false) {
            document.getElementById("gameover").style.display = "flex";
            document.getElementById("point").innerText =
              line[divqus.length - 1].innerText;
          }
        }
        if (divqus.length == 1 && c == true) {
          document.getElementById("gameover").style.display = "flex";
          document.getElementById("point").innerText =
            line[divqus.length - 1].innerText;
          gamewon.children[0].innerHTML = "You Won The Game";
        }
      }
    }
  }
  
  function com(ans) {
    let coms = document.getElementById("odiyans");
    let divoptions = document.getElementById("optiondiv").children;
    let comansbox = document.getElementById("Display").children;
    let cominneransbox;
    let inner;
    let _index = [];
    let str = "";
  
    coms.addEventListener("click", function () {
      document.getElementById("optiondiv").style.display = "flex";
  
      cominneransbox = comansbox[0].children[1].querySelectorAll("h2");
  
      coms.style.opacity = "0.5";
  
      //setTimeout
  
      setTimeout(function () {
        document.getElementById("odiyans").disabled = true;
  
        document.getElementById("optiondiv").style.display = "none";
      }, 5000);
  
      let i;
      for (i = 0; i < cominneransbox.length; i++) {
        inner = ans.includes(cominneransbox[i].innerText);
  
        _index.push(cominneransbox[i]);
  
        if (inner == true) {
          str += cominneransbox[i].innerText;
  
          _index.forEach((item, index) => {
            for (let j = 0; j < 1; j++) {
              divoptions[0].children[i].style.opacity = "1";
              console.log(divoptions[0].children[i]);
            }
          });
        } else {
          divoptions[0].children[i].style.opacity = "0.2";
        }
        cominneransbox[i].addEventListener("click", function () {
          // inner = ans.includes(cominneransbox[i].innerText); // in there this line will not work
          if (inner == false) {
            // alert("Game over odiyans mode!");
          }
        });
      }
    }); // end point
  }
  
  function fiftys(ans) {
    let five = document.getElementById("fifty");
  
    let comansbox = document.getElementById("Display").children;
  
    let cominneransbox;
    let _includes;
    let inner;
    let _index = [];
    let str = "";
  
    five.addEventListener("click", function (e) {
      document.getElementById("fifty").disabled = true;
      document.getElementById("fifty").style.opacity = "0.5";
      cominneransbox = comansbox[0].children[1].querySelectorAll("h2");
  
      for (let i = 0; i < cominneransbox.length; i++) {
        _includes = ans.includes(cominneransbox[i].innerText);
  
        let list = cominneransbox[i].innerText;
  
        _index.push(list);
        console.log(_index);
        if (_includes == true) {
          let a = cominneransbox[i].innerText;
  
          let b = _index.indexOf(a);
  
          let c = b - 1;
          let e = b - 2;
          let d = b + 1;
          let f = b + 3;
          // console.log(c + " c= d=" + d);
  
          // let list = comansbox[0].children[1].children[i].innerText; // if yuo write this line of code  this code  work worrny way
          // _index.push(list); // if yuo write this line of code  this code  work worrny way
          // console.log("index =" + _index);
          // console.log("b = " + b);
  
          if (b == 3) {
            cominneransbox[c].style.opacity = "0.5"; //2
            cominneransbox[e].style.opacity = "0.5"; //1
          } else if (b == 0) {
            cominneransbox[d].style.opacity = "0.5"; //1
            cominneransbox[f].style.opacity = "0.5"; //3
          } else if (b == 1) {
            cominneransbox[c].style.opacity = "0.5";
            cominneransbox[d].style.opacity = "0.5";
          } else if (b == 2) {
            cominneransbox[d].style.opacity = "0.5";
            cominneransbox[c].style.opacity = "0.5";
          } else {
            cominneransbox[b].style.opacity = "1";
          }
        }
  
        cominneransbox[i].addEventListener("click", function () {
          _includes = ans.includes(cominneransbox[i].innerText);
          if (_includes == false) {
            // alert("Game over 50-50 mode");
          }
        });
      }
    });
  }
  //
  function computers(ans) {
    let _cominters = document.getElementById("computer");
    let _display = document.getElementById("Display").children;
    let _child;
    let _innerchild;
  
    _cominters.addEventListener("click", function (e) {
      _child = _display[0].children[1].querySelectorAll("h2");
  
      console.log(_child);
      document.getElementById("computer").style.opacity = "0.5";
      document.getElementById("computer").disabled = true;
      for (let i = 0; i < _child.length; i++) {
        _innerchild = ans.includes(_child[i].innerText);
  
        if (_innerchild == true) {
          _child[i].style.opacity = "1";
        } else {
          _child[i].style.opacity = "0";
        }
      }
    });
  }
  
  // twenty optation
  function twenty(ans) {
    let two = document.getElementById("twos");
    let _display = document.getElementById("Display").children;
    let _child;
    let _innerchild;
    let count = 0;
    let _count = true;
    let activetwo;
    let _include;
  
    // console.log(_display[0].children); if you use in this postition code linne
  
    two.addEventListener("click", function () {
      document.getElementById("twos").style.opacity = "0.5";
      document.getElementById("twos").disabled = true;
  
      _child = _display[0].children[1].querySelectorAll("h2");
  
      for (let i = 0; i < _child.length; i++) {
        _innerchild = _child[i].innerText;
        console.log(_innerchild);
  
        _child[i].addEventListener("click", function () {
          count += 1;
          _child[i].style.opacity = "0.4";
          _include = ans.includes(_child[i].innerText);
          if (1 < count) {
            _count = false;
          }
  
          console.log("count =" + count);
          console.log("_count =" + _count);
        });
      }
    });
  }
  
  function Play() {
    let container = document.getElementById("container");
    container.style.display = "none";
    let coc = true;
    gameStart(coc);
  }
  function Sittings() {
    let displaysitting = document.getElementById("displaysitting");
  
    if (displaysitting.style.display == "none") {
      displaysitting.style.display = "flex";
    } else {
      displaysitting.style.display = "none";
    }
  }
  function change() {
    let container = document.getElementById("container");
    let _value = document.getElementById("numbers");
    let ranges = document.getElementById("Ranges");
    _value.innerText = ranges.value;
    container.style.backgroundColor = `rgba(220, 82, 255, ${ranges.value})`;
  }
  change();
  
  function quits(points) {
    document.getElementById("quit").addEventListener("click", function () {
      let conform = confirm("Did you want to quit");
  
      if (conform == true) {
        document.getElementById("gameover").style.display = "flex";
        document.getElementById("point").innerText = points;
      }
    });
  }