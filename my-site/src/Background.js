import React, { useRef, useEffect } from 'react'

const Background = props => {

    const canvasRef = useRef(null)

    const draw = (ctx, frameCount) => {
        // background animation

        ctx.beginPath();

        ctx.moveTo(0, ctx.canvas.height / 2);

        for (let i = 0; i < ctx.canvas.width; i++) {
            ctx.lineTo(i, (ctx.canvas.height / 2) * Math.sin(i * 0.1) * 10);
        }

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