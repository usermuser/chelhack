import requests
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

url = "http://chelhack.deletestaging.com/goods"

app = FastAPI()

origins = [
    "http://10.100.67.106:8041",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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


@app.get("/black-friday/categories/{category_name}")
def read_goods_of_category(category_name: str):
    raw_json = get_json_with_all_goods(url)
    goods = get_goods_by_category(raw_json, category_name)
    return {'goods': goods}


@app.get('/black-friday/status')
def status():
    return get_status(url)


def get_json_with_all_goods(url):
    return requests.get(url).json()


def get_status(url):
    return get_json_with_all_goods(url)['status']


def get_categories(raw_json):
    categories = []
    goods = raw_json['data']
    print(goods)
    for good in goods:
        category = good['category']
        if category not in categories:
            categories.append(category)
    return categories


def get_goods_by_category(raw_json, category):
    goods = raw_json['data']
    result_goods = []
    for good in goods:
        if good['category'] == category:
            result_goods.append(good)
    return result_goods
