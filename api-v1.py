import requests
import ujson
from fastapi import FastAPI
from pydantic import BaseModel
from waitress import serve


goods_url = "http://chelhack.deletestaging.com/goods"

app = FastAPI()


# class Category(BaseModel):
#     # id: int
#     name: str


@app.get("/categories")
def read_categories():
    raw_json = get_json_with_all_goods(goods_url)
    categories = get_categories(raw_json)
    return {"categories": categories}


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


if __name__ == '__main__':
    serve(app, host='192.168.1.85', port=8041)
