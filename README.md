# OpenAQ Database Search

A full-stack web application for querying air quality data stored in a PostgreSQL database.
The project uses a React + Vite frontend, a FastAPI backend, and OpenAQ-based measurement data.

## Overview

This project was created as part of the **Advanced Data Management** course project in 2026.

The main goal of the project was to:
- Build a working PostgreSQL database from OpenAQ air quality data.
- Create a backend API for database queries.
- Build a frontend interface for users to search and view results.
- Practice full-stack development with React, FastAPI, and SQL.

## Features

The application allows users to:
- Browse available measurement locations.
- Select sensors available at a chosen location.
- Query mean measurement values by location, sensor, and date.
- View sensor unit information.
- Use a simple UI with tooltips and guided form selections.

Example parameters in the dataset include:
- PM2.5
- PM10
- NO2
- O3
- SO2

## Tech Stack

### Frontend
- React
- Vite
- CSS

### Backend
- FastAPI
- Python

### Database
- PostgreSQL
- SQLWorkbench / pgAdmin4
  
## Running the project

### Backend
Open a terminal in `backend/`, activate the virtual environment, install dependencies from `requirements.txt`, and start the FastAPI server.

### Frontend
Open a second terminal in `frontend/`, install dependencies with npm, and start the Vite development server.
