import requests
from fastapi import FastAPI
from pydantic import BaseModel

url = "http://chelhack.deletestaging.com/goods"

app = FastAPI()

@app.get("/categories")
def read_categories():
    raw_json = get_json_with_all_goods()
    print(raw_json)
    # return {"categories": categories}


def get_json_with_all_goods(url):
    return requests.get(url).json()


def get_categories(raw_json):
    categories = []
    goods = raw_json['data']
    for good in goods:
        category = good['category']
        if category not in categories:
            categories.append(category)
    return categories
