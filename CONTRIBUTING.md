# 一、开发工具及配置

-   IDE 统一使用 Visual Studio Code 最新版

# 二、文件组织

```markdown
```

# 三、代码风格

项目采用 prettier + eslint 进行代码规范约束

# 四、命名规范

## 1. 基本原则

基本规则:使用可以准确说明变量、字段、类、接口、包等完整的英文描述符。采用驼峰式写法，提高名字的可读性。尽量少用缩写，但如果一定要使用，当使用公共缩写和习惯缩写等

## 2. 文件命名

采用"`-`"隔开的英文小写描述符进行命名

-   接口文件统一使用"`.interface`"结尾

## 3.类命名

类名是个一名词，采用首字母大写的的形式描述。尽量使类名简洁而富于描述。使用完整单词，避免用缩写词

## 4.包引用

优先引用`npm`包，`npm`包和本地包引用之间用一个空行隔开，方便阅读。

示例：

```
import { injectable } from 'inversify';
import { Log as Logger } from 'probe.gl';

import { LogInterface } from './log.interface';
```

## 5.接口命名

接口名称统一使用"`Interface`"结尾。

示例：

```
export interface LogInterface {
    info(message: string): void;
    warn(message: string): void;
    debug(message: string): void;
    error(message: string): void;
}
```

## 6.常量命名

全部采用大写，单词间用下划线隔开

## 7.类属性命名

区分公有属性、私有属性。使用注释隔开。

示例：

```
export class Event {
    // ---------------------------------------------------------------------------
    // Public Api
    // ---------------------------------------------------------------------------
    on() { }

    // ---------------------------------------------------------------------------
    // Private Api
    // ---------------------------------------------------------------------------
    _on() { }
}
```