from flask import Flask
import json
import os

DATA_FILE = "data.json"

app = Flask(__name__)

def create_json(overwrite:bool=False) -> None:
    if os.path.exists(DATA_FILE) and overwrite:
        topics = {
            "topics": {
                "First Topic": {
                    "How many people to switch a lightbulb?": "like 2 and a half?"
                }
            }
        }
        dumped = json.dumps(topics)
        with open(DATA_FILE, "w") as file:
            file.write(dumped)
            file.close()

@app.route('/')
def hello():
    return '<h1>Hello, World!</h1>'

@app.route('/servers')
def servers():
    return {
        "server1": {
            "sql-server": "healthy",
            "random-service": "healthy",
            "something-else": "NA"
        },
        "server2": {
            "iis": "healthy",
            "service1": "healthy",
            "service2": "NA"
        }
    }

@app.route('/getTopics')
def topics():
    with open(DATA_FILE, "r") as file:
        json_data = file.read()
    return json.loads(json_data)


if __name__ == "__main__":
    create_json(overwrite=True)
    app.run(host="0.0.0.0", port=80, debug=True)