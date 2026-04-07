import  * as OtherUtilst from '../../app/doubles/OtherUtils.ts';
import {jest, test, describe, expect} from '@jest/globals';

// jest.mock('../../app/doubles/OtherUtils.ts', () => {
//     return{
//         calculateComplexity: jest.fn().mockReturnValue(30),
//         toLowerCaseWithId: jest.fn().mockReturnValue('abc'),
//     }
// });
jest.mock('uuid', () => {
    return {
        v4: jest.fn().mockReturnValue('1234-5678-9012-3456')
    };
});

describe.only('Mocking entire module - OtherUtils', () => {

    // test('calculateComplexity should return 0', () => {
    //     const result = OtherUtilst.calculateComplexity({
    //         length: 10,
    //         extraInfo: {
    //             field1: 'value1',
    //             field2: 'value2',
    //             field3: 'value3'
    //         }
    //     } as any);
    //     expect(result).toBe(30);
    // });

    // test('toUpperCaseWithhCB should call callback with mocked value', () => {
    //     const result = OtherUtilst.toUpperCase('abc');
    //     expect(result).toBe('ABC');
    // });

    test('test with id', () => {
        const result = OtherUtilst.toLowerCaseWithId('ABC');
        expect(result).toBe('abc1234-5678-9012-3456');
    });


});