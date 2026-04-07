import {describe, it, expect, afterEach, jest, beforeEach} from '@jest/globals';
import { calculateComplexity, OtherUtils, toUpperCaseWithhCB } from '../../app/doubles/OtherUtils';

describe('OtherUtils test suite', () => {
    it('should test OtherUtils', () => {
        const someInfo= {
            length: 10,
            extraInfo:{
                field1: 'value1',
                field2: 'value2',
                field3: 'value3'
            }
        }

        const result = calculateComplexity(someInfo as any)
        expect(result).toBe(30);
    });

    describe('ToUpperCaseWithCB - with spy', () => {
        let sut: OtherUtils;
        beforeEach(() => {
            sut = new OtherUtils();
        });

        it('should call toUpperCase with correct argument', () => {
            const resultWithSpy = jest.spyOn(sut, 'toUpperCase');
            sut.toUpperCase('abc');
            expect(resultWithSpy).toHaveBeenCalledWith('abc');
        });

        it('should call logString with correct argument', () => {
            const resultWithSpy = jest.spyOn(console, 'log');
            sut.logString('abc');
            expect(resultWithSpy).toHaveBeenCalledWith('abc');
        });

        it('use the spy to replace the implementation', () => {
           jest.spyOn(sut, 'callExternal').mockImplementation(() => {
                console.log('Mocked external API call');
           });
           (sut).callExternal();
        });
    });

    describe('Describe tracking callback -with mock', () => {
        const callbackMock = jest.fn();
        afterEach(() => {
            jest.clearAllMocks();
        });
        it('ToUppercase - call callback for invlid input', () => {
            const result = toUpperCaseWithhCB('',callbackMock);
            expect(result).toBeUndefined();
            expect(callbackMock).toHaveBeenCalledWith('Input string cannot be empty');
            expect(callbackMock).toHaveBeenCalledTimes(1);
        });

        it('ToUppercase - call callback for valid input', () => {
            const result = toUpperCaseWithhCB('abc',callbackMock);
            expect(result).toBe('ABC');
            expect(callbackMock).toHaveBeenCalledWith('Result: ABC');
            expect(callbackMock).toHaveBeenCalledTimes(1);
        });
    });

    describe('Tracking Callback', () => {
        let cbArgs: string[] = [];
        let timesCalled: number = 0;
        const callbackMock = (arg: string) => {
            cbArgs.push(arg);
            timesCalled++;
        }
        afterEach(() => {            
            cbArgs = [];
            timesCalled = 0;
        });

        it('ToUppercase - call callback for invlid input', () => {
            const result = toUpperCaseWithhCB('',callbackMock);
            expect(result).toBeUndefined();
            expect(timesCalled).toBe(1);
            expect(cbArgs[0]).toBe('Input string cannot be empty');
        });

        it('ToUppercase - call callback for valid input', () => {
            const result = toUpperCaseWithhCB('abc',callbackMock);
            expect(result).toBe('ABC');
            expect(timesCalled).toBe(1);
            expect(cbArgs).toContain('Result: ABC');
        });


    });



    it('ToUppercase - call callback for valid input', () => {
        const result = toUpperCaseWithhCB('abc',() => {});
        expect(result).toBe('ABC');
    });
});
