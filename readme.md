# 不要问我这个干啥用的，这个月已经三次未打卡了

> 对于这种情况，我只想说：mdzz。工卡和打卡还是分开的。怒用中文写chm

## 打卡提醒工具，可自主设定时间进行提醒打卡操作（注意了是提醒，不是帮你打卡）

### 来，告诉你如何使用（虽然用了一样会忘记打卡）
<b>首先，一定要进入到项目目录里面，才能运行如下代码：</b>
```shell
sudo sh mind.sh 时 分
```
sudo 运行，后面加上两个参数 时和分，不加默认18：00提醒（哎，提醒了一样不记得打卡）  
想取消嘛，来告诉你如何取消

```shell
sudo sh del.sh
```
完美取消（由于底层用的launchctl所以如果任务注册错了时间，一定先取消再重新注册）

### 来，给大家show一下使用效果

![老铁，下班打卡了！](https://github.com/xtx1130/iqiyi-card-recommend/blob/master/images/offwork.png)

流弊不流弊，老铁，稳不稳，反正告诉你打卡你也记不住 哔了狗了啊

### 文档和日志输出就在本目录下的AutoMakeLog.err和AutoMakeLog.log  
但是tmd不知道为啥，里面没内容啊，我能怎么办，我也很悲伤啊。凑活用吧，反正就为了提醒自己打卡的