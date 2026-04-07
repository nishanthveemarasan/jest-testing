import { v4 } from 'uuid';


export type stringInfo = {
    lowerCase: string;
    upperCase: string;
    characters: string[];
    length: number;
    extraInfo: Object
}


export const calculateComplexity = (stringInfo: stringInfo) => {
    return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}

export const toUpperCaseWithhCB = (str: string, callback: (result: string) => void) => {
   if(!str){
       callback('Input string cannot be empty');
       return;
   }
   callback(`Result: ${str.toUpperCase()}`);
    return str.toUpperCase();
}

export const toUpperCase = (str: string): string => {
    return str.toUpperCase();
}

export const toLowerCaseWithId = (str: string): string => {
    return str.toLowerCase() + v4();
}


export class OtherUtils {

    callExternal(){
        console.log('Calling external API');
    }
    toUpperCase(str: string): string {
        return str.toUpperCase();

    }

    logString(str: string): void {
        console.log(str);
    }

}
