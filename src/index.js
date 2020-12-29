let rs = require('jsrsasign');

/**
 * 分段加密
 * @param {j} pubK 密钥
 * @param {*} text 待加密字符串
 * @returns
 */
exports.encryptLong = (pubK, text) => {
    
    try {
        let pub = rs.KEYUTIL.getKey(pubK);
        const maxLength = 117;
        let ct_1 = "";
        if (text.length > maxLength) {
            let lt = text.match(/.{1,117}/g);
            lt.forEach(function (entry) {
                let t1 = rs.KJUR.crypto.Cipher.encrypt(entry, pub);
                ct_1 += t1;
            });
            return rs.hex2b64(ct_1);
        }
        let t = rs.KJUR.crypto.Cipher.encrypt(text, pub);
        let y = rs.hex2b64(t);
        return y;
    }
    catch (ex) {
        return false;
    }
}

/**
 * 分段解密
 * @param {j} priK 密钥
 * @param {*} text 待解密字符串
 * @returns
 */
exports.decryptLong = (priK, text) => {
    try {
        let prv = rs.KEYUTIL.getKey(priK);
        let maxLength = 128;
        text = rs.b64tohex(text);
        if (text.length > maxLength) {
            let ct_2 = "";
            let lt = text.match(/.{1,256}/g); // 128位解密。取256位
            lt.forEach(function (entry) {
                let t1 = rs.KJUR.crypto.Cipher.decrypt(entry, prv);
                ct_2 += t1;
            });
            return ct_2;
        }
        let y = rs.KJUR.crypto.Cipher.decrypt(text, prv);
        return y;
    } catch (ex) {
        return false;
    }
}

exports.sign = (priK, text) => {
    // 创建 Signature 对象
    let signature = new rs.KJUR.crypto.Signature({ alg: "MD5withRSA", prvkeypem: priK });    //!这里指定 私钥 pem!
    signature.updateString(text);
    let a = signature.sign();
    let sign = rs.hex2b64(a);
    console.log("sign: ", sign);
    return sign;
}

exports.verify = (priK, text, sign) => {
    // 验签
    // !要重新new 一个Signature, 否则, 取摘要和签名时取得摘要不一样, 导致验签误报失败(原因不明)!
    let signatureVf = new rs.KJUR.crypto.Signature({ alg: "MD5withRSA", prvkeypem: priK });
    signatureVf.updateString(text);
    // !接受的参数是16进制字符串!
    let b = signatureVf.verify(rs.b64tohex(sign));
    console.log("verify: "+b);
    return b;
}