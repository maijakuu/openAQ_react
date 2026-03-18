import psycopg2
import os
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv

load_dotenv()

def get_locations():
    with psycopg2.connect(database=os.getenv('DB'), user=os.getenv('DB_USER'), password=os.getenv('DB_PWD')) as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cursor:
            cursor.execute("SELECT location_id, city FROM openaq.locations")
            locations = cursor.fetchall()
            return locations
        
        
def get_measurements_by_location():
        with psycopg2.connect(database=os.getenv('DB'), user=os.getenv('DB_USER'), password=os.getenv('DB_PWD')) as conn:
            with conn.cursor(cursor_factory=RealDictCursor) as cursor:
                cursor.execute("SELECT * FROM openaq.locations")
                locations = cursor.fetchall()
                return locations
            
def get_amount_by_location(user_location):
        with psycopg2.connect(database=os.getenv('DB'), user=os.getenv('DB_USER'), password=os.getenv('DB_PWD')) as conn:
            with conn.cursor(cursor_factory=RealDictCursor) as cursor:
                cursor.execute(f"SELECT COUNT(*) AS measurement_count FROM openaq.measurements WHERE location_id = %s", (user_location,))
                locations = cursor.fetchall()
                return locations

