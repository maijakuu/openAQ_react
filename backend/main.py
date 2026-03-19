from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware #Estetään CORS-errorit
from psql_api.measurements import get_measurements
from psql_api.sensors import get_sensors, get_sensor_type
from psql_api.locations import get_amount_by_location, get_locations

app = FastAPI() #FastAPI:n joku oma kirjasto, antaa terminaaliin docsit yms.

origins = [
    "http://localhost:5174", #Lisätään sallittu portti
    "http://localhost:5173"
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

#FastAPI GET-routes 
#API endpoints
@app.get("/api/v1/locations")
def root():
    return get_locations()

@app.get("/api/v1/sensors")
def root():
    return get_sensors()

@app.get("/api/v1/measurements")
def root():
    return get_measurements()

@app.get("/api/v1/sensor_types")
def root():
    return get_sensor_type()

@app.get("/api/v1/count_location/{user_location}")
def get_count_location(user_location: int):
    
    return get_amount_by_location(user_location)
