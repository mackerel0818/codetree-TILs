let i = 10; // 시작 값
let list = []

while (i <= 26) { // 계속 반복할 조건   
    list.push(i)
    i += 2; // 원하는 증감값 설정                  
}

console.log(list.join(' '))