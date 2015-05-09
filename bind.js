
// call, bind and apply allows you to change the context of the executing functions.

function someFun(a, b) {
  console.log(this);
  console.log(a);
  console.log(b);
}


var obj = {a: 10};

//var someNewFunc = someFun.bind(obj);

someFun.call(obj, 10, 20);
//someNewFunc();