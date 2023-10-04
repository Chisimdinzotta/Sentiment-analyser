## Overview

This is a full-stack web application allows users to perform sentiment analysis using the powerful GPT-3.5-turbo model. Users can input text, and the application will analyse the sentiment and provide the result.

## Features

- Input text field for user's sentiment analysis.
- Real-time analysis using the GPT-3.5-turbo model.
- Clear and intuitive user interface.

## Technologies Used

- Frontend: HTML, CSS, TypeScript
- Backend: Node.js, Express.js
- Sentiment Analysis: GPT-3.5-turbo model by OpenAI
- External Libraries: Axios (for making HTTP requests)

## Getting Started

### Prerequisites

- Node.js and npm should be installed on your machine.

### Installation

1. Clone the repository.


2. Install dependencies.

```bash
npm install
```

3. Set up environment variables.

   - Create a `.env` file in the root directory.
   - Add your OpenAI API key.

   ```
   OPENAI_API_KEY=your_api_key_here
   ```

### Usage

1. Start the server.

```bash
npm start
```

2. Visit `http://localhost:3001` in your web browser.

## How It Works

- The frontend provides a text input field where users can type or paste their content.
- When the user inputs text, it is sent to the backend for processing.
- The backend uses Axios to make a POST request to the GPT-3.5-turbo API for sentiment analysis.
- The response is received and displayed to the user.
- A button is displayed for another analysis


## Acknowledgements

- [OpenAI](https://openai.com/) for providing the powerful GPT-3.5-turbo model.

