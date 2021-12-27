//FIFO
//first in first out
//reindexes so perfomrance bad
const q = [];

q.push('FIRST');
q.push('SECOND');
q.push('THIRD');
q.shift();

console.log(q);

//alternative way to remove first thing added
const q2 = [];

q2.unshift(1);
q2.unshift(2);
q2.unshift(3);
q2.pop();

console.log(q2);
