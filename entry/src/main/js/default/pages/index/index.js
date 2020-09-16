import router from '@system.router';

var picker1value = null;
var picker2value = null;

export default {
    data: {
        picker1range: ["1", "2", "3"],
        picker2range: ["较慢", "舒缓", "较快"]
    },
    clickAction() {
        router.replace({
            uri: 'pages/xunlian/xunlian',
            params: {
                "data1": picker1value,
                "data2": picker2value,
            }
        })
    },
    changeAction1(pv) {
        console.log('左边选中项为: ' + pv.newValue);
        picker1value = pv.newValue;
    },
    changeAction2(pv) {
        console.log('右边选中项为: ' + pv.newValue);
        picker2value = pv.newValue;
    }
}
