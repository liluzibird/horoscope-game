import requests
def get_businesses(location, sing):
    
    url = "https://api.yelp.com/v3/businesses/search"

    querystring = {"location":location}

    payload = ""
    headers = {
        "User-Agent": "insomnia/9.2.0",
        "Authorization": "Bearer -Ke3JIdS_u9WcpdOQs_L_l13-6qqQLYb2i8uaIyzFQF6bZFACPwylf7o4HsHA3GMyLpJ8RJT59hvbyMKnBGxmv-v9V7wREPwdd2a7ksdpV_4bN8C553CxdhGFnhSZnYx",
        "ngrok-skip-browser-warning": "69420"
    }

    response = requests.request("GET", url, data=payload, headers=headers, params=querystring)

    return response.json()