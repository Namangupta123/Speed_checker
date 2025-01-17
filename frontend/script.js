document.getElementById('checkSpeed').addEventListener('click', async()=>{
    const result=document.getElementById('results');
    result.innerHTML=('Checking.....');
    try{
        const response=await fetch('http://127.0.0.1:8000/speedTest');
        const data=await response.json();
        document.getElementById('download').textContent=data.download_speed
        document.getElementById('upload').textContent=data.upload_speed
        document.getElementById('ping').textContent=data.Ping
    } 
    catch (error){
        console.log('Error', error);
        result.innerHTML=('Error in speed checking');
    }
});