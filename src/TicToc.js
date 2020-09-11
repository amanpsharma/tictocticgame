import React, { Component } from "react";
import Swal from "sweetalert2";

import "./App.css";
export default class TicToc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOne: "X",
      playerTwo: "O",
      currentPlayer: null,
      board: [],
      gameOver: false,
      message: "",
    };

    this.play = this.play.bind(this);
  }

  // Starts new game
  initBoard() {
    let blankBoard = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];

    this.setState({
      board: blankBoard,
      currentPlayer: this.state.playerOne,
      gameOver: false,
      message: "",
    });
  }

  // Toggles current player
  togglePlayer() {
    return this.state.currentPlayer === this.state.playerOne
      ? this.state.playerTwo
      : this.state.playerOne;
  }

  play(r, c) {
    if (!this.state.gameOver) {
      const board = this.state.board;
      let currentPlayer = this.state.currentPlayer;

      // If cell is null, place 'X' or 'O'
      if (!board[r][c]) {
        board[r][c] = currentPlayer;
        currentPlayer = this.togglePlayer();
      }

      // Check status of board
      let result = this.checkAll(board);
      if (result === this.state.playerOne) {
        this.setState({ board, gameOver: true, message: "Player 1 (x) wins!" });
      } else if (result === this.state.playerTwo) {
        this.setState({ board, gameOver: true, message: "Player 2 (○) wins!" });
      } else if (result === "draw") {
        this.setState({ board, gameOver: true, message: "Draw game." });
      } else {
        this.setState({ board, currentPlayer });
      }
    } else {
      this.setState({ message: "Game over. Please start a new game." });
    }
  }

  checkVertical(board) {
    for (let c = 0; c < 3; c++) {
      if (board[0][c]) {
        if (board[0][c] === board[1][c] && board[0][c] === board[2][c]) {
          return board[0][c];
        }
      }
    }
  }

  checkDiagonalRight(board) {
    if (board[0][0]) {
      if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return board[0][0];
      }
    }
  }

  checkDiagonalLeft(board) {
    if (board[0][2]) {
      if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return board[0][2];
      }
    }
  }

  checkHorizontal(board) {
    for (let r = 0; r < 3; r++) {
      if (board[r][0]) {
        if (board[r][0] === board[r][1] && board[r][0] === board[r][2]) {
          return board[r][0];
        }
      }
    }
  }

  checkDraw(board) {
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (board[r][c] === null) {
          return null;
        }
      }
    }
    return "draw";
  }

  checkAll(board) {
    return (
      this.checkVertical(board) ||
      this.checkDiagonalRight(board) ||
      this.checkDiagonalLeft(board) ||
      this.checkHorizontal(board) ||
      this.checkDraw(board)
    );
  }

  componentWillMount() {
    this.initBoard();
  }

  message() {
    Swal.fire({
      title: "Custom animation with Animate.css",
      confirmButtonText: "Game over",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Thanks!", "Your game is over try new game.", "success");
      }
    },()=>{
        this.initBoard()
    });
  }

  render() {
    return (
      <div>
        <div
          className="button"
          onClick={() => {
            this.initBoard();
          }}
        >
          New Game
        </div>

        <table>
          <thead></thead>
          <tbody>
            {this.state.board.map((row, i) => (
              <Row key={i} row={row} rowIndex={i} play={this.play} />
            ))}
          </tbody>
        </table>
        <p className="message">{this.state.message}</p>
        {this.state.message.length > 0 && this.message()}
      </div>
    );
  }
}
// Row component
const Row = ({ row, rowIndex, play }) => {
  return (
    <tr>
      {row.map((cell, i) => (
        <Cell
          key={i}
          rowIndex={rowIndex}
          cellValue={cell}
          cellIndex={i}
          play={play}
        />
      ))}
    </tr>
  );
};
// Cell component
const Cell = ({ cellValue, rowIndex, cellIndex, play }) => {
  let symbol;
  if (cellValue === "X") {
    symbol = "×";
  } else if (cellValue === "O") {
    symbol = "○";
  }

  return (
    <td>
      <div
        className="cell"
        onClick={() => {
          play(rowIndex, cellIndex);
        }}
      >
        <div className="play">{symbol}</div>
      </div>
    </td>
  );
};
