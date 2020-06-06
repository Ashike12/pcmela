@echo off

set branchList=bugs/test1 bugs/test2;
(for %%i in (%branchList%) do (
	git checkout %%i & git pull
))
cd D:\Projects\pcmela
cd
REM DEL . DR
pause

