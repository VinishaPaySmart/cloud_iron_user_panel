from fastapi import FastAPI
from route import router

app = FastAPI(title="Laundry API")

app.include_router(router)