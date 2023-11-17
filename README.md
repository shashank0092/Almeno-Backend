# Course-APP-Backend

Welcome to Your Course-APP-Backend! This project is built using Node.js and other technologies. Before you start, please follow the instructions below to set up your environment.

## Prerequisites

- Node.js version 19.4.0 (Recommended: Use [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) to manage Node.js versions)
- npm (Node Package Manager)

## Getting Started

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/your-username/your-project.git
    ```

2. Change into the project directory:

    ```bash
    cd your-project
    ```

3. Change your Node.js version to 19.4.0 using NVM:

    ```bash
    nvm use 19.4.0
    ```

   If you don't have NVM installed, you can download it [here](https://github.com/nvm-sh/nvm#installation).

4. Install project dependencies:

    ```bash
    npm install
    ```

## Environment Variables

Before running the project, make sure to set the following environment variables:

- **DB**: MongoDB connection string
  ```plaintext
  DB="mongodb+srv://your-username:your-password@your-cluster-url/your-database-name?retryWrites=true&w=majority"
  
- **KEY:**: Your API key 
  ```plaintext
  KEY=your-api-key
  
  
- **SECRET:**:Your API secret
  ```plaintext
  SECRET=your-api-secret
  
  
- **CLUSTER:**:Pusher cluster 
  ```plaintext
  CLUSTER=your-cluster
  
- **ENCRYPTED:**:Enable encryption (true/false) 
  ```plaintext
  APP_ID=your-app-id
  
  
- **APP_ID:**:Your application ID 
  ```plaintext
  ENCRYPTED=true
  
  