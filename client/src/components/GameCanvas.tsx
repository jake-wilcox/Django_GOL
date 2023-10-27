import React, { useRef, useEffect, useState } from 'react';

const GameCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [zoom, setZoom] = useState(1);

  //state and event handlers for zoom and scroll

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        context.fillStyle = 'blue'
        context.fillRect(0, 0, canvas.width, canvas.height);

        drawGrid(context)

      }else{
        //error handle
      }
    }else{
      //error handle
    }
    // Calculate what portion of the grid should be visible and render it on the canvas

    // Adjust for zoom level and scroll position
  }, [zoom]);


  const drawGrid = (context: CanvasRenderingContext2D) => {
        console.log('drawing grid')
        const screenWidth = window.innerWidth
        const screenHeight = window.innerHeight
        
        console.log(screenWidth)
        console.log(screenHeight)
        context.fillStyle = 'red'
        context.fill();
    // draw largest grid possable
    var i = 0
    var j = 0
    const squareToBorderRatio = 0.25
    const rectSize = 145
    while(i < screenHeight){
        console.log('big while')
      while(j < screenWidth){
        console.log('small while')
        context.rect(j, i, rectSize, rectSize);
        j += rectSize + Math.floor(rectSize * squareToBorderRatio) 
        console.log(j)

      }
      //move down a row
        i += rectSize + Math.floor(rectSize * squareToBorderRatio) 
        var j = 0
      
    }
            context.fill()

  }


  return (
    <div className='m-4'>
      <canvas ref={canvasRef}></canvas>
      {/* Render zoom and scroll controls */}
    </div>
  );
}

export default GameCanvas;

