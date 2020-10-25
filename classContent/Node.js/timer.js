let sec=0;
class Timer {
    Timer = () => {
        let sec=0;
    }
    logger = () => {
        console.log(sec+=1);
        if(sec == 4) {
            clearInterval();
        }
    }
}
module.exports = Timer;