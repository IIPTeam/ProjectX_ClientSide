必备条件:
1. 安装安卓模拟器
2. 安装 node.js
3. 安装 React Native Command Line Tools
4. 安装 react-native-ease-toast
	npm install react-native-ease-toast --save
	npm link

运行PorjectX项目:
1. 下载项目源码
2. 在CMD下进入ProjectX文件夹的父目录，执行 react-native init ProjectX
	（注：仿真到真实设备需要依赖android\app\src\main\assets\index.android.bundle , 如需更新可以参考
		http://www.cnblogs.com/tony-yang-flutter/p/5864578.html 将此文件更新)
3. 在CMD下进入ProjectX文件夹，执行npm install安装依赖包
4. 启动安卓模拟器
5. 在CMD下进入ProjectX文件夹，执行react-native run-android即可


尝试解决echarts找不到tpl.html文件的问题
http://www.tuicool.com/articles/fM3yyq

Call service等待时候的overlay
react-native-hud-view
react-native-loading-spinner-overlay