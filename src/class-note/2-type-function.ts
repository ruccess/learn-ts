function sum(a:number, b:number) {
    return a + b;
}

sum(10, 20);

// 함수의 반환값에 타입 정의
function add(a: number, b: number): string {
    // eslint-disable-next-line no-console
    console.log(a + b);
    return '10';
}
add(10, 230);

// 함수의 optional parmas 물음표~!
function log(a:string, b?:string, c?:string) {

}
log('hello world');
log('hello world', 'test');
