const esaLong = require('rsa-long');

// 验签使用
let orgPubKey = "-----BEGIN PUBLIC KEY-----" +
    "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCxHCeQlKdY7gKEQbKXr5adSesz" +
    "qaVSmmWWne4sgttEU6AB+XndQfO1gLCliVJ/fIgJXxrNpc3pAEWUiEnZZJIuvarN" +
    "vsdU9JENIu9tSqp6zeMS2mzA3NsGLuUB3SZxPA0Q9Zjd6WKeSjoikPfD1FfdC/52" +
    "7aAWvZUCNHn2YMnSFQIDAQAB" +
    "-----END PUBLIC KEY-----"

// 签名使用
let sipPrivateKey = "-----BEGIN RSA PRIVATE KEY-----" +
    "MIICXQIBAAKBgQDHGwE5vy6iP+Ajbtj0jy8kCqCoo0s5nAv5WMZLl4WFREDV8mT6" + 
    "RMJaNi2owqnJwRYHulUbDXMXEGKXnD11iIpSVZbKTGw8Maxg/SM5Kk4grk2Ta8m/" +
    "bMFcQBocTpCAzGqePNso5YVhiz+ZVr05HEDin22sld0QL5Ko+w64zkq2cwIDAQAB" +
    "AoGBAIkNlbJiX39f6LF7Q+xUA2cTybNLdCSbvcJN0XGHQ2mQqfCbgdakLgRa9uML" +
    "3EP8nWWEZcDRaT+fD7681bFp44vCcWyjHLbbpkXvcgl6GhtFLchDHOrZ0FKUVlOE" +
    "ChYdzupXGhVPy7smQkSenHlV/W+TM5gAv1K8ssOUBRvnlrrBAkEA5cNGCKGSdASp" +
    "EgurmOt7Gcg4M0UA3R4QP8ZKpoJzYGYITq6nsp4i+9YNtvmJFLtS8jiGYCVFhbqv" +
    "gIFfgu8NDQJBAN3XhFRx8aY++dluqrCk8WYp2SZrsjhRvKcpDgXFLRxFL7R+Pdze" +
    "MYUH4LH2fQiHBx2My3rRVL3g3vkeQpGS8X8CQQCH6GBOzrQAqJkRsZGJXRFuCL8l" +
    "pJWENjpKXxLdN6DjzrbvQ+SyhVQQP2fRaf2qI7xGxyTFToa3OdyCWQSUQK8pAkBL" +
    "GWx40eIGb4dRbj9mcVAvT7dtZEP/ANymkiVnGqr8yQcvSRVUMfv9lv8f/9uwCVYF" +
    "UOaJe1f+t6OEHhRXB7GtAkA/6zzFEgh/XMaFpdY02he8sMrB2jxbQlrfKWW4hYLK" +
    "0iZk1CWIERIPvr+cO9vAVwRljuL5kRYaHiqXMFAPTk83" +
    "-----END RSA PRIVATE KEY-----"

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

let decData = esaLong.decryptLong(sipPrivateKey, encryptData)
console.log(`解密后：${decData}`)

let verify = esaLong.verify(orgPubKey, decData, sign)
console.log(`验证签名：${verify}`)