import { Injectable } from '@nestjs/common';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class emailService {
  REGION = process.env.SES_REGION;
  sesClient = new SESClient({ region: this.REGION });
  randomNumber = Math.floor(Math.random() * 10000);
  async sendMemberJoinVerification(receiver: string) {
    return new SendEmailCommand({
      Destination: {
        CcAddresses: [],
        ToAddresses: [receiver],
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `<h3>인증 코드</h3> <br/> <section><h2>${this.randomNumber}</h2></section><div><h4>인증 코드를 입력하여 이메일 주소를 인증해 주세요</h4></div>.`,
          },
          Text: {
            Charset: 'UTF-8',
            Data: '',
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: '책장터 이메일 주소 인증',
        },
      },
      Source: process.env.SES_SENDER,
    });
  }

  run = async (receiver: string) => {
    const sendEmailCommand = await this.sendMemberJoinVerification(receiver);

    try {
      await this.sesClient.send(sendEmailCommand);
      return this.randomNumber;
    } catch (e) {
      console.error(e);
    }
  };
}
