# Use the official lightweight Python 3.10 image.
# https://hub.docker.com/_/python
FROM python:3.10-slim

# Set the working directory to /api within the container
WORKDIR /api

# Copy the requirements file into the container
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the API code and the Machine Learning model into the container
COPY . .

# Expose port 8000 for FastAPI
EXPOSE 8000

# Command to run the Uvicorn server, binding to 0.0.0.0
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
