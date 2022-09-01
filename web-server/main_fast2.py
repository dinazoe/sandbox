# main.py

from fastapi import FastAPI
app = FastAPI()

def verify_configuration():
    pass


@app.get("/")
async def root():
    return {"message": "Hello World"}