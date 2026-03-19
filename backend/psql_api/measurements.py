import psycopg2
import os
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv

load_dotenv()
#=========================================================================================#
#                                   MEASUREMENTS SQL-Queryt                           
#=========================================================================================#
def get_measurements():
    with psycopg2.connect(database=os.getenv('DB'), user=os.getenv('DB_USER'), password=os.getenv('DB_PWD')) as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cursor:
            cursor.execute("SELECT * FROM openaq.measurements")
            measurements = cursor.fetchall()
            return measurements
        
def get_measurements_mean(user_location, user_date, user_sensor):
    with psycopg2.connect(database=os.getenv('DB'), user=os.getenv('DB_USER'), password=os.getenv('DB_PWD')) as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cursor:
            cursor.execute("SELECT AVG(value) AS avg_value FROM openaq.measurements WHERE location_id = %s AND DATE(datetime) = %s AND sensors_id = %s",(user_location, user_date, user_sensor))
            meanvalue = cursor.fetchone()
            return meanvalue