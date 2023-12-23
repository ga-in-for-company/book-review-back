import { Test, TestingModule } from '@nestjs/testing';
import { BestsellerController } from './bestseller.controller';

describe('BestsellerController', () => {
  let controller: BestsellerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BestsellerController],
    }).compile();

    controller = module.get<BestsellerController>(BestsellerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
