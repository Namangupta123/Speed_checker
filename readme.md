# Internet Speed Checker

A simple web application to check your internet connection speed, including download speed, upload speed, and ping.

## Features

- Real-time speed testing
- Measures download speed in Mbps
- Measures upload speed in Mbps 
- Displays ping latency in milliseconds
- Clean and simple user interface

## Technical Stack

### Backend (server.py)
- FastAPI framework for the REST API
- Python speedtest-cli library for speed measurements
- CORS middleware enabled for frontend access
- Error handling for failed speed tests

### Frontend (index.html)
- Pure HTML/CSS/JavaScript implementation
- Async/await for API calls
- Real-time display updates
- Responsive design

## How to Use

1. Start the backend server:
   ```python
   cd backend
   pip install -r requirements.txt
   uvicorn server:app --reload
   ```

2. Open the frontend:
   - Navigate to the frontend directory
   - Open index.html in your web browser

3. Click the "Check Speed" button to start testing
   - Wait while the test runs (may take 15-30 seconds)
   - Results will display automatically when complete
