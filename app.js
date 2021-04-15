function triangle(num1, num2, num3) {
    let triangle = [num1, num2, num3]
    if (num1 > (num2 + num3) || num2 > (num1 + num3) || num3 > (num1 + num2)) {
        return false
    } else {
        return true
    }
}

console.log(triangle(90, 10, 10))