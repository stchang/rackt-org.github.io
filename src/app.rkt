#lang racketscript/base

;; This is the tutorial app from: https://reactjs.org/tutorial/tutorial.html

;; import React from 'react';
;; import ReactDOM from 'react-dom';
;; import './index.css';
(require (for-syntax racket/base syntax/parse)
         racket/match
         rackt)

;; class Square extends React.Component {
;;   render() {
;;     return (
;;       <button className="square">
;;         {/* TODO */}
;;       </button>
;;     );
;;   }
;; }

(define (Square props . ..)
  (<el "button" #:props ($/obj [className "square"]
                               [onClick #js.props.onClick])
       #js.props.value))

;; class Board extends React.Component {
;;   renderSquare(i) {
;;     return <Square />;
;;   }

;;   render() {
;;     const status = 'Next player: X';

;;     return (
;;       <div>
;;         <div className="status">{status}</div>
;;         <div className="board-row">
;;           {this.renderSquare(0)}
;;           {this.renderSquare(1)}
;;           {this.renderSquare(2)}
;;         </div>
;;         <div className="board-row">
;;           {this.renderSquare(3)}
;;           {this.renderSquare(4)}
;;           {this.renderSquare(5)}
;;         </div>
;;         <div className="board-row">
;;           {this.renderSquare(6)}
;;           {this.renderSquare(7)}
;;           {this.renderSquare(8)}
;;         </div>
;;       </div>
;;     );
;;   }
;; }


;; function calculateWinner(squares) {
;;   const lines = [
;;     [0, 1, 2],
;;     [3, 4, 5],
;;     [6, 7, 8],
;;     [0, 3, 6],
;;     [1, 4, 7],
;;     [2, 5, 8],
;;     [0, 4, 8],
;;     [2, 4, 6],
;;   ];
;;   for (let i = 0; i < lines.length; i++) {
;;     const [a, b, c] = lines[i];
;;     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
;;       return squares[a];
;;     }
;;   }
;;   return null;
;; }

(define _board (vector #f #f #f #f #f #f #f #f #f))

;; TODO: components dont update properly when using a Racket vector as the board
;;       (because the pointer to vector stays the same?)
;; - UPDATE: use %XisNext state component to trigger update,
;;           so now vector is ok
(define-syntax BOARD
  (syntax-parser
    [:id #'_board]
    [(_ i) #'(vector-ref _board i)]
    [(_ i (~datum =) v) #'(vector-set! _board i v)]))

(define LINES
  '((0 1 2)
    (3 4 5)
    (6 7 8)
    (0 3 6)
    (1 4 7)
    (2 5 8)
    (0 4 8)
    (2 4 6)))

(define (calculateWinner)
  (for/or ([L LINES])
    (match-define (list a b c) L)
    (and (equal? (BOARD a) (BOARD b))
         (equal? (BOARD b) (BOARD c))
         (BOARD a))))

(define (Board props . ..)
  ;; use State Hook instead of explicit class constructor
  ;; use (arbitrary) "%" prefix convention for values created with use-state
  ;; This must be in Board to trigger updates
  (define-values (%XisNext set-%XisNext!) (use-state #t))

  (define (currentPlayer) (if %XisNext "X" "O"))

  (define (handleClick i)
    (unless (or (calculateWinner) (BOARD i))
      (BOARD i = (currentPlayer))
      (set-%XisNext! (not %XisNext))))

  (define (renderSquare i)
    (<el Square #:props ($/obj [value (BOARD i)]
                               [onClick (lambda (_) ; this must have (at least?) 1 arg?
                                          (handleClick i))])))

  (define winner (calculateWinner))

  (<el "div"
       (<el "div" #:props ($/obj [className "status"])
            (if winner
                (string-append winner " Wins!")
                (string-append "Current player: " (currentPlayer))))
       (<el "div" #:props ($/obj [className "board-row"])
            (renderSquare 0)
            (renderSquare 1)
            (renderSquare 2))
       (<el "div" #:props ($/obj [className "board-row"])
            (renderSquare 3)
            (renderSquare 4)
            (renderSquare 5))
       (<el "div" #:props ($/obj [className "board-row"])
            (renderSquare 6)
            (renderSquare 7)
            (renderSquare 8))))

;; class Game extends React.Component {
;;   render() {
;;     return (
;;       <div className="game">
;;         <div className="game-board">
;;           <Board />
;;         </div>
;;         <div className="game-info">
;;           <div>{/* status */}</div>
;;           <ol>{/* TODO */}</ol>
;;         </div>
;;       </div>
;;     );
;;   }
;; }

(define (Game props. ..)
  (<el "div" #:props ($/obj [className "game"])
       (<el "div" #:props ($/obj [className "game-board"])
            (<el Board))
       (<el "div" #:props ($/obj [className "game-info"])
            (<el "div" #;(status))
            #;(ol))))

;; // ========================================

;; ReactDOM.render(
;;   <Game />,
;;   document.getElementById('root')
;; );
(render (<el Game) "root")

;(render (<el app) "root")


