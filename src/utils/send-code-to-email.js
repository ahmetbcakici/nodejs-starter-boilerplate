import nodemailer from 'nodemailer';

export default ({ email, confirmCode }) =>
  new Promise(async (resolve, reject) => {
    if (!email || !confirmCode)
      return res.status(400).send('You can not leave fields empty.');

    const emailTransfer = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SENDER_MAIL,
        pass: process.env.SENDER_MAIL_PW,
      },
    });

    const emailInfo = {
      from: process.env.SENDER_MAIL,
      to: email,
      subject: 'Verify your e-mail address! (AppName)',
      text: `Here is your confirm code: ${confirmCode}`,
    };

    try {
      await emailTransfer.sendMail(emailInfo);
      return resolve('sccs');
    } catch (err) {
      return reject(err);
    }
  });
