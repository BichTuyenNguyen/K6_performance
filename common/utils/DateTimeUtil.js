export class DateTimeUtil {
    static getCurrentTime() {
        var timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        return today.toUTCString(); 
    }
}
