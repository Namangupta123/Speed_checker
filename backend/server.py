from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import speedtest

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get('/speedTest')
async def checkSpeed():
    try:
        st = speedtest.Speedtest()
        st.get_servers()
        st.get_best_server()
        downloadSpeed = st.download() / 1e6
        uploadSpeed = st.upload() / 1e6
        ping = st.results.ping
        return {
            "download_speed": downloadSpeed,
            "upload_speed": uploadSpeed,
            "Ping": ping
        }
    except Exception as e:
        return {"error": str(e)}
        