import { getStringInFo, StringUtils, toUpperCase } from "../app/Utils";
import { describe, it, expect, beforeEach } from '@jest/globals';

describe('Utils test suite', () => {

    describe('String Utils test', () => {
         
        let sut: StringUtils;
        beforeEach(()=>{
            sut = new StringUtils()
        });
        it('should return currect uppercase', ()=>{
            const result = sut.toUpperCase('hello');
            expect(result).toBe('HELLO');
        });

        it.todo('should return currect uppercase for mixed case string');
        it('should throw error for empty string', async() => {
            const expectError = () => {
                const result = sut.toUpperCase('');
            }
              expect(expectError).toThrow();
              expect(expectError).toThrow('Input string cannot be empty');
              expect(expectError).toThrow(new Error('Input string cannot be empty'));
              expect(expectError).toThrow(Error);
        });

        it('should throw error for empty string in try catch', () => {
            try{
                const result = sut.toUpperCase('');

            }catch(error){
                expect(error).toBeInstanceOf(Error);
                // expect(error).toHaveProperty('message', 'Input string cannot be empty');
            }


        });
    })
    it('should return uppercase', () => {
        // arrange
        const sut = toUpperCase;
        const expected = 'HELLO';
        
        //act
        const result = sut('hello');

        // assert
        expect(result).toBe(expected);
    });
    describe('ToUpercase Examples', () => {
        it.each([
            { input: 'hello', expected: 'HELLO' },
            { input: 'world', expected: 'WORLD' },
            { input: 'Jest', expected: 'JEST' },
        ])('$input to $expected', ({input, expected}) => {
            const result = toUpperCase(input);
            expect(result).toBe(expected);
        })
    })

    it('should return info for valid string', () => {
        const result = getStringInFo('My-String');
        expect(result.lowerCase).toBe('my-string');
        expect(result.extraInfo).toEqual({});
        expect(result.characters.length).toBe(9);
        expect(result.characters).toHaveLength(9);
        expect(result.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g']);
        expect(result.characters).toEqual(
            expect.arrayContaining(['M', 'y', 'S', 't', 'r', 'i', 'n', 'g', '-'])
        );
        expect(result.characters).toContain('M');
        expect(result.extraInfo).not.toBeUndefined();
        expect(result.extraInfo).toBeDefined();
        expect(result.extraInfo).toBeTruthy();
    })
});