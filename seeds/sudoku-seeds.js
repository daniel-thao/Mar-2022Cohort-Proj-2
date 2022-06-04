const { Sudokus } = require("../models");

const puzzleOneKey = [
  {
    rowOne: [
      {
        squareOne: [
          { val: 5 },
          { val: 9 },
          { val: 3 },
          { val: 7 },
          { val: 4 },
          { val: 8 },
          { val: 6 },
          { val: 2 },
          { val: 1 },
        ],
      },
      {
        squareTwo: [
          { val: 6 },
          { val: 2 },
          { val: 1 },
          { val: 6 },
          { val: 3 },
          { val: 9 },
          { val: 7 },
          { val: 5 },
          { val: 8 },
        ],
      },
      {
        squareThree: [
          { val: 8 },
          { val: 7 },
          { val: 6 },
          { val: 2 },
          { val: 1 },
          { val: 5 },
          { val: 9 },
          { val: 4 },
          { val: 3 },
        ],
      },
    ],
  },
  {
    rowTwo: [
      {
        squareOne: [
          { val: 1 },
          { val: 6 },
          { val: 9 },
          { val: 4 },
          { val: 3 },
          { val: 7 },
          { val: 8 },
          { val: 5 },
          { val: 2 },
        ],
      },
      {
        squareTwo: [
          { val: 2 },
          { val: 8 },
          { val: 5 },
          { val: 9 },
          { val: 1 },
          { val: 6 },
          { val: 3 },
          { val: 4 },
          { val: 7 },
        ],
      },
      {
        squareThree: [
          { val: 7 },
          { val: 3 },
          { val: 4 },
          { val: 5 },
          { val: 2 },
          { val: 8 },
          { val: 1 },
          { val: 6 },
          { val: 9 },
        ],
      },
    ],
  },
  {
    rowThree: [
      {
        squareOne: [
          { val: 9 },
          { val: 7 },
          { val: 5 },
          { val: 3 },
          { val: 1 },
          { val: 4 },
          { val: 2 },
          { val: 8 },
          { val: 6 },
        ],
      },
      {
        squareTwo: [
          { val: 1 },
          { val: 6 },
          { val: 4 },
          { val: 8 },
          { val: 9 },
          { val: 2 },
          { val: 5 },
          { val: 7 },
          { val: 3 },
        ],
      },
      {
        squareThree: [
          { val: 3 },
          { val: 8 },
          { val: 2 },
          { val: 6 },
          { val: 5 },
          { val: 7 },
          { val: 4 },
          { val: 9 },
          { val: 1 },
        ],
      },
    ],
  },
];

const puzzleOneStartPosition = [
  {
    rowOne: [
      {
        squareOne: [
          { val: "/" },
          { val: "/" },
          { val: 3 },
          { val: "/" },
          { val: 4 },
          { val: "/" },
          { val: 6 },
          { val: "/" },
          { val: "/" },
        ],
      },
      {
        squareTwo: [
          { val: "/" },
          { val: "/" },
          { val: "/" },
          { val: 6 },
          { val: "/" },
          { val: 9 },
          { val: 7 },
          { val: "/" },
          { val: 8 },
        ],
      },
      {
        squareThree: [
          { val: 8 },
          { val: "/" },
          { val: "/" },
          { val: "/" },
          { val: 1 },
          { val: "/" },
          { val: "/" },
          { val: "/" },
          { val: 3 },
        ],
      },
    ],
  },
  {
    rowTwo: [
      {
        squareOne: [
          { val: "/" },
          { val: 6 },
          { val: 9 },
          { val: "/" },
          { val: "/" },
          { val: "/" },
          { val: "/" },
          { val: 5 },
          { val: 2 },
        ],
      },
      {
        squareTwo: [
          { val: "/" },
          { val: 8 },
          { val: "/" },
          { val: 9 },
          { val: "/" },
          { val: 6 },
          { val: "/" },
          { val: 4 },
          { val: "/" },
        ],
      },
      {
        squareThree: [
          { val: 7 },
          { val: 3 },
          { val: "/" },
          { val: "/" },
          { val: "/" },
          { val: "/" },
          { val: 1 },
          { val: 6 },
          { val: "/" },
        ],
      },
    ],
  },
  {
    rowThree: [
      {
        squareOne: [
          { val: 9 },
          { val: "/" },
          { val: "/" },
          { val: "/" },
          { val: 1 },
          { val: "/" },
          { val: "/" },
          { val: "/" },
          { val: 6 },
        ],
      },
      {
        squareTwo: [
          { val: 1 },
          { val: "/" },
          { val: 4 },
          { val: 8 },
          { val: "/" },
          { val: 2 },
          { val: "/" },
          { val: "/" },
          { val: "/" },
        ],
      },
      {
        squareThree: [
          { val: "/" },
          { val: "/" },
          { val: 2 },
          { val: "/" },
          { val: 5 },
          { val: "/" },
          { val: 4 },
          { val: "/" },
          { val: "/" },
        ],
      },
    ],
  },
];

