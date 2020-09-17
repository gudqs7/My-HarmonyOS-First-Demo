# My-HarmonyOS-First-Demo
Dev for Huawei Lite Wearable (仅为运动手表开发)



**首先声明, 我就是照着视频敲得, 敲完发现课程没有提供源码资料, 于是我把代码整理下上传到 git, 仅供大家参考.**

- 课程地址: https://edu.51cto.com/course/25054.html 目前是免费, 以后也还是不会变吧!
- 代码地址: https://github.com/gudqs7/My-HarmonyOS-First-Demo (手动求Star) (*不给也无所谓啦*)



>实际效果如下

![](C:\Users\wq\DevEcoStudioProjects\Lite_Wearable_Breath_Demo\github\image\s1.png)



![](C:\Users\wq\DevEcoStudioProjects\Lite_Wearable_Breath_Demo\github\image\s2.png)



![](C:\Users\wq\DevEcoStudioProjects\Lite_Wearable_Breath_Demo\github\image\s3.png)





### 简单说下这个视频干了什么:

- 教你搭建环境(页面播放很快, 嗯, 反正肯定和我2.0倍速没关系) (楼主已经搭建过了, 就听了会歌)

- 由Hello world 到完整Demo(含三个页面, 约200行JS代码[最终]), 他是一步一步演变过去的, 不用担心跟不上, 毕竟你可以选择0.5倍速 (手动滑稽)

- 最赞的是最开始先给你演示最终版的效果, 并且每个视频前面也会演示这小节要达成的样子 (这里我顺便说下, 我的代码没有记录每一节到不同分支, 但我反应过来要存代码时候, 已经快开发完了, 大佬们见谅, 下次一定改)



### 然后说下感受, 目前开放了三个设备的模板开发(TV, Wearable, Lite Wearable), 而 Lite Wearable 是体验最好的, 因为:

- 支持预览器(View-->Tool Windows-->Previewer)

- 支持模拟器(Run --> Select Deployment Target --> Available Huawei Lite Devices > Huawei Lite Wearable Simluator)

-  完全的JS+CSS+HML编写代码, 无任何Java代码 (TV 和 Wearable 的模板我试过, 即使选择JS FA 还是会有几个Java代码, 当然这说不定也是缺点, 目前JS API 不是很全面, 而)



### 顺便说下我了解的 JS API 这块, 搞前端的同学应该比较在意:

- 文档入口: https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-framework-file-0000000000611396 

- 调用Java PA方式: https://developer.harmonyos.com/cn/docs/documentation/doc-references/js-apis-fa-calls-aa-overview-0000000000617989 

- Lite Wearable 的文档(官方居然开小灶): https://developer.harmonyos.com/cn/docs/documentation/doc-references/lite-wearable-overview-0000001054283774 (我在接口下面没有找到 调用Java PA 的方式, 且在js中书写api却有错误提示, 而同样代码在Wearable则是ok的) 

- 另外发现似乎Lite Wearable 的 ES6 支持的并不全面 (见文档 https://developer.harmonyos.com/cn/docs/documentation/doc-references/lite-syntax-js-0000001053965214)

- JS API 接口下没有找到 视频/相机/电话 这一类api, 但Java那边是有的 https://developer.harmonyos.com/cn/docs/documentation/doc-guides/media-camera-guidelines-0000000000031782 (不知道是目前手机SDK没有上线所以暂时没有, 还是JS就是不支持, 个人认为前者大一些)