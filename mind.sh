#! /bin/zsh

basepath=$(cd `dirname $0`; pwd);
hoursbak=$1;
minbak=$2;
mins=${minbak:-0};
hours=${hoursbak:-18};
node index.js $hours $mins;
chmod 777 ${basepath}/openShark.sh;
launchctl load /Library/LaunchDaemons/com.sharkphone.launchctl.plist
echo "定时计划已经启动会在每周一至周五${hours}:${mins}进行提醒打卡"