# Fullstack Mobileye Task Solution

This document outlines the requirements and instructions for running the task and tests.

## Requirements
Ensure you have the following installed on your development environment:

- Node.js (version 18 or higher)
## Installation

Install all required dependencies:
```bash 
npm install
```
Start the development server:
```bash 
npm run dev
```
---

## Tests:
Run unit/integraion test script:
```bash 
npm run test
```
Run e2e test using cypress (make sure client + server running):
```bash 
cd apps/web | npm run e2e:chrome
```
## Containerization:
Create docker image:
```bash 
docker build -t mobileye-app:dev . 
```
Run container with image:
```bash 
 docker compose up  
 ```
 Open the app on browser:
 [http://localhost:5173/](http://localhost:5173/)
