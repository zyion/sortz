
const { assert } = require('chai');

const Sortz = require('../index.js');


function randomRange(min, max) {
    return Math.random() * (max - min + 1) + min;
}

function randomChars (length) {
    let chars = 'abcdefghijklmnopqrstuvwxyz';
    let i = 0;
    let string = '';
    while (i++ < length) {
        string += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return string;
}


function testSortingAlgorithm (sort, algorithm) {
    describe(`Testing ${sort}`, () => {

        it(`Is ${sort} a function`, () => {
            assert.isFunction(algorithm);
        });

        it(`${sort} can sort integers`, () => {
            let data = [];
            for (let i = 0; i < 10; i++) {
                data.push(Math.floor(randomRange(0, 100)));
            }
            assert.sameOrderedMembers(data.slice().sort((a, b) => a - b), algorithm(data.slice()));
        });

        it(`${sort} can sort strings`, () => {
            let data = [];
            for (let i = 0; i < 10; i++) {
                data.push(randomChars(6));
            }
            assert.sameOrderedMembers(data.slice().sort(), algorithm(data.slice()));
        });

        it(`${sort} can sort alphanumeric`, () => {
            let data = [];
            for (let i = 0; i < 10; i++) {
                data.push(Math.random().toString(36).substr(2, 8));
            }
            assert.sameOrderedMembers(data.slice().sort(), algorithm(data.slice()));
        });

        it(`${sort} can sort floats + -`, () => {
            let data = [];
            for (let i = 0; i < 10; i++) {
                data.push(Math.random() * 10 - 5);
            }
            assert.sameOrderedMembers(data.slice().sort((a, b) => a - b), algorithm(data.slice()));
        });

        it(`${sort} can sort objects by value`, () => {
            let data = [];
            for (let i = 0; i < 10; i++) {
                data.push({ value: Math.floor(Math.random() * 1000) });
            }
            assert.sameOrderedMembers(data.slice().sort((a, b) => a.value - b.value), algorithm(data.slice(), (a, b) => a.value > b.value));
        });

        it(`${sort} can reverse sort`, () => {
            let data = [];
            for (let i = 0; i < 10; i++) {
                data.push(Math.floor(randomRange(0, 100)));
            }
            assert.sameOrderedMembers(data.slice().sort((a, b) => a - b).reverse(), algorithm(data.slice(), (a, b) => a < b));
        });

    });
}

for (let sort in Sortz) {
    testSortingAlgorithm(sort, Sortz[sort]);
}
