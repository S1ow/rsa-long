let esaLong = require('rsa-long');

// 公钥
let pubK = "-----BEGIN PUBLIC KEY-----" +
    "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCxHCeQlKdY7gKEQbKXr5adSesz" +
    "qaVSmmWWne4sgttEU6AB+XndQfO1gLCliVJ/fIgJXxrNpc3pAEWUiEnZZJIuvarN" +
    "vsdU9JENIu9tSqp6zeMS2mzA3NsGLuUB3SZxPA0Q9Zjd6WKeSjoikPfD1FfdC/52" +
    "7aAWvZUCNHn2YMnSFQIDAQAB" +
    "-----END PUBLIC KEY-----"

// 私钥
let priK = "-----BEGIN RSA PRIVATE KEY-----" +
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

let encryptData = esaLong.encryptLong(pubK, JSON.stringify(user))
console.log(`加密后：${encryptData}`)

let decData = esaLong.decryptLong(priK, encryptData)
console.log(`解密后：${decData}`)