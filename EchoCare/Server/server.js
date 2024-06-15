const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// 载入环境变量
dotenv.config();

const app = express();
app.use(bodyParser.json());

// 随机验证码生成函数
function generateRandomCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();  // 生成六位随机数
}

// 发送短信的函数（假设使用腾讯云SDK）
async function sendSMS(phoneNumber, code) {
    // 伪代码，需要根据腾讯云的API文档实现
    const QcloudSms = require("qcloudsms_js");
    const smsSdk = QcloudSms(process.env.SMS_APP_ID, process.env.SMS_APP_KEY);
    const smsType = 0; // 普通短信
    const nationCode = "86"; // 国家码
    const smsParams = [code, "5"];  // 验证码及其有效时间（分钟）
    const sender = smsSdk.SmsSingleSender();
    const result = await sender.sendWithParam(nationCode, phoneNumber, process.env.TEMPLATE_ID, smsParams, "", "", "");
    return result;
}

// 接收选择好友请求并发送验证码
app.post('/sendCode', async (req, res) => {
    const { friendPhone } = req.body;  // 假设前端发送的是好友的手机号
    const code = generateRandomCode();
    try {
        const smsResult = await sendSMS(friendPhone, code);
        if (smsResult.result === 0) {  // 假设result为0表示发送成功
            res.send({ success: true, message: '验证码已发送' });
        } else {
            res.send({ success: false, message: '发送验证码失败', detail: smsResult.errMsg });
        }
    } catch (error) {
        res.status(500).send({ success: false, message: '服务器错误', error: error.toString() });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
