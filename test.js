var fetch = require('node-fetch');

test('Test valido: "var" ritorna 9', () => {

    fetch('https://se2-examsimulation.herokuapp.com/square?string="var"')
        .then(res => res.json())
        .then(json => expect(json.result).toEqual(9));

});

test('Test valido: query è una stringa vuota', () => {

    fetch('https://se2-examsimulation.herokuapp.com/square?string=""')
        .then(res => res.json())
        .then(json => expect(json.result).toEqual(0));

});

test('Test non valido: query è un numero', () => {

    fetch('https://se2-examsimulation.herokuapp.com/square?string=9')
        .then(res => res.json())
        .then(json => expect(json.result).toEqual(-1));

});

test('Test non valido: query è null', () => {

    fetch('https://se2-examsimulation.herokuapp.com/square?string=')
        .then(res => res.json())
        .then(json => expect(json.result).toEqual(-1));

});

test('Test non valido: query non ha parametri', () => {

    fetch('https://se2-examsimulation.herokuapp.com/square')
        .then(res => res.json())
        .then(json => expect(json.result).toEqual(-1));

});

test('Test non valido: stringa non conclusa', () => {

    fetch('https://se2-examsimulation.herokuapp.com/square?string="test')
        .then(res => res.json())
        .then(json => expect(json.result).toEqual(-1));

});

test('Test non valido: query non ha parametri', () => {

    fetch('https://se2-examsimulation.herokuapp.com/square?string=test"')
        .then(res => res.json())
        .then(json => expect(json.result).toEqual(-1));

});