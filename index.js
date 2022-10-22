

const people = [
    {Name: 'huzaifa', year: 2005},
    {Name: 'absham', year: 2006},
    {Name: 'wasssam', year: 2007},
];

const comments = [
    {text: 'love this!', id: 76464},
    {text: 'super good', id: 54564},
    {text: 'you are the best', id: 43435},
    {text: 'ramenis my fav food ever', id: 99897},
    {text: 'nice nice nice!', id: 675654},
];

const isAdult = people.some(person => ((new Date()) .getFullYear()) - person.year <= 19);

console.log({isAdult});

const allAdults = people.every(person => ((new Date()) .getFullYear()) - person.year >= 19);

console.log({allAdults});

const comment = comments.find(comment => comment.id ===54564);

console.log(comment);

const index = comments.findIndex(comment => comment.id === 99897);  

console.log(index);

const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];

console.log(newComments);