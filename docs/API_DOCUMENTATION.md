# Learner AI API Documentation

## Overview

The Learner AI API is a NestJS-based service that analyzes speech-to-text output to create learner profiles for language learning applications. It supports both MongoDB and MySQL databases and provides comprehensive analytics for character-level confidence scoring in Hindi and Tamil languages.

## Base URL
```
http://localhost:<PORT>
```

## API Documentation
Swagger documentation is available at: `/api`

## Authentication
Currently, the API uses AI4Bharat API key for ASR services:
```
Authorization: Bearer <AI4BHARAT_API_KEY>
```

## Database Configuration
The application supports dual database configuration:
- Set `DATABASE=mongodb` for MongoDB
- Set `DATABASE=mysql` for MySQL

---

## MongoDB Endpoints

### 1. Update Learner Profile (Audio Processing)

**Endpoint:** `POST /scores/updateLearnerProfile`

**Description:** Processes audio files through ASR (Automatic Speech Recognition) and creates/updates learner profiles with confidence scores.

**Request Body:**
```json
{
  "original_text": "string",
  "audio": "base64-encoded-audio-data",
  "user_id": "string",
  "session_id": "string", 
  "language": "hi|ta",
  "date": "2023-12-01T00:00:00.000Z"
}
```

**Response (Success - 201):**
```json
{
  "status": "success",
  "msg": "Successfully stored data to learner profile"
}
```

**Response (Error - 500):**
```json
{
  "status": "error",
  "message": "Server error - <error_details>"
}
```

**Example Usage:**
```bash
curl -X POST http://localhost:3000/scores/updateLearnerProfile \
  -H "Content-Type: application/json" \
  -d '{
    "original_text": "नमस्ते",
    "audio": "UklGRiQAAABXQVZFZm10IBAAAAABAAEA...",
    "user_id": "user123",
    "session_id": "session456",
    "language": "hi",
    "date": "2023-12-01T10:00:00.000Z"
  }'
```

### 2. Get Target Characters by Session

**Endpoint:** `GET /scores/GetTargets/session/{sessionId}`

**Description:** Retrieves characters with confidence scores below 0.90 threshold for a specific session.

**Path Parameters:**
- `sessionId` (string): The session identifier

**Response (Success - 200):**
```json
[
  {
    "character": "न",
    "score": 0.75
  },
  {
    "character": "म",
    "score": 0.82
  }
]
```

**Example Usage:**
```bash
curl -X GET http://localhost:3000/scores/GetTargets/session/session456
```

### 3. Get Target Characters by User

**Endpoint:** `GET /scores/GetTargets/user/{userId}`

**Description:** Retrieves characters with confidence scores below 0.90 threshold for a specific user across all sessions.

**Path Parameters:**
- `userId` (string): The user identifier

**Response (Success - 200):**
```json
[
  {
    "character": "न",
    "score": 0.75
  },
  {
    "character": "स्",
    "score": 0.68
  }
]
```

### 4. Get Confident Set by Session

**Endpoint:** `GET /scores/GetConfidentSet/session/{sessionId}`

**Description:** Retrieves characters with confidence scores >= 0.90 threshold for a specific session.

**Path Parameters:**
- `sessionId` (string): The session identifier

**Response (Success - 200):**
```json
[
  {
    "character": "त",
    "score": 0.95
  },
  {
    "character": "े",
    "score": 0.92
  }
]
```

### 5. Get Confident Set by User

**Endpoint:** `GET /scores/GetConfidentSet/user/{userId}`

**Description:** Retrieves characters with confidence scores >= 0.90 threshold for a specific user.

**Path Parameters:**
- `userId` (string): The user identifier

**Response (Success - 200):**
```json
[
  {
    "character": "त",
    "score": 0.95
  },
  {
    "character": "े",
    "score": 0.92
  }
]
```

### 6. Get Mean Score by User

**Endpoint:** `GET /scores/GetMeanScore/user/{userId}`

**Description:** Calculates mean confidence scores for each character across all sessions for a user.

**Path Parameters:**
- `userId` (string): The user identifier

**Response (Success - 200):**
```json
[
  {
    "token": "न",
    "mean": 0.78
  },
  {
    "token": "म",
    "mean": 0.85
  }
]
```

