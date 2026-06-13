import type { INodeProperties } from 'n8n-workflow';

export const getDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Get"
					]
				}
			},
			"options": [
				{
					"name": "GET Get Delay",
					"value": "GET Get Delay",
					"action": "GET Get Delay",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/get/delay"
						}
					}
				},
				{
					"name": "GET Get ID",
					"value": "GET Get ID",
					"action": "GET Get ID",
					"description": "Deprecated. Use /get/uuid instead.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/get/id/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "GET Get List",
					"value": "GET Get List",
					"action": "GET Get List",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/get/list/{{$parameter[\"page\"]}}"
						}
					}
				},
				{
					"name": "GET Get Uuid",
					"value": "GET Get Uuid",
					"action": "GET Get Uuid",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/get/uuid/{{$parameter[\"uuid\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /get/delay",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Get"
					],
					"operation": [
						"GET Get Delay"
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
						"Get"
					],
					"operation": [
						"GET Get Delay"
					]
				}
			}
		},
		{
			"displayName": "API Key API Key",
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
						"Get"
					],
					"operation": [
						"GET Get Delay"
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
						"Get"
					],
					"operation": [
						"GET Get Delay"
					]
				}
			}
		},
		{
			"displayName": "GET /get/id/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Get"
					],
					"operation": [
						"GET Get ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Get"
					],
					"operation": [
						"GET Get ID"
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
						"Get"
					],
					"operation": [
						"GET Get ID"
					]
				}
			}
		},
		{
			"displayName": "GET /get/list/{page}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Get"
					],
					"operation": [
						"GET Get List"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"required": true,
			"description": "For reference pagination, the uuid of the last skin in the previous page. For numeric pagination (deprecated), the page number or 'start'.",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Get"
					],
					"operation": [
						"GET Get List"
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
						"Get"
					],
					"operation": [
						"GET Get List"
					]
				}
			}
		},
		{
			"displayName": "GET /get/uuid/{uuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Get"
					],
					"operation": [
						"GET Get Uuid"
					]
				}
			}
		},
		{
			"displayName": "Uuid",
			"name": "uuid",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Get"
					],
					"operation": [
						"GET Get Uuid"
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
						"Get"
					],
					"operation": [
						"GET Get Uuid"
					]
				}
			}
		},
];
