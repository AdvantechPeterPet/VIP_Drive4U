import requests

url = "https://api-sso-ensaas.sa.wise-paas.com/v4.0/auth/native"
data = {
  "username": "12192261@inha.edu",
  "password": "Gging00100!",
  "userDetail": True
}
headers = {
    }
try:
    response = requests.post(url, json=data, headers=headers)
    response.raise_for_status() 

    result = response.json()
    print(result)

except requests.exceptions.RequestException as e:
    print("API request failed:", e)