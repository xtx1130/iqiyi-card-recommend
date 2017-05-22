#! /bin/zsh

basepath=$(cd `dirname $0`; pwd);
hoursbak=$1;
minbak=$2;
mins=${minbak:-0};
hours=${hoursbak:-18};
sudo touch /etc/crontab;
node index.js $hours $mins;
echo `crontab ${basepath}/sharkcron`;
echo "定时计划已经启动会在每周一至周五${hours}:${mins}进行提醒打卡"