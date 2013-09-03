REM %1 BUILD_NAME  , %2 SRC_DIR  %3\  BUILD_DIR  %4 LIBS

mkdir %3
%4\7z.exe u -tzip %1.nw %2 -xr!?git\* -mx0
copy c:\node-webkit\nw.pak %3\nw.pak
copy c:\node-webkit\icudt.dll %3\icudt.dll
copy /b c:\node-webkit\nw.exe+%~dp0%1.nw %3\%1.exe
copy c:\node-webkit\nw.pak %3\nw.pak

%3\%1.exe