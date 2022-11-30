import React from "react"
import "./HandPayment.css"

const HandPayment: React.FC = () => {
    return (
        <svg className="handPayment" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.925 27.7375C36.4578 27.3141 35.8976 27.0065 35.2897 26.8393C34.6817 26.6721 34.043 26.6501 33.425 26.775L24.7625 28.2625C24.7517 27.176 24.3113 26.1379 23.5375 25.375L17.325 19.25H4.375C3.91087 19.25 3.46575 19.4344 3.13756 19.7626C2.80937 20.0908 2.625 20.5359 2.625 21C2.625 21.4641 2.80937 21.9092 3.13756 22.2374C3.46575 22.5656 3.91087 22.75 4.375 22.75H15.925L21.0875 27.9125C21.2106 28.0425 21.2792 28.2147 21.2792 28.3938C21.2792 28.5728 21.2106 28.745 21.0875 28.875C20.9431 29.0041 20.7562 29.0755 20.5625 29.0755C20.3688 29.0755 20.1819 29.0041 20.0375 28.875L16.975 25.8125C16.6381 25.5112 16.202 25.3446 15.75 25.3446C15.298 25.3446 14.8619 25.5112 14.525 25.8125C14.1987 26.1543 14.0167 26.6087 14.0167 27.0813C14.0167 27.5538 14.1987 28.0082 14.525 28.35L17.5875 31.325C17.9692 31.7271 18.4315 32.0441 18.9442 32.2552C19.4568 32.4663 20.0083 32.5668 20.5625 32.55C21.0982 32.5477 21.63 32.459 22.1375 32.2875L34.0375 30.1875C34.1599 30.1652 34.2857 30.1693 34.4064 30.1995C34.5271 30.2297 34.64 30.2852 34.7375 30.3625C34.8951 30.5289 34.9882 30.7461 35 30.975C35.0041 31.1797 34.9363 31.3794 34.8084 31.5392C34.6805 31.6991 34.5006 31.8091 34.3 31.85L18.025 34.825L8.4875 27.0375H4.375C3.91087 27.0375 3.46575 27.2219 3.13756 27.5501C2.80937 27.8783 2.625 28.3234 2.625 28.7875C2.625 29.2516 2.80937 29.6967 3.13756 30.0249C3.46575 30.3531 3.91087 30.5375 4.375 30.5375H7.2625L16.975 38.5L34.9125 35.2625C35.9245 35.0951 36.8429 34.5705 37.5011 33.7839C38.1593 32.9972 38.5137 32.0006 38.5 30.975C38.5068 30.3501 38.368 29.7323 38.0947 29.1703C37.8213 28.6084 37.4208 28.1178 36.925 27.7375Z" fill="white" />
            <path d="M30.0124 17.5875C28.7241 17.6129 27.4632 17.2131 26.4249 16.45C26.2305 16.3207 26.0121 16.2316 25.7828 16.188C25.5534 16.1444 25.3176 16.1472 25.0893 16.1961C24.8609 16.245 24.6447 16.3391 24.4534 16.4729C24.262 16.6067 24.0993 16.7774 23.9749 16.975C23.8369 17.1391 23.7339 17.3297 23.6722 17.535C23.6104 17.7403 23.5913 17.9561 23.6158 18.1691C23.6404 18.3821 23.7082 18.5878 23.8151 18.7737C23.922 18.9595 24.0657 19.1216 24.2374 19.25C25.3633 20.0402 26.6468 20.5775 27.9999 20.825V22.75C27.9999 23.2141 28.1843 23.6592 28.5125 23.9874C28.8407 24.3156 29.2858 24.5 29.7499 24.5C30.214 24.5 30.6592 24.3156 30.9874 23.9874C31.3155 23.6592 31.4999 23.2141 31.4999 22.75V20.825C32.4598 20.6834 33.3653 20.2911 34.1249 19.6875C34.6734 19.2848 35.1182 18.7574 35.4225 18.1488C35.7268 17.5402 35.8819 16.8679 35.8749 16.1875C35.8749 12.95 32.8999 11.9 30.3624 11.375C27.8249 10.85 27.2999 10.2375 27.2999 9.8C27.2999 9.3625 27.4749 9.275 27.7374 9.0125C28.2202 8.75298 28.7652 8.63186 29.3124 8.6625C30.3291 8.65369 31.3285 8.92623 32.1999 9.45C32.3771 9.59455 32.5835 9.6988 32.805 9.75552C33.0265 9.81223 33.2577 9.82004 33.4825 9.77841C33.7073 9.73678 33.9203 9.6467 34.1068 9.51444C34.2933 9.38217 34.4488 9.2109 34.5624 9.0125C34.7124 8.83357 34.823 8.62506 34.8871 8.40054C34.9511 8.17602 34.9671 7.94053 34.9341 7.7094C34.9011 7.47827 34.8198 7.25669 34.6954 7.05908C34.5711 6.86148 34.4065 6.69228 34.2124 6.5625C33.3804 6.04893 32.4609 5.69299 31.4999 5.5125V3.5C31.4999 3.03587 31.3155 2.59075 30.9874 2.26256C30.6592 1.93437 30.214 1.75 29.7499 1.75C29.2858 1.75 28.8407 1.93437 28.5125 2.26256C28.1843 2.59075 27.9999 3.03587 27.9999 3.5V5.425C25.3749 5.8625 23.6249 7.6125 23.6249 9.975C23.6249 12.3375 26.5124 14.2625 29.3124 14.7875C32.1124 15.3125 32.1999 15.925 32.1999 16.3625C32.1999 16.8 31.2374 17.5875 30.0124 17.5875Z" fill="white" />
        </svg>
    )
}

export default HandPayment