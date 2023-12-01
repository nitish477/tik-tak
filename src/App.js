import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [player, setPlayer] = useState(1)
  const [board, setBoard] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: ''
  })
  const [winner, setWinner] = useState(null)

  const checkWin = () => {
    const symbol = player === 1 ? '❌' : '⭕'
    if (board[1] === symbol && board[2] === symbol && board[3] === symbol) {
      setWinner(player)
    }
    else if (board[4] === symbol && board[5] === symbol && board[6] === symbol) {
      setWinner(player)
    }
    else if (board[7] === symbol && board[8] === symbol && board[9] === symbol) {
      setWinner(player)
    }
    else if (board[1] === symbol && board[4] === symbol && board[7] === symbol) {
      setWinner(player)
    }
    else if (board[2] === symbol && board[5] === symbol && board[8] === symbol) {
      setWinner(player)
    }
    else if (board[3] === symbol && board[6] === symbol && board[9] === symbol) {
      setWinner(player)
    }
    else if (board[1] === symbol && board[5] === symbol && board[9] === symbol) {
      setWinner(player)
    }
    else if (board[3] === symbol && board[5] === symbol && board[7] === symbol) {
      setWinner(player)
    }


    setPlayer(player === 1 ? 2 : 1)

  }
  const play = (box) => {
    if (board[box] !== '' || winner !== null) {
      return
    }

    if (player === 1) {
      setBoard({ ...board, [box]: '❌' })
    }
    else {
      setBoard({ ...board, [box]: '⭕' })
    }


  }

  useEffect(() => {
    checkWin();
  }, [board])


  const reset = () => {
    setPlayer(1)
    setBoard({
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: ''
    })
    setWinner(null)
  }
  return (
    <>
      <h1 className='text-center'>Tik Tak Toes</h1>
      <div className='player-contanier'>
        <p className='player'>
          Player: ❌
        </p>
        <p className='player'>
          Player : ⭕
        </p>
      </div>
      <p className='text-center'>
        Current Player : {player === 1 ? '❌' : '⭕'}
      </p>
      <span className='text-center'>
        {
          winner ? <h1> Winner is  {player === 1 ? '❌' : '⭕'}</h1> : null
        }
      </span>
      <div className='board'>
        <div className='box-contanier'>
          <div className='box' onClick={() => { play(1) }}>
            {board[1]}
          </div>
          <div className='box' onClick={() => { play(2) }}>
            {board[2]}
          </div>
          <div className='box' onClick={() => { play(3) }}>
            {board[3]}
          </div>
        </div>
        <div className='box-contanier'>
          <div className='box' onClick={() => { play(4) }}>
            {board[4]}
          </div>
          <div className='box' onClick={() => { play(5) }}>
            {board[5]}
          </div>
          <div className='box' onClick={() => { play(6) }}>
            {board[6]}
          </div>
        </div>
        <div className='box-contanier'>
          <div className='box' onClick={() => { play(7) }}>
            {board[7]}
          </div>
          <div className='box' onClick={() => { play(8) }}>
            {board[8]}
          </div>
          <div className='box' onClick={() => { play(9) }}>
            {board[9]}
          </div>
        </div>
      </div>

      <button className='btn' onClick={reset}>Reset</button>
    </>
  );
}

export default App;
