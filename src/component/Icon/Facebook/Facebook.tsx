import React from "react"
import "./Facebook.css"

const Facebook: React.FC = props => {
    return (
        <svg className="facebook" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35 17.5439C35 7.85965 27.16 0 17.5 0C7.84 0 0 7.85965 0 17.5439C0 26.0351 6.02 33.1053 14 34.7368V22.807H10.5V17.5439H14V13.1579C14 9.77193 16.7475 7.01754 20.125 7.01754H24.5V12.2807H21C20.0375 12.2807 19.25 13.0702 19.25 14.0351V17.5439H24.5V22.807H19.25V35C28.0875 34.1228 35 26.6491 35 17.5439Z" fill="white" />
        </svg>
    )
}

export default Facebook