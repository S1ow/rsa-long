const esaLong = require('rsa-long');

// 加密使用
let sipPubKey = "-----BEGIN PUBLIC KEY-----" +
    "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHPTxKy8y9MOGI2h52DuVvk0RlOv2NjBTY88frHLk3qRYU24ymdGV4H++ta8DZiMJNa1OI1oAyYMVlC8OZaENWTnUPJ2Et76jnQ1zdtnm1fl75l863nYyJx+qJwohBTqIHGtQpLp6pZHLWLYg6B7UYkpna7TOTjEpKmVop6qO2cQIDAQAB" +
    "-----END PUBLIC KEY-----"

// 签名使用
let orgPrivateKey = "-----BEGIN PRIVATE KEY-----" +
    "MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAPBP2hvOQqvM0oLqn7Nh2hDzl9dGfx2Q2I5LACr0sUBKw9VmKYWoprrnSdPoU4e9emrBwm7NANMD/YHgWyUpfrxXDkRjaKH9mhOxtIp4KwRb38zyAMZS1uWk1LK6icUd0dBsdXaSjg7t+jPl8cVLAE0KcqIxAaQptgL4xaLfmvAVAgMBAAECgYAM0XmVG5yvTMrazFiN6TWIS3IJO9uqcFA40NPWtrwgrYxCHQOwezU/iXhE6yLPfgIiYSj1n45AczlJvPWnpw25NCZIKt1Z8QkeiIOGeinsfLsPIFCBkk1R7riFVRdQkNMJufZkcAlcV3cI7lZOGf7HZpLyA1WxniPRie8c8fn2KQJBAPq6TXXg5gst9+C/kU5ddttJa2agtBgSWgfxUZ/Bzi88ClTEqAgi5jXKuxCTH2MjNv/kiOMcaJk7YYd3O8yrYS0CQQD1XXrTa/T3V7oUJI5qBCLPgnRDsKJv3mW2YFO/+zJw4AbwcrH8SlwyJMmsJCie6kszMRHeefhLeyYCn6TR8wuJAkA+m7jt/4vSLNdh8tQo+mPMnEfKZ8Sw4hxDMXpNZ0rCNr7prfW7mmNb+VS+7c3/pnJ8cafQ9m4UHWTcO+Td1cm9AkEAtlBXS3ET/BU7NmxTRYL9OqL8MK+2gtkFSpYYpLXJrQVJIrCWf5fhGYEsOLRFWo9MgSUc2epXC/7dJ2Xn2fh1wQJBAOnhLopAiAN1HL7R7Axm67AFHorrSoLSwdkrIuA71vaVMVt9n2ZJCK7z19H/FY6QHnr2TGRAaGnJn5+/TBSu9og="+
    "-----END PRIVATE KEY-----"


let user = {aa:123}

// let encryptData = esaLong.encryptLong(sipPubKey, JSON.stringify(user))
// console.log(`加密后：${encryptData}`)

let sign = esaLong.sign(orgPrivateKey, JSON.stringify(user))
console.log(`签名为：${sign}`)