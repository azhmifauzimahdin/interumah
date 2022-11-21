import React from "react"
import "./Chat.css"

export interface ChatProps {
    number?: number
    size?: 'md'
}
const Chat: React.FC<ChatProps> = props => {
    const { number } = props
    const size = props.size || 'md'

    return (
        <svg className={`chat chat-size-${size}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.813 47">
            <g id="Group_1" data-name="Group 1" transform="translate(0 0)">
                <path id="Path_1" data-name="Path 1" d="M42,26.284c0,10.1-9.4,18.284-21,18.284a23.9,23.9,0,0,1-6.161-.8A38.473,38.473,0,0,1,3.864,46.991a.68.68,0,0,1-.717-.946A27.732,27.732,0,0,0,5.169,38.3,16.945,16.945,0,0,1,0,26.284C0,16.186,9.4,8,21,8S42,16.186,42,26.284Zm-28.875,0a2.606,2.606,0,0,1-.769,1.847,2.634,2.634,0,0,1-3.712,0,2.6,2.6,0,0,1,0-3.694,2.625,2.625,0,0,1,4.481,1.847Zm10.5,0a2.606,2.606,0,0,1-.769,1.847,2.634,2.634,0,0,1-3.712,0,2.6,2.6,0,0,1,0-3.694,2.625,2.625,0,0,1,4.481,1.847ZM31.5,28.9a2.632,2.632,0,0,0,1.856-.765,2.6,2.6,0,0,0,0-3.694,2.625,2.625,0,0,0-4.481,1.847,2.606,2.606,0,0,0,.769,1.847A2.632,2.632,0,0,0,31.5,28.9Z" fill="#b7b7b7" fillRule="evenodd" />
                <circle id="Ellipse_1" data-name="Ellipse 1" cx="11.991" cy="11.991" r="11.991" transform="translate(26.033 0.799)" fill="#c80707" stroke="#101b94" strokeWidth="1.599" />
                <text id="_5" data-name="5" transform="translate(35 16.799)" fill="#ffffff" fontSize="11" fontFamily="Roboto-Bold, Roboto" fontWeight="700"><tspan x="0" y="0">{number}</tspan></text>
            </g>
        </svg>
    )
}

export default Chat