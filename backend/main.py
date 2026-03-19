from fastapi import FastAPI
from datetime import date
from fastapi.middleware.cors import CORSMiddleware #Estetään CORS-errorit
from psql_api.measurements import get_measurements, get_measurements_mean, get_sensors_by_location
from psql_api.sensors import get_sensors, get_sensor_units
from psql_api.locations import get_amount_by_location, get_locations, get_measurements_by_date

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
def sensors():
    return get_sensors()

@app.get("/api/v1/measurements")
def root():
    return get_measurements()

@app.get("/api/v1/count_location/{user_location}")
def get_count_location(user_location: int):
    return get_amount_by_location(user_location)

@app.get("/api/v1/location_by_date/{user_location}/{user_date}")
def get__meas_date(user_location: int, user_date: date):
    return get_measurements_by_date(user_location, user_date)

@app.get("/api/v1/mean/{user_location}/{user_date}/{user_sensor}")
def get__mean(user_location: int, user_date: date, user_sensor: int):
    return get_measurements_mean(user_location, user_date, user_sensor)

@app.get("/api/v1/specific_sensor/{user_location}")
def get__specific_sensor(user_location: int):
    return get_sensors_by_location(user_location)

@app.get("/api/v1/sensor_unit/{user_sensor}")
def get__units(user_sensor: int):
    return get_sensor_units(user_sensor)