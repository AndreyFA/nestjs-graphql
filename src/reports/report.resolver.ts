import { Resolver, Args, Query } from '@nestjs/graphql';
import { ReportService } from './report.service';
import { Product } from './models/product.model';
import { ProductArgs } from './dtos/product-args.dto';

@Resolver(of => Product)
export class ReportResolver {
  constructor(private readonly service: ReportService) {}

  @Query(returns => Product)
  async product(@Args('id') id: string): Promise<Product> {
    const product = await this.service.findOnById(id);
    return product;
  }

  @Query(returns => [Product])
  async products(@Args() args: ProductArgs): Promise<Product[]> {
    return await this.service.findAll(args);
  }
}
