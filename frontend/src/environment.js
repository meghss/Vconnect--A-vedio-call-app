let IS_PROD = true;
const server = IS_PROD ?
    "https://vconnect-a-vedio-call-app-1.onrender.com" :

    "http://localhost:8000"


export default server;