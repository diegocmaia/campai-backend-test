define({ "api": [  {    "type": "get",    "url": "/search",    "title": "Get all orgs, contacts and groups according to the text filter",    "name": "Search",    "group": "Search",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "text",            "description": "<p>Text to be searched. If it's empty, an empty object will be returned</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": true,            "field": "limit",            "defaultValue": "10",            "description": "<p>Limit of results per entity.</p>"          }        ]      }    },    "examples": [      {        "title": "Exemple of usage:",        "content": "curl -X GET 'http://localhost:3003/api/search?text=OSC%20Bremerhaven&limit=5'",        "type": "curl"      }    ],    "success": {      "examples": [        {          "title": "Example of response:",          "content": "HTTP/1.1 200 OK\n  {\n    \"contacts\": {\n        \"info\": {\n            \"total\": 1,\n            \"limit\": 5\n        },\n        \"data\": [\n            {\n                \"full_name\": \"Aaliyah Koczulla\",\n                \"avatar\": {\n                    \"top_type\": \"ShortHairShaggyMullet\",\n                    \"eye_type\": \"Wink\",\n                    \"mouth_type\": \"Twinkle\",\n                    \"skin_color\": \"DarkBrown\",\n                    \"clothe_type\": \"ShirtScoopNeck\",\n                    \"eyebrow_type\": \"RaisedExcited\",\n                    \"accessories_type\": \"Sunglasses\"\n                },\n                \"city\": \"Nord Milladorf\",\n                \"org_name\": \"SV Bergisch Gladbach 09\"\n            }\n        ]\n    },\n    \"groups\": {\n        \"info\": {\n            \"total\": 1,\n            \"limit\": 5\n        },\n        \"data\": [\n            {\n                \"name\": \"Busse - Lakomy\",\n                \"city\": \"Alt Elias\"\n            }\n        ]\n    },\n    \"orgs\": {\n        \"info\": {\n            \"total\": 1,\n            \"limit\": 5\n        },\n        \"data\": [\n            {\n                \"name\": \"SV Bergisch Gladbach 09\",\n                \"city\": \"Leidedorf\",\n                \"type\": \"other\"\n            }\n        ]\n    }\n  }",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "controllers/search.js",    "groupTitle": "Search"  }] });
