import psycopg2
import os
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv

load_dotenv()

#=========================================================================================#
#                               LOCATIONS SQL-Queryt                           
#=========================================================================================#
def get_locations():
    with psycopg2.connect(database=os.getenv('DB'), user=os.getenv('DB_USER'), password=os.getenv('DB_PWD')) as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cursor:
            cursor.execute("SELECT l.location_id, l.city_id, c.city_name FROM locations l JOIN city c ON l.city_id = c.city_id")
            locations = cursor.fetchall()
            return locations
        
        
def get_measurements_by_location():
        with psycopg2.connect(database=os.getenv('DB'), user=os.getenv('DB_USER'), password=os.getenv('DB_PWD')) as conn:
            with conn.cursor(cursor_factory=RealDictCursor) as cursor:
                cursor.execute("SELECT * FROM locations")
                locations = cursor.fetchall()
                return locations
            
def get_amount_by_location(user_location):
        with psycopg2.connect(database=os.getenv('DB'), user=os.getenv('DB_USER'), password=os.getenv('DB_PWD')) as conn:
            with conn.cursor(cursor_factory=RealDictCursor) as cursor:
                cursor.execute(f"SELECT COUNT(*) AS measurement_count FROM measurements WHERE location_id = %s", (user_location,))
                locations = cursor.fetchall()
                return locations

def get_measurements_by_date(user_location, user_date):
        with psycopg2.connect(database=os.getenv('DB'), user=os.getenv('DB_USER'), password=os.getenv('DB_PWD')) as conn:
            with conn.cursor(cursor_factory=RealDictCursor) as cursor:  
                cursor.execute("SELECT * FROM measurements WHERE location_id = %s AND DATE(datetime) = %s",(user_location, user_date))
                rows = cursor.fetchall()
                return rows
