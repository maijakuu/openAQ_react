from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware #Estetään CORS-errorit

app = FastAPI() #FastAPI:n joku oma kirjasto, antaa terminaaliin docsit yms.

origins = [
    "http://localhost:5174", #Lisätään sallittu portti
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Hello World"}