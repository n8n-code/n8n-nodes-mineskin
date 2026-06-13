import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class MineskinApi implements ICredentialType {
        name = 'N8nDevMineskinApi';

        displayName = 'Mineskin API';

        icon: Icon = { light: 'file:../nodes/Mineskin/mineskin.png', dark: 'file:../nodes/Mineskin/mineskin.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.mineskin.org',
                        required: true,
                        placeholder: 'https://api.mineskin.org',
                        description: 'The base URL of your Mineskin API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'key': '={{$credentials.apiKey}}',
                        },
                },
        };


}
