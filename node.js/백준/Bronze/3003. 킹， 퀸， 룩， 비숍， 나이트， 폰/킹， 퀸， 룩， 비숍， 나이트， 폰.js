class Piece {
  static correct = [1, 1, 2, 2, 2, 8]
  /**
   *
   * @param {number} king
   * @param {number} queen
   * @param {number} rook
   * @param {number} bishop
   * @param {number} knihgt
   * @param {number} pawn
   */
  constructor(king, queen, rook, bishop, knight, pawn) {
    this.foundPieces = [king, queen, rook, bishop, knight, pawn]
  }

  solution() {
    const required = []
    for (let i = 0; i < this.foundPieces.length; i++) {
      const correctCnt = Piece.correct[i]
      const foundCnt = this.foundPieces[i]
      required.push(correctCnt - foundCnt)
    }
    console.log(required.join(" ").trim())
  }
}

const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().trim().split(" ").map(Number)

new Piece(...input).solution()
