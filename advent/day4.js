const randomNumbers = [
  7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18,
  20, 8, 19, 3, 26, 1,
];

//boards are 5x5
const sampleInput = [
  '22 13 17 11  0',
  '8  2 23  4 24',
  '21  9 14 16  7',
  '6 10  3 18  5',
  '1 12 20 15 19',
  ,
  '3 15  0  2 22',
  '9 18 13 17  5',
  '19  8  7 25 23',
  '20 11 10 24  4',
  '14 21 16 12  6',
  ,
  '14 21 17 24  4',
  '10 16 15  9 19',
  '18  8 23 26 20',
  '22 11 13  6  5',
  '2  0 12  3  7',
  ,
];

function getBoard(arr) {
  let boards = [];
  for (let i = 0; i < arr.length; i++) {
    let board = [];

    if (!arr[i]) {
      board.push(arr[i - 5], arr[i - 4], arr[i - 3], arr[i - 2], arr[i - 1]);
    }
    if (board.length > 0) {
      boards.push(board);
    }
  }
  return boards;
}
getBoard(sampleInput);

function splitBoard(boards) {
  let splitBoards = [];
  let parsedBoards = [];

  for (let i = 0; i < boards.length; i++) {
    for (let j = 0; j < boards[i].length; j++) {
      let splitRow = boards[i][j].split(' ').filter((num) => num);
      splitBoards.push(splitRow);
    }
  }

  let board = [];
  for (let i = 0; i < splitBoards.length; i++) {
    let row = splitBoards[i].slice(0, 5);
    const parsedRow = row.map((num) => {
      let obj = {};
      obj[num] = 0;
      return obj;
    });

    board.push(parsedRow);
    if (board.length > 4) {
      parsedBoards.push(board);
      board = [];
    }
  }
  return parsedBoards;
}
splitBoard(getBoard(sampleInput));

function numberHit(parsedBoards) {
  let boards = parsedBoards;

  for (let board of boards) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        let key = parseInt(Object.keys(board[i][j]));
        for (let num of randomNumbers) {
          if (key === num) {
            ++board[i][j][key];
          }
        }
        for (let row of board) {
          //Object.values(row[j])[0] === 1
          // row.every((el, i) => console.log(el, i));
        }
      }
    }
    console.log(board);
  }
}
numberHit(splitBoard(getBoard(sampleInput)));