const puzzleTwoKey = [
  [
    [
      [2, 3, 9],
      [5, 6, 7],
      [8, 1, 4],
    ],
    [
      [5, 8, 7],
      [1, 4, 2],
      [6, 9, 3],
    ],
    [
      [6, 4, 1],
      [3, 8, 9],
      [7, 2, 5],
    ],
  ],
  [
    [
      [9, 8, 2],
      [1, 7, 5],
      [6, 4, 3],
    ],
    [
      [3, 1, 4],
      [2, 6, 9],
      [8, 7, 5],
    ],
    [
      [5, 6, 7],
      [8, 3, 4],
      [9, 1, 2],
    ],
  ],
  [
    [
      [7, 9, 1],
      [3, 5, 6],
      [4, 2, 8],
    ],
    [
      [4, 3, 8],
      [9, 2, 1],
      [7, 5, 6],
    ],
    [
      [2, 5, 6],
      [4, 7, 8],
      [1, 9, 3],
    ],
  ],
];

const puzzleTwoStartPosition = [
  [
    [
      [2, "", ""],
      ["", 6, ""],
      ["", "", ""],
    ],
    [
      ["", 8, ""],
      ["", "", ""],
      [6, 9, 3],
    ],
    [
      ["", "", 1],
      ["", 8, ""],
      ["", "", ""],
    ],
  ],
  [
    [
      ["", "", 2],
      [1, "", 5],
      ["", "", 3],
    ],
    [
      ["", 1, ""],
      [2, "", 9],
      ["", 7, ""],
    ],
    [
      [5, "", ""],
      [8, "", 4],
      [9, "", ""],
    ],
  ],
  [
    [
      ["", "", ""],
      ["", 5, ""],
      [4, "", ""],
    ],
    [
      [4, 3, 8],
      ["", "", ""],
      ["", 5, ""],
    ],
    [
      ["", "", ""],
      ["", 7, ""],
      ["", "", 3],
    ],
  ],
];

const puzzleThreeKey = [
  [
    [
      [1, 8, 2],
      [3, 5, 9],
      [4, 6, 7],
    ],
    [
      [3, 6, 9],
      [8, 7, 4],
      [5, 1, 2],
    ],
    [
      [7, 4, 5],
      [1, 2, 6],
      [3, 9, 8],
    ],
  ],
  [
    [
      [9, 3, 4],
      [6, 2, 5],
      [7, 1, 8],
    ],
    [
      [6, 8, 1],
      [4, 9, 7],
      [2, 3, 5],
    ],
    [
      [5, 7, 2],
      [8, 1, 3],
      [4, 6, 9],
    ],
  ],
  [
    [
      [2, 4, 3],
      [5, 7, 1],
      [8, 9, 6],
    ],
    [
      [1, 5, 6],
      [9, 2, 8],
      [7, 4, 3],
    ],
    [
      [9, 8, 7],
      [6, 3, 4],
      [2, 5, 1],
    ],
  ],
];

