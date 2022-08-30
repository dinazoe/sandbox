from flask import Flask

app = Flask(__name__)

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

if __name__ == "__main__":
    app.run(debug=True)