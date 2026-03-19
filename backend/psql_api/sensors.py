import psycopg2
import os
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv

load_dotenv()


#=========================================================================================#
#                                   SENSORS SQL-Queryt                           
#=========================================================================================#
def get_sensors():
    with psycopg2.connect(database=os.getenv('DB'), user=os.getenv('DB_USER'), password=os.getenv('DB_PWD')) as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cursor:
            cursor.execute("SELECT sensors_id FROM openaq.sensors")
            sensors = cursor.fetchall()
            return sensors

def get_sensor_units(user_sensor):
    with psycopg2.connect(database=os.getenv('DB'), user=os.getenv('DB_USER'), password=os.getenv('DB_PWD')) as conn:
        with conn.cursor(cursor_factory=RealDictCursor) as cursor:
            cursor.execute("SELECT units FROM openaq.sensors WHERE sensors_id = %s", (user_sensor))
            sensor_unit = cursor.fetchall()
            return sensor_unit
