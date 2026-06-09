import type { INodeProperties } from 'n8n-workflow';

export const generateDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Generate"
					]
				}
			},
			"options": [
				{
					"name": "POST Generate Upload",
					"value": "POST Generate Upload",
					"action": "POST Generate Upload",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/generate/upload"
						}
					}
				},
				{
					"name": "POST Generate Url",
					"value": "POST Generate Url",
					"action": "POST Generate Url",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/generate/url"
						}
					}
				},
				{
					"name": "POST Generate User",
					"value": "POST Generate User",
					"action": "POST Generate User",
					"description": "",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/generate/user"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /generate/upload",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Generate"
					],
					"operation": [
						"POST Generate Upload"
					]
				}
			}
		},
		{
			"displayName": "User Agent",
			"name": "User-Agent",
			"required": true,
			"description": "Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples",
			"default": "ExampleApp/v1.0",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"User-Agent": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate"
					],
					"operation": [
						"POST Generate Upload"
					]
				}
			}
		},
		{
			"displayName": "POST /generate/upload<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Generate"
					],
					"operation": [
						"POST Generate Upload"
					]
				}
			}
		},
		{
			"displayName": "Api Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "Get your key from https://mineskin.org/apikey",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate"
					],
					"operation": [
						"POST Generate Upload"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearerauth",
			"type": "string",
			"default": "",
			"description": "Get your key from https://mineskin.org/apikey",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate"
					],
					"operation": [
						"POST Generate Upload"
					]
				}
			}
		},
		{
			"displayName": "POST /generate/url",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Generate"
					],
					"operation": [
						"POST Generate Url"
					]
				}
			}
		},
		{
			"displayName": "User Agent",
			"name": "User-Agent",
			"required": true,
			"description": "Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples",
			"default": "ExampleApp/v1.0",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"User-Agent": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate"
					],
					"operation": [
						"POST Generate Url"
					]
				}
			}
		},
		{
			"displayName": "Url",
			"name": "url",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate"
					],
					"operation": [
						"POST Generate Url"
					]
				}
			}
		},
		{
			"displayName": "Api Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "Get your key from https://mineskin.org/apikey",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate"
					],
					"operation": [
						"POST Generate Url"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearerauth",
			"type": "string",
			"default": "",
			"description": "Get your key from https://mineskin.org/apikey",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate"
					],
					"operation": [
						"POST Generate Url"
					]
				}
			}
		},
		{
			"displayName": "POST /generate/user",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Generate"
					],
					"operation": [
						"POST Generate User"
					]
				}
			}
		},
		{
			"displayName": "User Agent",
			"name": "User-Agent",
			"required": true,
			"description": "Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples",
			"default": "ExampleApp/v1.0",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"User-Agent": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate"
					],
					"operation": [
						"POST Generate User"
					]
				}
			}
		},
		{
			"displayName": "Uuid",
			"name": "uuid",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "uuid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate"
					],
					"operation": [
						"POST Generate User"
					]
				}
			}
		},
		{
			"displayName": "Api Key API Key",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "Get your key from https://mineskin.org/apikey",
			"required": false,
			"routing": {
				"send": {
					"type": "query",
					"property": "key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate"
					],
					"operation": [
						"POST Generate User"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearerauth",
			"type": "string",
			"default": "",
			"description": "Get your key from https://mineskin.org/apikey",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Generate"
					],
					"operation": [
						"POST Generate User"
					]
				}
			}
		},
];
