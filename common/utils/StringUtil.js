export class StringUtil{
    static parse(str) {
        var args = [].slice.call(arguments, 1),
            i = 0;
    
        return str.replace(/%s/g, () => args[i++]);
    }
}
