import {beforeEach, describe, expect, test, jest, afterEach} from '@jest/globals';
import { DataBase } from '../../../app/server_app/data/DataBase.ts';
import * as IdGenerator from '../../../app/server_app/data/IdGenerator.ts';

jest.mock('../../../app/server_app/data/IdGenerator.ts', () => ({
    generateRandomId: jest.fn().mockReturnValue('123'),
}));
type someTypeWithId = {
    id: string;
    name: string;
    color: string;
}

type objectWithId = {
    id: string;
}

const element: someTypeWithId = {
    id: '',
    name: 'test',
    color: 'red'
}

describe.skip('Database', () => {
    let sut: DataBase<someTypeWithId>;
    beforeEach(() => {
        sut = new DataBase<someTypeWithId>();
        // jest.spyOn(IdGenerator, 'generateRandomId').mockReturnValue('123');
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    test('Add item to database and return id', async() => {
        const result = await sut.insert(element);
        expect(result).toBe('123');
    });

    test('should get element after inter', async() => {
        await sut.insert(element);
        const result = await sut.getBy('id', '123');
        expect(result).toEqual(
            expect.objectContaining({
                id: '123',
                name: 'test',
                color: 'red'
            })
        );
    });

    test('should find elements after inter', async() => {
        await sut.insert(element);
        const result = await sut.findAllBy('name', 'test');
        expect(result).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    name: expect.any(String),
                })
            ]
            )
        );
    });

    test('update an element', async() => {
        await sut.insert(element);
        await sut.update('123', 'name', 'newtest');
        const result = await sut.getBy('id', '123');
        expect(result).toEqual(
            expect.objectContaining({
                name: 'newtest'
            })
        );
    });

    test('delete an element', async() => {
        await sut.insert(element);
        await sut.delete('123');
        const result = await sut.getBy('id', '123');
        expect(result).toBeUndefined();
    });

    test('get all elements', async() => {
        await sut.insert(element);
        const result = await sut.getAllElements();
        console.log(result);
        expect(result).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: '123',
                })
            ])
        );
        expect(result.length).toBe(1);
    });
});