define({ "api": [
  {
    "type": "get",
    "url": "/api/getList",
    "title": "Get All Items",
    "name": "getAllItems",
    "group": "Items",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\" : true,\n  \"model\" : [\n           ...\n           {},\n           {},\n           {},\n           {},\n           ...\n            ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Items"
  }
] });
