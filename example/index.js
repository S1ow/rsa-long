const esaLong = require('rsa-long');

// 验签使用
let orgPubKey = "-----BEGIN PUBLIC KEY-----" +
    "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDwT9obzkKrzNKC6p+zYdoQ85fXRn8dkNiOSwAq9LFASsPVZimFqKa650nT6FOHvXpqwcJuzQDTA/2B4FslKX68Vw5EY2ih/ZoTsbSKeCsEW9/M8gDGUtblpNSyuonFHdHQbHV2ko4O7foz5fHFSwBNCnKiMQGkKbYC+MWi35rwFQIDAQAB" +
    "-----END PUBLIC KEY-----"

// 解密使用
let sipPrivateKey = "-----BEGIN PRIVATE KEY-----" +
    "MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAIc9PErLzL0w4YjaHnYO5W+TRGU6/Y2MFNjzx+scuTepFhTbjKZ0ZXgf761rwNmIwk1rU4jWgDJgxWULw5loQ1ZOdQ8nYS3vqOdDXN22ebV+XvmXzredjInH6onCiEFOogca1CkunqlkctYtiDoHtRiSmdrtM5OMSkqZWinqo7ZxAgMBAAECgYAJS1QRb+AqQGm/lf3x7yQlfuF8c4lpaO8l2dsrdVXlVWGHHW+VIPq4PrmiGX2vdY6k83NSPCujSrNGNoDC0j+OXM6hCmE3FBzws7K0Bt7PnS3f/1l2Rsx8aGDq+XpJEhUICx/v5GfXeqmTgm/0HmgEcZO/QfRI3LpRkEsMkx8OgQJBAONjWcgvyP2uWLmvZlfawWgLbusG0buxXH+AOFHwDg3TtWPi7boRS6IRzOFO/iya6+UZc3UVQMkdzcC8SHjZRGUCQQCYQZM2JB/7TJXG3pccEokBGQuDxjbOJZEKuifs4qCW2nm4Trr7KRwjoFgwSiPZgMa7li7C8ZoYBe9IqspbwisdAkBG6XbYXT6bDkIRNkf+YfQq1FX06Z2CoR8ti/kEZI6ddUZ+LgjhG/+wPUjdgtr1YiLqwXMmMkiP78F4t78KIQeZAkEAjXvCNHl1TqxoMhj+CpQew+pmDNnQa9f05CcAmtwtpoD2wxJGJsaY43JJAPakQaWtBvwUEAs6ykAZj0lGKeZQ8QJABb7ocsVGdLlPCe/2oKdUuWCDS4U72DmLP1xz20nFzfYAuuch4WTz+8cYW8Gb0HvWLBkij8ov3aLiYXZnddBFPA==" +
    "-----END PRIVATE KEY-----"

// 加密使用
let sipPubKey = "-----BEGIN PUBLIC KEY-----" +
    "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHPTxKy8y9MOGI2h52DuVvk0RlOv2NjBTY88frHLk3qRYU24ymdGV4H++ta8DZiMJNa1OI1oAyYMVlC8OZaENWTnUPJ2Et76jnQ1zdtnm1fl75l863nYyJx+qJwohBTqIHGtQpLp6pZHLWLYg6B7UYkpna7TOTjEpKmVop6qO2cQIDAQAB" +
    "-----END PUBLIC KEY-----"

// 签名使用
let orgPrivateKey = "-----BEGIN PRIVATE KEY-----" +
    "MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAPBP2hvOQqvM0oLqn7Nh2hDzl9dGfx2Q2I5LACr0sUBKw9VmKYWoprrnSdPoU4e9emrBwm7NANMD/YHgWyUpfrxXDkRjaKH9mhOxtIp4KwRb38zyAMZS1uWk1LK6icUd0dBsdXaSjg7t+jPl8cVLAE0KcqIxAaQptgL4xaLfmvAVAgMBAAECgYAM0XmVG5yvTMrazFiN6TWIS3IJO9uqcFA40NPWtrwgrYxCHQOwezU/iXhE6yLPfgIiYSj1n45AczlJvPWnpw25NCZIKt1Z8QkeiIOGeinsfLsPIFCBkk1R7riFVRdQkNMJufZkcAlcV3cI7lZOGf7HZpLyA1WxniPRie8c8fn2KQJBAPq6TXXg5gst9+C/kU5ddttJa2agtBgSWgfxUZ/Bzi88ClTEqAgi5jXKuxCTH2MjNv/kiOMcaJk7YYd3O8yrYS0CQQD1XXrTa/T3V7oUJI5qBCLPgnRDsKJv3mW2YFO/+zJw4AbwcrH8SlwyJMmsJCie6kszMRHeefhLeyYCn6TR8wuJAkA+m7jt/4vSLNdh8tQo+mPMnEfKZ8Sw4hxDMXpNZ0rCNr7prfW7mmNb+VS+7c3/pnJ8cafQ9m4UHWTcO+Td1cm9AkEAtlBXS3ET/BU7NmxTRYL9OqL8MK+2gtkFSpYYpLXJrQVJIrCWf5fhGYEsOLRFWo9MgSUc2epXC/7dJ2Xn2fh1wQJBAOnhLopAiAN1HL7R7Axm67AFHorrSoLSwdkrIuA71vaVMVt9n2ZJCK7z19H/FY6QHnr2TGRAaGnJn5+/TBSu9og="+
    "-----END PRIVATE KEY-----"


let user = {
    id: "7439875489065056595",
    name: "S1ow",
    sex: "男",
    headImg: "https://upload.jianshu.io/users/upload_avatars/1728429/4121cab5-932c-4044-b71e-992acd405280.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    address: "辽宁省大连市"
}
console.log("明文：" + JSON.stringify(user))

let encryptData = esaLong.encryptLong(sipPubKey, JSON.stringify(user))
console.log(`加密后：${encryptData}`)

let sign = esaLong.sign(orgPrivateKey, JSON.stringify(user))
console.log(`签名为：${sign}`)

let decData = esaLong.decryptLong(sipPrivateKey, encryptData)
console.log(`解密后：${decData}`)

let verify = esaLong.verify(orgPubKey, decData, sign)
console.log(`验证签名：${verify}`)