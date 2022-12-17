import React from "react"
import "./LoadingScreen.css"

interface LoadingScreenProps {
    type?: 'fixed' | 'content'
}
const LoadingScreen: React.FC<LoadingScreenProps> = props => {
    const type = props.type || 'fixed'
    return (
        <div className={`loader loader-type-${type}`}>
            <div className="loader-inner">
                <div className="loader-line-wrap">
                    <div className="loader-line"></div>
                </div>
                <div className="loader-line-wrap">
                    <div className="loader-line"></div>
                </div>
                <div className="loader-line-wrap">
                    <div className="loader-line"></div>
                </div>
                <div className="loader-line-wrap">
                    <div className="loader-line"></div>
                </div>
                <div className="loader-line-wrap">
                    <div className="loader-line"></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen
