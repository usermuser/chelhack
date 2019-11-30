import requests
from fastapi import FastAPI

url = "http://chelhack.deletestaging.com/goods"

app = FastAPI()


@app.get("/categories")
def read_categories():
    raw_json = get_json_with_all_goods(url)
    categories = get_categories(raw_json)
    status = raw_json['status']
    return {'categories': categories}


@app.get('/status')
def status():
    return get_status(url)


def get_json_with_all_goods(url):
    return requests.get(url).json()


def get_status(url):
    return get_json_with_all_goods(url)['status']


def get_categories(raw_json):
    categories = []
    goods = raw_json['data']
    for good in goods:
        category = good['category']
        if category not in categories:
            categories.append(category)
    return categories
