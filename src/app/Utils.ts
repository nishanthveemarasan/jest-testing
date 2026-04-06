export class StringUtils {
    public toUpperCase(str: string): string {
        if(!str){
            throw new Error('Input string cannot be empty');
        }
        return toUpperCase(str);

    }
}
export const toUpperCase = (str: string) => {
  return str.toUpperCase();
}

export type stringInfo = {
    lowerCase: string;
    upperCase: string;
    characters: string[];
    length: number;
    extraInfo: Object | undefined
}

export const getStringInFo = (str: string): stringInfo => {
    return {
        lowerCase: str.toLowerCase(),
        upperCase: str.toUpperCase(),
        characters: Array.from(str),
        length: str.length,
        extraInfo: {}
    }
}