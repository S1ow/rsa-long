const esaLong = require('rsa-long');

// 加密使用
let sipPubKey = "-----BEGIN PUBLIC KEY-----" +
    "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDHGwE5vy6iP+Ajbtj0jy8kCqCo" +
    "o0s5nAv5WMZLl4WFREDV8mT6RMJaNi2owqnJwRYHulUbDXMXEGKXnD11iIpSVZbK" +
    "TGw8Maxg/SM5Kk4grk2Ta8m/bMFcQBocTpCAzGqePNso5YVhiz+ZVr05HEDin22s" +
    "ld0QL5Ko+w64zkq2cwIDAQAB" +
    "-----END PUBLIC KEY-----"

// 解密使用
let orgPrivateKey = "-----BEGIN RSA PRIVATE KEY-----" +
    "MIICXAIBAAKBgQCxHCeQlKdY7gKEQbKXr5adSeszqaVSmmWWne4sgttEU6AB+Xnd" +
    "QfO1gLCliVJ/fIgJXxrNpc3pAEWUiEnZZJIuvarNvsdU9JENIu9tSqp6zeMS2mzA" +
    "3NsGLuUB3SZxPA0Q9Zjd6WKeSjoikPfD1FfdC/527aAWvZUCNHn2YMnSFQIDAQAB" +
    "AoGAEp38BrWpla6HMzHYvRsnAOepQqf9id5S+W8mfyVOOTN1KV/5EGoDXTvm1a/G" +
    "rUIA5sNJhP5905VEuyVMZf6tYvGLHQMws3JYCx+gBotR99/iRkDTbbqXQGfhRFHM" +
    "PXjhEuz9G+Pd4EDuw0BBvHGLT/bIEkhM/RiyF3+muQ1RH80CQQDkTKhS3wbv4CAz" +
    "m14pj4k6M0X7JPf5mN6SDajVLXf90DWqEN8Ur9B7qk+baTtvwqIxSHn8w5ubWWLU" +
    "9BAOQCJvAkEAxpl4nO7byOGgNdqTEvcTjBm0AgmYIdZ2kwF7B+Cfkec+4iRoxuIk" +
    "Zf2zjsVRm417SZjaCHxB1/qViPx0DUOFuwJAE0KoXL12H1ygOtpbulPitudGeyam" +
    "SQdtl5LRcJKycdZUALIFsAAZLaWzq5/YJNidyFyd9gYmpZeH8AFbLWiZvwJAM1x7" +
    "gfKQKrqXSXY2tR/rET+Qezpp+s5RKiGm5NmlywEIFUofQtg3W50qM9E6EsWbTeRW" +
    "9vzTtnya8auAg/GjgwJBAOMVHDtkT2gHUUwOySRf3I3zxM6qItie2l4K/MdCQD10" +
    "O2kX4FBvea1WUyvGEXfZvUIDLrqjMf4MZ3gd51tF42g=" +
    "-----END RSA PRIVATE KEY-----"


let user = {
    id: "7439875489065056595",
    name: "S1ow",
    sex: "男",
    headImg: "https://upload.jianshu.io/users/upload_avatars/1728429/4121cab5-932c-4044-b71e-992acd405280.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    address: "辽宁省大连市"
}

let encryptData = esaLong.encryptLong(sipPubKey, JSON.stringify(user))
console.log(`加密后：${encryptData}`)

let sign = esaLong.sign(orgPrivateKey, JSON.stringify(user))
console.log(`签名为：${sign}`)