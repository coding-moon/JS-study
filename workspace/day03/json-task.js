// 동물원에 동물이 3마리 있다
// 각 동물별 정보는 이름, 종, 나이이다.

// 동물원의 동물 전체 평균 나이를 구한다.
/* 타입은 받은 값의 타입으로 결정된다 */
function animal(name, kind, age) {
    this.name = name;
    this.kind = kind;
    this.age = age;
}

let zoo = [
    new animal('초코', '리트리버', 3),
    new animal('소주', '포메라니안', 2),
    new animal('야옹', '고양이', 2)
];


let zooJSON = JSON.stringify(zoo);

function getavg(zooJSON, callback){
    let zoo = JSON.parse(zooJSON);
    let datas = 0;
   // console.log(zoo);

    if(callback) {
        for( let i = 0; i < zoo.length; i++){
            datas += zoo[i].age
         }
        // console.log(datas);
        callback(datas);
        return datas;
    }
    return;
}

getavg(zooJSON, datas => {console.log(datas/3)});

//getavg(zooJSON, result => {result.forEach(data => console.log(data))});
// ===================================================================

// 동물원에 동물이 3마리 있다.
// 각 동물별 정보는 이름, 종, 나이이다.
function Animal(name, kind, age) {
    this.name = name;
    this.kind = kind;
    this.age = age;
}

let animals = [
    new Animal('구름이', '양', 4),
    new Animal('뽀삐', '소', 8),
    new Animal('바둑이', '기린', 9)
];

let animalsJSON = JSON.stringify(animals);

// 동물원의 동물 전체 평균 나이를 구한다.
function average(animalsJSON, callback) {
    let animals = JSON.parse(animalsJSON);
    // reduce(total, data)일 경우 항상 total값의 타입은 data의 타입과 동일하게 설정된다.
    let total = animals.map(animal => animal.age).reduce((total, age) => total + age);
    let average = total / animals.length;
    if(callback) {
        callback(average);
    }
    return average;
}

average(animalsJSON, average => console.log(average));
