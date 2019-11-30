import requests
from fastapi import FastAPI

url = "http://chelhack.deletestaging.com/goods"

app = FastAPI()

@app.get("/black-friday")
def read_root():
    raw_json = get_json_with_all_goods(url)
    goods = raw_json['data']
    return {'goods': goods}


@app.get("/black-friday/categories")
def read_categories():
    raw_json = get_json_with_all_goods(url)
    categories = get_categories(raw_json)
    status = raw_json['status']
    return {'categories': categories}

@app.get("/categories/{category_id}")
def read_goods_of_category(category_id: int):
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

