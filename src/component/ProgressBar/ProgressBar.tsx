import React from 'react'
import "./ProgressBar.css"

interface ProgressBarProps {
    bgColor?: string
    progress?: string
    height?: number
}
const ProgressBar: React.FC<ProgressBarProps> = props => {
    const { bgColor, progress, height } = props
    const Parentdiv = {
        height: height,
        borderColor: bgColor
    }

    const Childdiv = {
        width: `${progress}%`,
        backgroundColor: bgColor,
    }

    return (
        <article className="progressBar-box" style={Parentdiv}>
            <section className="progressBar-content" style={Childdiv}>
                <section className="progressBar-text">{progress} % Proses</section>
            </section>
        </article>
    )
}

export default ProgressBar