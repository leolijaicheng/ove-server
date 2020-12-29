ove-server 随启随用的静态文件服务器
=================================


Running static file sever anywhere 随时随地将你的当前目录变成一个静态文件服务器的根目录。默认读取该目录下的index.html，如果没有该文件则列出该文件夹下的所有文件

## Installation

Install it as a command line tool via `npm -g`.

```sh
npm install ove-server -g
```

## Execution

```sh
$ ove-server
//or with port
$ ove-server -p 8080
//or with hostname
$ ove-server -o localhost -p 8888
// or with folder
$ ove-server -d /
```

## Visit

```
http://localhost:8080
```

执行命令后，打开浏览器，输入http://localhost:8080
