import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { emailService } from './email-service/email-service.service';
@Injectable()
export class UsersService {
  constructor(private readonly emailService: emailService) {}
  async createUser(name: string, email: string, password: string) {
    await this.checkUserExists(email);

    const signupVerifyToken = uuid.v1();

    await this.saveUser(name, email, password, signupVerifyToken);
    await this.sendMemberJoinEmail(email);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private checkUserExists(email: string) {
    return false;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private saveUser(name: string, email: string, password: string, signupVerifyToken: string) {
    return;
  }

  async sendMemberJoinEmail(receiver: string) {
    return await this.emailService.run(receiver);
  }
}
