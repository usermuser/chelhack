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
    status = raw_json['status']
    print(raw_json)
    return status
    # return {"categories": 'suck my nipple'}


@app.get("/categories_v2")
def read_categories_v2():
    return get_categories_v2(url)


def get_categories_v2(url):
    r = requests.get(url).json()['data']
    result = []
    for category in r:
        if category['category'] not in result:
            result.append(category['category'])
    return result

@app.get('/status')
def status():
    return get_status(url)


def get_json_with_all_goods(url):
    return requests.get(url).json()


def get_status(url):
    r = requests.get(url).json()['status']
    # print(r)
    return r






