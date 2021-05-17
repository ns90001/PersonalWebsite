import React, { useRef, useEffect } from 'react'
import {rgbToHex, useRadioGroup} from "@material-ui/core";

const Background = props => {

    const canvasRef = useRef(null)

    const draw = (ctx, frameCount) => {
        // background animation

        ctx.beginPath();
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        let randX = Math.random() * ctx.canvas.width;
        let randX2 = Math.random() * ctx.canvas.width;
        let randomColor = Math.floor(Math.random()*16777215).toString(16);

        ctx.fillStyle = randomColor;
        ctx.strokeStyle = "#"+randomColor;
        ctx.moveTo(randX, 0);
        ctx.lineTo(randX2, ctx.canvas.height);
        ctx.fill();
        ctx.stroke();
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let frameCount = 0
        let animationFrameId

        //Our draw came here
        const render = () => {
            frameCount++
            draw(ctx, frameCount)
            animationFrameId = window.requestAnimationFrame(render)
        }
        render()

        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])

    return <canvas ref={canvasRef} {...props}/>
}

export default Background