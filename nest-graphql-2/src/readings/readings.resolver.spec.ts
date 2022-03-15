import { Test, TestingModule } from '@nestjs/testing';
import { ReadingsResolver } from './readings.resolver';

describe('ReadingsResolver', () => {
  let resolver: ReadingsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReadingsResolver],
    }).compile();

    resolver = module.get<ReadingsResolver>(ReadingsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