const puzzleThreeStartPosition = [
  [
    [
      ["", "", ""],
      ["", 5, ""],
      [4, "", 7],
    ],
    [
      ["", 6, ""],
      ["", 7, 4],
      [5, "", ""],
    ],
    [
      [7, "", ""],
      ["", 2, ""],
      [3, "", ""],
    ],
  ],
  [
    [
      ["", 3, ""],
      [6, 2, ""],
      ["", "", 8],
    ],
    [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    [
      [5, "", ""],
      ["", 1, 3],
      ["", 6, ""],
    ],
  ],
  [
    [
      ["", "", 3],
      ["", 7, ""],
      ["", "", 6],
    ],
    [
      ["", "", 6],
      [9, 2, ""],
      ["", 4, ""],
    ],
    [
      [9, "", 7],
      ["", 3, ""],
      ["", "", ""],
    ],
  ],
];

const puzzleFourKey = [
  [
    [
      [3, 5, 4],
      [8, 9, 7],
      [6, 1, 2],
    ],
    [
      [6, 2, 8],
      [3, 5, 1],
      [4, 7, 9],
    ],
    [
      [9, 7, 1],
      [4, 2, 6],
      [5, 8, 3],
    ],
  ],
  [
    [
      [1, 7, 6],
      [4, 3, 9],
      [5, 2, 8],
    ],
    [
      [9, 8, 5],
      [2, 6, 7],
      [1, 3, 4],
    ],
    [
      [3, 4, 2],
      [1, 5, 8],
      [7, 6, 9],
    ],
  ],
  [
    [
      [7, 6, 5],
      [2, 4, 3],
      [9, 8, 1],
    ],
    [
      [8, 1, 3],
      [7, 9, 6],
      [5, 4, 2],
    ],
    [
      [2, 9, 4],
      [8, 1, 5],
      [6, 3, 7],
    ],
  ],
];

const puzzleFourStartPosition = [
  [
    [
      ["", 5, ""],
      [8, "", 7],
      ["", 1, ""],
    ],
    [
      ["", 2, ""],
      ["", "", ""],
      ["", 7, ""],
    ],
    [
      ["", 7, ""],
      [4, "", 6],
      ["", 8, ""],
    ],
  ],
  [
    [
      ["", "", ""],
      [4, "", 9],
      ["", "", ""],
    ],
    [
      [9, "", 5],
      ["", "", ""],
      [1, "", 4],
    ],
    [
      ["", "", ""],
      [1, "", 8],
      ["", "", ""],
    ],
  ],
  [
    [
      ["", 6, ""],
      [2, "", 3],
      ["", 8, ""],
    ],
    [
      ["", 1, ""],
      ["", "", ""],
      ["", 4, ""],
    ],
    [
      ["", 9, ""],
      [8, "", 5],
      ["", 3, ""],
    ],
  ],
];

const puzzleFiveKey = [
  [
    [
      [5, 9, 7],
      [4, 6, 1],
      [8, 2, 3],
    ],
    [
      [2, 4, 1],
      [9, 3, 8],
      [5, 7, 6],
    ],
    [
      [6, 3, 8],
      [5, 7, 2],
      [1, 9, 4],
    ],
  ],
  [
    [
      [7, 5, 6],
      [3, 8, 9],
      [2, 1, 4],
    ],
    [
      [3, 8, 2],
      [4, 1, 5],
      [7, 6, 9],
    ],
    [
      [9, 4, 1],
      [2, 6, 7],
      [8, 5, 3],
    ],
  ],
  [
    [
      [6, 3, 2],
      [9, 4, 5],
      [1, 7, 8],
    ],
    [
      [1, 5, 7],
      [8, 2, 3],
      [6, 9, 4],
    ],
    [
      [4, 8, 9],
      [7, 1, 6],
      [3, 2, 5],
    ],
  ],
];

const puzzleFiveStartPosition = [
  [
    [
      ["", "", 7],
      ["", "", 1],
      ["", 2, ""],
    ],
    [
      ["", 4, 1],
      [9, "", ""],
      ["", "", ""],
    ],
    [
      ["", "", ""],
      [5, "", ""],
      ["", 9, 4],
    ],
  ],
  [
    [
      [7, "", ""],
      [3, "", ""],
      ["", 1, ""],
    ],
    [
      ["", 8, ""],
      [4, "", 5],
      ["", 6, ""],
    ],
    [
      ["", 4, ""],
      ["", "", 7],
      ["", "", 3],
    ],
  ],
  [
    [
      [6, 3, ""],
      ["", "", 5],
      ["", "", ""],
    ],
    [
      ["", "", ""],
      ["", "", 3],
      [6, 9, ""],
    ],
    [
      ["", 8, ""],
      [7, "", ""],
      [3, "", ""],
    ],
  ],
];

const sudokuData = [
  {
    answerKey: puzzleOneKey,
    startPoint: puzzleOneStartPosition,
    difficulty: "easy",
  },
  {
    answerKey: JSON.stringify(puzzleTwoKey),
    startPoint: JSON.stringify(puzzleTwoStartPosition),
    difficulty: "easy",
  },
  {
    answerKey: JSON.stringify(puzzleThreeKey),
    startPoint: JSON.stringify(puzzleThreeStartPosition),
    difficulty: "easy",
  },
  {
    answerKey: JSON.stringify(puzzleFourKey),
    startPoint: JSON.stringify(puzzleFourStartPosition),
    difficulty: "easy",
  },
  {
    answerKey: JSON.stringify(puzzleFiveKey),
    startPoint: JSON.stringify(puzzleFiveStartPosition),
    difficulty: "easy",
  },
];

const seedComments = () => Sudokus.bulkCreate(sudokuData);

module.exports = seedComments;
