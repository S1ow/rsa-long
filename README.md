# RSA-LONG 分段加解密 2023

## 更新说明
#### 2020-12-29
- 新增签名
- 新增验签
#### 2020-11-13
- 更新打包方式

#### 2020-11-12
- 新增分段加密，按照最大支持字符117进行分段
- 新增分段解密，按照128字符进行分段解密
- 新增demo演示

## 安装
```bash
npm install rsa-long
```

## 使用

### 引入
```bash
const rsaLong = require('rsa-long');
```

### 分段加密

```bash
const pubK = "公钥"
let str = "待加密字符串"
let encryptData = rsaLong.encryptLong(pubK, str)
console.log(`加密后：${encryptData}`)
```

### 分段解密
```bash
const priK = "私钥"
let str = "待解密的字符串"
let decData = rsaLong.decryptLong(priK, str)
console.log(`解密后：${decData}`)
```

## demo的使用
```bash
git clone https://github.com/S1ow/rsa-long.git
cd rsa-long/example
yarn install
node index.js
```