import { Test, TestingModule } from '@nestjs/testing';
import { RuneController } from './rune.controller';
import { RuneService } from './rune.service';

describe('RuneController', () => {
  let controller: RuneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RuneController],
      providers: [RuneService],
    }).compile();

    controller = module.get<RuneController>(RuneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
