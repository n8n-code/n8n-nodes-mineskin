import type { INodeProperties } from 'n8n-workflow';

export const utilDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Util"
					]
				}
			},
			"options": [
				{
					"name": "GET Validate Name",
					"value": "GET Validate Name",
					"action": "GET Validate Name",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/validate/name/{{$parameter[\"name\"]}}"
						}
					}
				},
				{
					"name": "GET Validate Uuid",
					"value": "GET Validate Uuid",
					"action": "GET Validate Uuid",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/validate/uuid/{{$parameter[\"uuid\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /validate/name/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Util"
					],
					"operation": [
						"GET Validate Name"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Util"
					],
					"operation": [
						"GET Validate Name"
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
						"Util"
					],
					"operation": [
						"GET Validate Name"
					]
				}
			}
		},
		{
			"displayName": "GET /validate/uuid/{uuid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Util"
					],
					"operation": [
						"GET Validate Uuid"
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
						"Util"
					],
					"operation": [
						"GET Validate Uuid"
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
						"Util"
					],
					"operation": [
						"GET Validate Uuid"
					]
				}
			}
		},
];
