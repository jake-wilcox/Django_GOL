import React, { useState, useEffect, useRef } from 'react';
import { hoverSquare, drawSquare } from '../utils/canvasFunctions';

const GameOverlay = () => {
  type aliveSquaresType = number[][]

  const [running, setRunning] = useState(false)
  const [aliveSquares, setAliveSquares] = useState<aliveSquaresType>([])
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  var mousePosition: { x: number, y: number }

  const handleClick: React.MouseEventHandler<HTMLCanvasElement> = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    console.log(`Mouse clicked at (${mouseX}, ${mouseY})`);
    mousePosition = { x: mouseX, y: mouseY };
    const newSquare = hoverSquare(mouseX, mouseY)
    if (aliveSquares.length == 0) {
      setAliveSquares([...aliveSquares, newSquare])
    } else {
      for (let i = 0; i < aliveSquares.length; i++) {
        if (newSquare[0] == aliveSquares[i][0] && newSquare[1] == aliveSquares[i][1]) {
          console.log('splicing')
          aliveSquares.splice(i, 1)
          setAliveSquares([...aliveSquares])
        } else {

          setAliveSquares([...aliveSquares, newSquare])
        }

      }
    }
    console.log(aliveSquares)

  };


  const gameTimer = () => {
    if (running) {
      setTimeout(gameTimer, 3000)
      //gameLogic
      //set state to rerender

    }
  }



  useEffect(() => {
    console.log('game overlay useeffect')

    //initalize canvas
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        for (let i = 0; i < aliveSquares.length; i++) {
          drawSquare(context, aliveSquares[i][0], aliveSquares[i][1], '#FF0000')
        }

      } else {
        //error handle
      }
    } else {
      //error handle
    }

  }, [aliveSquares]);


  return (
    <canvas onClick={handleClick} ref={canvasRef} className='absolute z-30'>
    </canvas>
  );
};

export default GameOverlay;
