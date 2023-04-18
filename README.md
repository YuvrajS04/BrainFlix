# BrainFlix Frontend

## Description

BrainFlix is a full stack web application for video sharing and streaming. This repository contains the frontend code for the BrainFlix application. It is built using modern web technologies such as React and Axios for handling API requests.

https://user-images.githubusercontent.com/123492654/232643280-4c779354-fcb8-47e5-a3ea-32498a6eee16.mov
## Features

- Upload videos with video title and description
- Watch videos with video details and comments
- Browse related videos
- Responsive design for desktop, tablet and mobile devices
<img width="484" alt="Screenshot 2023-04-17 at 5 55 36 PM" src="https://user-images.githubusercontent.com/123492654/232641563-b3aeb504-6f8a-4b46-8b02-2a3e8cfda3c7.png">
<img width="712" alt="Screenshot 2023-04-17 at 5 57 05 PM" src="https://user-images.githubusercontent.com/123492654/232641725-9dd2137b-a6d0-4991-a5d3-942cf3961cfc.png">
- Utilizes React for frontend development
- Utilizes Axios for API requests
- Utilizes React Router for routing

## Technologies Used

- React
- Axios
- React Router
- HTML
- CSS
- JavaScript

## Components

This project includes the following components:

- `VideoList`: Renders a list of videos
<img width="312" alt="Screenshot 2023-04-17 at 5 43 53 PM" src="https://user-images.githubusercontent.com/123492654/232640265-0ee75a39-22f0-4e54-9ee5-7ae7bd8d7ee4.png">
- `VideoDetail`: Renders the details of a specific video, including comments
<img width="939" alt="Screenshot 2023-04-17 at 5 45 18 PM" src="https://user-images.githubusercontent.com/123492654/232640363-044da527-0649-4827-b00b-533d5e91e31e.png">
- `VideoForm`: Renders a form for uploading a new video
<img width="1323" alt="Screenshot 2023-04-17 at 5 53 57 PM" src="https://user-images.githubusercontent.com/123492654/232641356-5c2cd328-02ad-4afe-b5b5-7f206bcf610a.png">

## Getting Started

To run this project on your local machine, please follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your web browser and go to `http://localhost:3000` to access the application

## API

This project uses a RESTful API to fetch and post video data. The API is hosted locally at `http://localhost:8082`. The endpoints used in this project are:

- `GET /videos`: Retrieves a list of videos
- `GET /videos/:videoId`: Retrieves a specific video by videoId
- `POST /videos`: Creates a new video with video title and description

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m "Your commit message here"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Create a pull request to the `main` branch of the original repository

## Acknowledgements

This project was developed as part of a web development course. Special thanks to the educators and TA's for their guidance and support.

## Contact

If you have any questions or suggestions, please feel free to contact me at [yuvrajsirohi22@gmail.com](mailto:yuvrajsirohi22@gmail.com).
