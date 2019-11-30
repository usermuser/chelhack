import requests
from fastapi import FastAPI
from pydantic import BaseModel

url = "http://chelhack.deletestaging.com/goods"

app = FastAPI()

# class Category(BaseModel):
#     # id: int
#     name: str


@app.get("/categories")
def read_categories():
    raw_json = get_json_with_all_goods()
    print(raw_json)
    # return {"categories": categories}

def get_json_with_all_goods(url):
    return requests.get(url).json()





