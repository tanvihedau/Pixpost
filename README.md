# Pixpost 📸

A full-stack photo-sharing web application where users can upload images with captions and browse a live feed of posts.

## Features

- **Create Post** – Upload an image and add a caption
- **Feed** – Browse all uploaded posts in a scrollable feed
- **Cloud Storage** – Images are stored on [ImageKit](https://imagekit.io/)
- **Persistent Data** – Post metadata (image URL + caption) saved in MongoDB

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, React Router v7, Axios |
| Backend | Node.js, Express 5 |
| Database | MongoDB (Mongoose) |
| File Upload | Multer (memory storage) |
| Image Storage | ImageKit |

## Project Structure

```
Pixpost/
├── Backend/
│   ├── server.js            # Entry point – starts Express server
│   └── src/
│       ├── app.js           # Express app & route definitions
│       ├── db/
│       │   └── db.js        # MongoDB connection
│       ├── models/
│       │   └── post.model.js  # Mongoose Post schema
│       └── services/
│           └── storage.service.js  # ImageKit upload helper
└── Frontend/
    ├── index.html
    └── src/
        ├── App.jsx          # Router setup
        └── pages/
            ├── Feed.jsx     # Displays all posts
            └── CreatePost.jsx  # Form to create a new post
```

## Getting Started

### Prerequisites

- Node.js ≥ 18
- A MongoDB instance (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- An [ImageKit](https://imagekit.io/) account (for the private key)

### 1. Clone the repository

```bash
git clone https://github.com/tanvihedau/Pixpost.git
cd Pixpost
```

### 2. Configure the Backend

```bash
cd Backend
npm install
```

Create a `.env` file inside the `Backend/` directory:

```env
MONGODB_URI=your_mongodb_connection_string
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

Start the server:

```bash
node server.js
# Server is running on port 3000
```

### 3. Configure the Frontend

```bash
cd ../Frontend
npm install
npm run dev
# App running at http://localhost:5173
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/create-post` | Upload an image and caption to create a post |
| `GET` | `/posts` | Retrieve all posts |


### `POST /create-post`

**Form fields (multipart/form-data):**

| Field | Type | Description |
|-------|------|-------------|
| `image` | File | Image file to upload |
| `caption` | String | Caption for the post |

**Response:**
```json
{
  "message": "Post created successfully",
  "post": {
    "_id": "...",
    "image": "https://ik.imagekit.io/...",
    "caption": "Your caption here"
  }
}
```

## Environment Variables

| Variable | Location | Description |
|----------|----------|-------------|
| `MONGODB_URI` | `Backend/.env` | MongoDB connection string |
| `IMAGEKIT_PRIVATE_KEY` | `Backend/.env` | ImageKit private API key |

## Scripts

### Backend
```bash
node server.js      # Start the server
```

### Frontend
```bash
npm run dev         # Start the Vite dev server
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Run ESLint
```
