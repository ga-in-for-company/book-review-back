import { Test, TestingModule } from '@nestjs/testing';
import { emailService } from './email-service.service';

describe('EmailServiceService', () => {
  let service: emailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [emailService],
    }).compile();

    service = module.get<emailService>(emailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
