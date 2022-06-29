// 동결! Object.freeze 추가 안됨, 삭제도 안됨, 쓰기도 안됨, 속성 재정의도 안됨
// (단, 얕은 꽁꽁 얼림!)
const ellie = { name: '엘리'};
const dog = { name: '와우', emoji: '🐶', owner: ellie};
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog);
dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);
ellie.name = '엘리얌';
console.log(dog);

// 밀봉! Object.seal 값의 수정은 된다, 추가는 안됨, 삭제 안됨, 속성 재정의 안됨
const cat = { ...dog };
// Object.assign(cat, dog);
Object.seal(cat);
console.log(cat);
cat.name = '냐옹';
console.log(cat);
delete cat.emoji;
console.log(cat);

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));

// 확장 금지 preventExtensions (추가가 안됨)
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '어흐응';
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 1;
console.log(tiger);