import React, { useRef, useEffect, useState } from 'react';
import CanvasOverlay from './CanvasOverlay';
import GameOverlay from './GameOverlay';
import MenuBar from './MenuBar';
import { drawGrid } from '../utils/canvasFunctions';

const GameCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    console.log('big canvas overlay')
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        context.fillStyle = '#1E4383'
        context.fillRect(0, 0, canvas.width, canvas.height);
        drawGrid(context)
      } else {
        //error handle
      }
    } else {
      //error handle
    }
  }, []);




  return (
    <div className='relative'>
      <canvas ref={canvasRef} className='absolute z-10'></canvas>
      <CanvasOverlay />
      <GameOverlay />
      <MenuBar />
    </div>
  );
}
export default GameCanvas;

