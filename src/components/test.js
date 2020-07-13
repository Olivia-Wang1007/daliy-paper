var fn;
function foo() {
  var a = 2;
  function baz() {
    console.log(a);
  }
  fn = baz; // 将 baz 分配给全局变量
}
function bar() {
  fn(); // 这就是闭包
}
foo();
bar(); // 2

function foo() {
  var a = 2;
  function baz() {
    console.log(a); // 2
  }
  bar(baz);
}
function bar(fn) {
  fn(); // 这就是闭包！
}

function foo() {
  var a = 2;
  function bar() {
    console.log(a);
  }
  return bar;
}
var baz = foo();
baz(); // 2这就是闭包的效果。

function deepCopy(obj, parent = null) {
  // 创建一个新对象
  let result = {};
  let keys = Object.keys(obj),
    key = null,
    temp = null,
    _parent = parent;
  // 该字段有父级则需要追溯该字段的父级
  while (_parent) {
    // 如果该字段引用了它的父级则为循环引用
    if (_parent.originalParent === obj) {
      // 循环引用直接返回同级的新对象
      return _parent.currentParent;
    }
    _parent = _parent.parent;
  }
  for (let i = 0; i < keys.length; i++) {
    key = keys[i];
    temp = obj[key];
    // 如果字段的值也是一个对象
    if (temp && typeof temp === "object") {
      // 递归执行深拷贝 将同级的待拷贝对象与新对象传递给 parent 方便追溯循环引用
      result[key] = DeepCopy(temp, {
        originalParent: obj,
        currentParent: result,
        parent: parent,
      });
    } else {
      result[key] = temp;
    }
  }
  return result;
}
var obj1 = {
  x: 1,
  y: 2,
};
obj1.z = obj1;
var obj2 = deepCopy(obj1);
