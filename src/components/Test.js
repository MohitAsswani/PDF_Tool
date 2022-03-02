import React from 'react'

function m(a) {
    return ((b) => {
        if (b){
            return m(a+b);
        } 
        return a;
    });
}

console.log(m(2)(3)(2)());

function calculator () {
    const calc = {
        total : 0,
        add(a) {
            this.total = this.total + a;
            return this;
        },
        multiply(a) {
            this.total *= a;
            return this;
        }
    }
}

function Test() {
    return (
        <div>
            MUL - {m}
        </div>
    )
}

export default Test
