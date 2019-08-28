# Git

欢迎来到 Git 的学习。

## 介绍

### 为什么要用 git

1. 最简单的原因就是代码备份。GitHub 就相当于云盘，如果使用 git 就可以很方便的将你的代码保存到 GitHub 中，防止代码丢失或者说方便查看代码

2. 更重要的原因是我们可以通过 git 来管理我们的代码：

   - 公司可能是多人开发同一个项目，彼此的代码需要进行整合，git 可以帮助我们做这件事

   - 项目一般会进行版本的升级，但是我们在升级的同时还需要保留老版本的代码，git 可以帮我们做这件事



## 起步

### 说明

在下面的步骤中可能会因为一些比如电脑版本、系统、位数等原因出现出现不一样的情况，一旦不一样，要及时说出来，不然后续操作可能会受影响。



### 注册 github 账号

自行注册，用户名起的有意义一点，后面想改比较麻烦。



### 下载

下载 Git，注意系统是 32 位还是 64 位。

- 下载地址：https://git-scm.com/downloads

下载完毕后傻瓜式安装即可。



### 配置

配置 Git。下面将介绍一些常用命令。

首先，进入到你的项目文件夹，然后右键。如果安装成功，可以看到右键菜单栏中多出了两个选项，分别是：

- Git GUI Here
- Git Bash Here

其中 Git GUI Here 指的是图形化界面，而 Git Bash Here 是命令行。这里我们选择 Git Bash Here。

在出来的命令行中输入：

```shell
git config --global user.name "your name"

git config --global user.email "your email"
```

这两条命令中的`your name`指的是你的 GitHub 用户名，`your email`指的是你的 GitHub 邮箱。

这两条命令的作用是连接你的 GitHub 账号。否则，谁知道你的代码要提交到那个旮旯里呢？

```shell
# 使用如下命令查看配置
git config --list
```



### 在 GitHub 上创建 SSH Key

提交代码到 GitHub 仓库之间的传输是通过 SSH 加密的。当然，这里你不需要理解 SSH 加密是什么，只需要知道怎么做。

在你的命令行中输入：

```shell
ssh-keygen -t rsa -C "your email"
```

`your email`是你的 GitHub 邮箱。

这句命令的意思是创建你的 SSH Key。

创建过程中你可能会遇到类似这样的信息：

```
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/Administrator/.ssh/id_rsa):
```

没关系，回车就可以了。一路回车直到出现这个：

```shell
The key's randomart image is:
+---[RSA 2048]----+
|                 |
|    . E  .        |
|     = . o       |
|     B = .  .   |
|   . + OS   o .  |
|    o o * . o   |
|    oo.* +. + +  |
|   . B++.+.o= *o .|
|    o+B+  +++ o= |
+----[SHA256]-----+
```

这就表示你的 SSH Key 创建成功了。

当然你也可能遇到这样的情况：

```
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/Administrator/.ssh/id_rsa):
/c/Users/Administrator/.ssh/id_rsa already exists.
Overwrite (y/n)?
```

这就表示你创建过 SSH Key 了。回车就可以了。

下面要做的就是拿到你的 SSH Key 了，命令行输入：

```shell
cat ~/.ssh/id_rsa.pub
```

你会得到类似这样的信息：

```shell
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC2HNjwhOWcMR8NdcCh4zdnwATAeXlldYPqNcWvjutHdhfaficB92apNzvelWbD4mnrDMSlbGldCFlsyS4SrpQJLE65t8LbdQqScMa2rn8rP1v/m0kHt6cTZAzYbhV4D+o0lLc7mhHxOauPGj935LCrC9DxJ/WQTDejFKY1Mg95KGiGUjCgbZXYIxQ5wHpwaKQg6va1OFXh1lDwKuNFp+0WtTG6S5SVTgxaDtBtOTY+5N7gwx+ZUIrZ/4si1Mt01g/UrEBKH0b6QrUiyNrI11T2rhzPolWVQl8A3x+nAd83fTQoZ62D98YvIepyoIkld/zoAq4+X/fxIDeIuWHfEPDB 877882513@qq.comm
```

复制它，进入到你的 GitHub 主页。

点击右上角头像选择`Settings`，跳转后到左边找到`SSH and GPG keys`。

有两个绿色按钮，点击`New SSH key`。

有两个输入框，`Title`表示你的 SSH Key 名，随便起。还记得之前复制的那段内容吗？把它粘贴到`Key`中。然后点击`Add SSH Key`。

到目前为止，就在你的 GitHub 上创建好了 SSH Key。