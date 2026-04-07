import {beforeEach, describe, expect, test, jest, afterEach} from '@jest/globals';
import { RegisterHandler } from '../../../app/server_app/handlers/RegisterHandler';
import { IncomingMessage, ServerResponse } from 'http';
import { Authorizer } from '../../../app/server_app/auth/Authorizer';
import { Account } from '../../../app/server_app/model/AuthModel';

const getRequestBodyMock = jest.fn<(data:any) => Promise<any>>();
jest.mock('../../../app/server_app/utils/Utils.ts', () => ({
    getRequestBody: (args:any) =>getRequestBodyMock(args)
}));
const registerUserMock = jest.fn<(userName: string, password: string) => Promise<string>>();
jest.mock('../../../app/server_app/auth/Authorizer.ts', () => ({
    Authorizer: jest.fn().mockImplementation(() => ({
        registerUser: registerUserMock
    }))
}));
describe.skip('RegisterHandler', () => {
    let sut: RegisterHandler;
    let authorizeMock: Authorizer;
    const request = {
        method: "POST"
    } as unknown as IncomingMessage;

   

    const responseMock = {
        statusCode: 0,
        writeHead: jest.fn(),
        write: jest.fn()
    } ;
    beforeEach(() => {
        authorizeMock = new Authorizer()
        sut = new RegisterHandler(
            request ,
            responseMock as unknown as ServerResponse,
            authorizeMock
        );
    });

    afterEach(() => {
        jest.clearAllMocks();
    });


    test('it shuld register user and return 201', async () => {
        // request.method = 'POST';
        const userData: Account = { id: '', userName: 'testuser', password: 'testpass' };
        getRequestBodyMock.mockResolvedValueOnce({...userData, id: '12345'});
        registerUserMock.mockResolvedValueOnce('12345');

        await sut.handleRequest();
        
        expect(getRequestBodyMock).toHaveBeenCalledWith(request);
        expect(registerUserMock).toHaveBeenCalledWith(userData.userName, userData.password);
        // expect(responseMock.statusCode).toBe(HTTP_CODES.CREATED);
        // expect(responseMock.writeHeaed).toHaveBeenCalledWith(201, { 'Content-Type': 'application/json' });
        // expect(responseMock.write).toHaveBeenCalledWith(JSON.stringify({ userId: '12345' }));
    }  );
});