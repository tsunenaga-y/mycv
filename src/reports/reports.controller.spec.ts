import { Test, TestingModule } from '@nestjs/testing';
import { GetEstimateDto } from './dtos/get-estimate.dto';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { Report } from './report.entity';
import { CreateReportDto } from './dtos/create-report.dto';
import { User } from 'src/users/user.entity';

describe('ReportsController', () => {
  let controller: ReportsController;
  let fakeReportService: Partial<ReportsService>;

  beforeEach(async () => {
    fakeReportService = {
      createEstimate: (query: GetEstimateDto) => {
        return Promise.resolve({
          price: 20000,
        } as Report);
      },
      create: (reportDto: CreateReportDto, user: User) => {
        return Promise.resolve({
          id: 3,
          price: 20000,
          year: 1982,
          lng: 45,
          lat: 45,
          make: 'ford',
          model: 'mustang',
          mileage: 50000,
          approved: false,
        } as Report);
      },
      changeApproval: (id: string, approved: boolean) => {
        return Promise.resolve({
          id: 1,
          approved: true,
          price: 20000,
          make: 'ford',
          model: 'mustang',
          year: 1982,
          lng: 45,
          lat: 45,
          mileage: 50000,
        } as Report);
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportsController],
      providers: [
        {
          provide: ReportsService,
          useValue: fakeReportService,
        },
      ],
    }).compile();

    controller = module.get<ReportsController>(ReportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
