import React, { useEffect, useState, useRef } from 'react'
import useMousePosition from '../utils/useMousePosition';
import { drawSquare, hoverSquare } from '../utils/canvasFunctions';

const CanvasOverlay = () => {


  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePosition = useMousePosition()
  var lastGridCords = [-1,-1]

  useEffect(() => {
    console.log('canvas overlay useeffect')

    //initalize canvas
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const gridCords: number[] = hoverSquare(mousePosition.x, mousePosition.y)
        if (gridCords != lastGridCords){
        drawSquare(context, gridCords[0], gridCords[1], '#21A7D9')
        lastGridCords = gridCords
        }

      } else {
        //error handle
      }
    } else {
      //error handle
    }

  }, [mousePosition]);




  return (
    <div>
      <canvas ref={canvasRef} className='absolute z-20'></canvas>
    </div>
  )
}
export default CanvasOverlay
