import requests

url = "https://api.yelp.com/v3/businesses/search"

querystring = {"location":"NY","ambience":"ambience_casual"}

payload = ""
headers = {
    "User-Agent": "insomnia/9.2.0",
    "Authorization": "Bearer -Ke3JIdS_u9WcpdOQs_L_l13-6qqQLYb2i8uaIyzFQF6bZFACPwylf7o4HsHA3GMyLpJ8RJT59hvbyMKnBGxmv-v9V7wREPwdd2a7ksdpV_4bN8C553CxdhGFnhSZnYx"
}

response = requests.request("GET", url, data=payload, headers=headers, params=querystring)

print(response.text)