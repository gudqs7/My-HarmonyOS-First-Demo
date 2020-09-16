import router from '@system.router';

var counter = 3;
var timer = null;

var pv1 = null;
var pv2 = null;

export default {
    data: {
        imgsrc: "",
        seconds: ""
    },
    onInit() {
        this.imgsrc = '/common/' + counter.toString() + '.png';
        this.seconds = counter.toString();

        pv1 = this.data1;
        pv2 = this.data2;
    },
    onShow() {
        timer = setInterval(this.run, 1000);
    },
    run() {
        counter -= 1;
        if (counter != 0) {
            this.imgsrc = '/common/' + counter.toString() + '.png';
            this.seconds = counter.toString();
        } else {
            this.imgsrc = '';
            this.seconds = '';
            clearInterval(timer);
            timer = null;

            router.replace({
                uri: 'pages/xunlian/xunlian',
                params : {
                    "key1": pv1,
                    "key2": pv2
                }
            })
        }
    }
}
