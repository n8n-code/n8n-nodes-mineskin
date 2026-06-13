import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { generateDescription } from './resources/generate';
import { getDescription } from './resources/get';
import { utilDescription } from './resources/util';

export class Mineskin implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Mineskin',
                name: 'N8nDevMineskin',
                icon: { light: 'file:./mineskin.png', dark: 'file:./mineskin.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Client implementations:',
                defaults: { name: 'Mineskin' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevMineskinApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Generate",
					"value": "Generate",
					"description": ""
				},
				{
					"name": "Get",
					"value": "Get",
					"description": ""
				},
				{
					"name": "Util",
					"value": "Util",
					"description": ""
				}
			],
			"default": ""
		},
		...generateDescription,
		...getDescription,
		...utilDescription
                ],
        };
}