### 7. Get Mean Score by Session

**Endpoint:** `GET /scores/GetMeanScore/session/{sessionId}`

**Description:** Calculates mean confidence scores for each character in a specific session.

**Path Parameters:**
- `sessionId` (string): The session identifier

**Response (Success - 200):**
```json
[
  {
    "token": "न",
    "mean": 0.78
  },
  {
    "token": "म",
    "mean": 0.85
  }
]
```

### 8. Get Familiarity Score by User

**Endpoint:** `GET /scores/GetFamiliarityScore/user/{userId}`

**Description:** Calculates familiarity scores (median) for each character across all user sessions.

**Path Parameters:**
- `userId` (string): The user identifier

**Response (Success - 200):**
```json
[
  {
    "token": "न",
    "median": 0.80
  },
  {
    "token": "म",
    "median": 0.87
  }
]
```

### 9. Get Familiarity Score by Session

**Endpoint:** `GET /scores/GetFamiliarityScore/session/{sessionId}`

**Description:** Calculates familiarity scores (median) for each character in a specific session.

**Path Parameters:**
- `sessionId` (string): The session identifier

**Response (Success - 200):**
```json
[
  {
    "token": "न",
    "median": 0.80
  },
  {
    "token": "म",
    "median": 0.87
  }
]
```

---

## MySQL Endpoints

### 1. Create Score

**Endpoint:** `POST /scores`

**Description:** Creates a new score record in MySQL database.

**Request Body:**
```json
{
  "user_id": "string",
  "session_id": "string",
  "token": "string",
  "hexcode": "string",
  "confidence_score": 0.85,
  "identification_status": 1
}
```

**Response (Success - 201):**
```json
{
  "status": "success mysql",
  "data": {
    "user_id": "user123",
    "session_id": "session456",
    "score_id": 1,
    "token": "न",
    "hexcode": "0928",
    "confidence_score": 0.85,
    "identification_status": 1,
    "timestamp": "2023-12-01T10:00:00.000Z"
  }
}
```

### 2. Get All Scores

**Endpoint:** `GET /scores`

**Description:** Retrieves all score records from MySQL database.

**Response (Success - 200):**
```json
[
  {
    "user_id": "user123",
    "session_id": "session456",
    "score_id": 1,
    "token": "न",
    "hexcode": "0928",
    "confidence_score": 0.85,
    "identification_status": 1,
    "timestamp": "2023-12-01T10:00:00.000Z"
  }
]
```

### 3. Get Score by ID

**Endpoint:** `GET /scores/{id}`

**Description:** Retrieves a specific score record by ID.

**Path Parameters:**
- `id` (string): The score identifier

### 4. Get Scores by User

**Endpoint:** `GET /scores/byuser/{id}`

**Description:** Retrieves all score records for a specific user.

**Path Parameters:**
- `id` (string): The user identifier

### 5. Get Scores by Session

**Endpoint:** `GET /scores/bysession/{id}`

**Description:** Retrieves all score records for a specific session.

**Path Parameters:**
- `id` (string): The session identifier

### 6. Update Score

**Endpoint:** `PATCH /scores/{id}`

**Description:** Updates a specific score record.

**Path Parameters:**
- `id` (string): The score identifier

**Request Body:**
```json
{
  "confidence_score": 0.90,
  "identification_status": 1
}
```

### 7. Delete Score

**Endpoint:** `DELETE /scores/{id}`

**Description:** Deletes a specific score record.

**Path Parameters:**
- `id` (string): The score identifier

---

## Common Response Codes

- **200 OK**: Request successful
- **201 Created**: Resource created successfully
- **400 Bad Request**: Invalid request parameters
- **500 Internal Server Error**: Server error

---

## Rate Limiting

Currently, no rate limiting is implemented. Consider implementing rate limiting for production use.

---

## Error Handling

All endpoints return standardized error responses:

```json
{
  "status": "error",
  "message": "Detailed error message"
}
```

---

## Language Support

The API currently supports:
- **Hindi (hi)**: Devanagari script
- **Tamil (ta)**: Tamil script

Language-specific vowel signs and character processing are handled automatically based on the `language` parameter.