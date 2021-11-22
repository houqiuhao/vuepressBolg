## use bat
使用bat编写脚本记录： 
1、调用其他脚本并不关闭本脚本：call ***.bat   //当其他脚本中有exit的时候会直接将脚本退出
2、修改文件名：rename dist.bin.tmp dist.zip
3、创建文件夹：mkdir ***
4、移动文件： move ./dist.bin ./newdist/
5、解压文件：winrar x -o+ .zip  //需要将winrar.exe文件放到C:\Windows\System32目录下，如果不放就使用"C:\Program Files\WinRAR\WinRAR.exe"的方式去调用
6、设置变量：set ***="~~"  //年月日日期：%date:~0,4%%date:~5,2%%date:~8,2%   从几开始取几位
7、使用变量：%***%
8、