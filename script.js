// script.js
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "No elements in Stack";
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

function convertToBinary() {
    const decimalInput = document.getElementById('decimal-input').value;
    if (decimalInput === '') {
        alert('Please enter a decimal number.');
        return;
    }

    let decimalNumber = parseInt(decimalInput);
    let binaryStack = new Stack();

    while (decimalNumber > 0) {
        binaryStack.push(decimalNumber % 2);
        decimalNumber = Math.floor(decimalNumber / 2);
    }

    let binaryOutput = '';
    while (!binaryStack.isEmpty()) {
        binaryOutput += binaryStack.pop();
    }

    document.getElementById('binary-output').innerText = binaryOutput;
}
