var fetch = require('node-fetch');

test('Test valido: "var" ritorna 9', () => {

    fetch('http://localhost:3002/square?string="var"')
        .then(res => res.json())
        .then(json => expect(json.result).toEqual(9));

});

test('Test valido: query è una stringa vuota', () => {

    fetch('http://localhost:3002/square?string=""')
        .then(res => res.json())
        .then(json => expect(json.result).toEqual(0));

});

test('Test non valido: query è un numero', () => {

    fetch('http://localhost:3002/square?string=9')
        .then(res => res.json())
        .then(json => expect(json.result).toEqual(-1));

});

test('Test non valido: query è null', () => {

    fetch('http://localhost:3002/square?string=')
        .then(res => res.json())
        .then(json => expect(json.result).toEqual(-1));

});

test('Test non valido: query non ha parametri', () => {

    fetch('http://localhost:3002/square')
        .then(res => res.json())
        .then(json => expect(json.result).toEqual(-1));

});

test('Test non valido: stringa non conclusa', () => {

    fetch('http://localhost:3002/square?string="test')
        .then(res => res.json())
        .then(json => expect(json.result).toEqual(-1));

});

test('Test non valido: query non ha parametri', () => {

    fetch('http://localhost:3002/square?string=test"')
        .then(res => res.json())
        .then(json => expect(json.result).toEqual(-1));

});