# 将vue react js html中的table数据导出成为excel文件



这是一个非常轻量的库,可以将数据导出成为excel文件

## 使用方法

### 1.安装

```javascript
npm install qf-export-excel
```

### 2.引入

```javascript
const qee = require("qf-export-excel")
或者
import qee from "qf-export-excel"
```



### 2.直接将该方法绑定到某个事件函数

```javascript
button.click = function(){
    qee(titleList,dataSource,fileName)
}
```

## 3.参数

这个库是个函数方法接收3个参数,分别是`titleList dataSource fileName`

`titleList`:这是标题的数据来源,是一个数组,每个值是个对象,对象中有两个属性,一个是title对应的是表格的表头文字,key是对应导出数据的key

```javascript
let titleList = [{
    title: '姓名',
    key: 'name'
}, {
    title: '年龄',
    key: 'age'
}, {
    title: '住址',
    key: 'address'
}]

```

`dataSource` 数据应该是这样的

```javascript
let dataSource = [{
    name: '前端摸鱼欧阳锋',
    age: 18,
    address: '南京建邺区201号'
}, {
    name: '周春',
    age: 22,
    address: '南京江宁区123号'
}, {
    name: '孔德鹏',
    age: 32,
    address: '祖安文化街'
}]
```

`fileName`就是一个文件名 不传默认为'数据'文件名

> github地址:https://github.com/ilovede123/export-excel.git
>
> 码云: https://gitee.com/d718781500/export_table_to_excel 
>
> 掘金@前端摸鱼欧阳锋