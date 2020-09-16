import router from '@system.router';

var picker1value = null;
var picker2value = null;
var picker1seconds = null;
var picker2seconds = null;

var timer1 = null;
var timer2 = null;
var timer3 = null;

var counter = 0;

export default {
    data: {
        seconds: 0,
        isshow: true,
        huxi: "吸气",
        percent: 0,
        duration: "",
        count: ""
    },
    onInit() {
        console.log('接收到页面传值为: ' + this.key1);
        console.log('接收到页面传值为: ' + this.key2);
        // 接受传值
        picker1value = this.key1;
        picker2value = this.key2;

        // 计算转换
        picker1seconds = parseInt(picker1value) * 60;
        this.seconds = picker1seconds;

        if (picker2value == '较慢') {
            picker2seconds = 6;
        } else if (picker2value == '舒缓') {
            picker2seconds = 4;
        } else if (picker2value == '较快') {
            picker2seconds = 2;
        }

        this.duration = picker2seconds + 's';
        this.count = (picker1seconds / picker2seconds).toString();

        timer1 = setInterval(this.run1, 1000);
        timer2 = setInterval(this.run2, picker2seconds * 1000);
    },
    onShow() {
        timer3 = setInterval(this.run3, picker2seconds/100 * 1000);
    },
    run1() {
        this.seconds--;
        if (this.seconds == 0) {
            clearInterval(timer1);
            timer1 = null;
            this.isshow = false;
        }
    },
    run2() {
        counter++;
        if (counter == picker1seconds / picker2seconds) {
            clearInterval(timer2);
            timer2 = null;
            this.huxi = '已完成';
            return;
        }
        
        if (this.huxi == "吸气") {
            this.huxi = "呼气";
        } else if (this.huxi=='呼气') {
            this.huxi = '吸气';
        }
    },
    run3() {
        this.percent = (parseInt(this.percent) + 1).toString();
        if (parseInt(this.percent) < 10) {
            this.percent = '0' + this.percent;
        }
        if (parseInt(this.percent) == 100) {
            this.percent = '0';
        }
        if (timer2==null) {
            clearInterval(timer3);
            timer3 = null;
            this.percent = '100';
        }
    },
    clickAction() {
        clearInterval(timer1);
        timer1 = null;

        clearInterval(timer2);
        timer2 = null;

        clearInterval(timer3);
        timer3 = null;

        router.replace({
            uri: 'pages/index/index'
        })
    },
}
