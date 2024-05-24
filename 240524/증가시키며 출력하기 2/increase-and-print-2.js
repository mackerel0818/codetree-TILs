let i = 10; // 시작 값(초기화식)
let list = []

while (i <= 26) { // 계속 반복할 조건(조건식)
    list.push(i)
    i++; // 원하는 증감값 설정(증감식)
}

console.log(list.join(' '))