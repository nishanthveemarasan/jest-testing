import {beforeEach, describe, expect, test, jest, afterEach} from '@jest/globals';
import { UserCredentialsDataAccess } from '../../../app/server_app/data/UserCredentialsDataAccess';
import { Account } from '../../../app/server_app/model/AuthModel';

const insertMock = jest.fn<(data:any) => Promise<string>>();
const getByMock = jest.fn<(arg1: string, arg2: string) => Promise<object>>();
const deleteMock = jest.fn<(id: string) => Promise<void>>();
jest.mock('../../../app/server_app/data/DataBase.ts', () => ({
        DataBase: jest.fn().mockImplementation(() => ({
            insert: insertMock,
            getBy: getByMock,
            delete: deleteMock
        })),    
}));
const mockUser: Account = {
    id: '',
    userName: 'testuser',
    password: 'password123'
};
describe.skip('UserCredentialsDataAccess', () => {
    let sut: UserCredentialsDataAccess;
    beforeEach(() => {
        sut = new UserCredentialsDataAccess();
    });
    afterEach(() => {
        jest.clearAllMocks();
    });

    const someId = '12345';

    test('should insert user credentials into the database and return id', async() => {
   
        insertMock.mockResolvedValueOnce(someId);
        const result = await sut.addUser(mockUser);
        expect(result).toBe(someId);
        expect(insertMock).toHaveBeenCalledWith(mockUser);
     });

     test('should insert user credentials into the database and return id', async() => {
   
        insertMock.mockResolvedValueOnce(someId);
        await sut.addUser(mockUser);
        getByMock.mockResolvedValueOnce({...mockUser, id: someId});

        const result = await sut.getUserById(someId);
        expect(result).toEqual({...mockUser, id: someId});
        expect(getByMock).toHaveBeenCalledWith('id', someId);

     });

     test('get user by username', async() => {
   
        insertMock.mockResolvedValueOnce(someId);
        await sut.addUser(mockUser);
        getByMock.mockResolvedValueOnce({...mockUser, id: someId});

        const result = await sut.getUserByUserName("testuser");
        expect(result).toEqual({...mockUser, id: someId});
        expect(getByMock).toHaveBeenCalledWith('userName', 'testuser');

     });


});