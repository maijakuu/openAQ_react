from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware #Estetään CORS-errorit
from psql_api.sensors import get_sensors
from psql_api.locations import get_locations
from psql_api.measurements import get_measurements

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

#FastAPI palauttaa JSON-yhteensopivaa dataa
#fastAPI:lla myös oma app.get -funktio, gettiä ei siis tarvi eriksee määrittää kuten Flaskissa
@app.get("/api/v1/locations")
def root():
    return get_locations()

@app.get("/api/v1/sensors")
def root():
    return get_sensors()

@app.get("/api/v1/measurements")
def root():
    return get_measurements()