# 不要问我这个干啥用的，这个月已经三次未打卡了

> 对于这种情况，我只想说：mdzz。工卡和打卡还是分开的。怒用中文写chm

### 打卡提醒工具，可自主设定时间进行打卡操作

### 来，告诉你如何使用（虽然用了一样会忘记打卡）

```shell
sudo sh mind.sh 时 分
```
sudo 运行，后面加上两个参数 时和分，不加默认18：00提醒（哎，提醒了一样不记得打卡）  
想取消嘛，来告诉你如何取消

```shell
sudo sh del.sh
```
完美取消（由于低层用的launchctl所以如果任务注册错了时间，一定先取消再重新注册）

### 来，给大家show一下使用效果