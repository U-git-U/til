const strs  = ["a","b","c","d","e"];
const nums  = [1, 2, 3, 4, 5];
const bools = [false, false, true, false, false];
const mon = {Apr: 30};
const oran = {"color": "orange"};
const objs  = {
  Jan: 31,
  Feb: 28,
  Mar: 31,
  // mon,
  Apr: 31,
  May: 31
};
const array = ["a", 2, true, mon, {"May": 31}];
const colors = [
  {color: "red"},
  {color: "green"},
  {color: "blue"},
  {color: "pink"},
  oran,
];

// console.log(bools.indexOf(true));

// 配列じゃなかった間違えた。へ
// console.log(objs.indexOf(mon));
// console.log(objs.indexOf("Jan"));
// const objsFind = objs.findIndex((obj) => {
//   return obj.Jan === 31;
// });
// console.log(objsFind);
// console.log(objs.findIndex((obj) => {obj.Jan === 31}));

// オブジェクトは値が同じでも、参照が違って比較できない
// console.log(array.findIndex(ary => ary === mon));
// findIndex 処理をカスタムできる。プロパティが同じ要素を見つけられる
// const clr = colors.findIndex((obj) => {
//   return obj.color === "pink";
// });
// console.log(clr);
// console.log(colors.findIndex(clr => clr.color === "orange"));
// console.log(colors.findIndex(clr => clr === oran));
// console.log(colors.indexOf(oran))

// find 条件にあった対象ごと
// const findObj = objs.find((obj) => {return obj.Jan === 31});
// const findClr = colors.find((obj) => {return obj.color === "red"});
// console.log(findClr); // ["color": "red"]

// includes 配列内に対象が含まれるかどうかの真偽地のみを返す
// console.log(nums.includes(1)); // true
// console.log(nums.includes(8)); // false
// console.log(array.includes(mon)); // true
// 値だけでは判断できない、オブジェクトの参照が違う
// オブジェクトの値のであれば some を
// console.log(colors.includes((c) => {return c.color === "red"})); // false
// console.log(colors.some((c) => {return c.color === "red"})); // true

// console.log(array.indexOf(mon));
// console.log(array.indexOf({"May": 31}));
// console.log(array.indexOf({"Apr": 30}));

// console.log(objs);
// console.log(array);

// console.log(nums.findIndex(num => num === 5));


// reduce 配列の要素の先頭から末尾までを合計していく（今のところ）
// const rdc = nums.reduce((accumulator, currentValue, index, array) => {
//   return accumulator + currentValue;
// }, 10);
// console.log(rdc);
