import { Controller } from '@nestjs/common';
import { MessagePattern, EventPattern } from '@nestjs/microservices';
import { Observable, from } from 'rxjs';

@Controller('math')
export class MathController {
  @MessagePattern({ cmd: 'sum' })
  async accumulate(data: number[]): Promise<number> {
    return (data || []).reduce((a, b) => a + b);
  }

  @MessagePattern({ cmd: 'sum' })
  accumulate2(data: number[]): Observable<number> {
    return from([1, 2, 3]);
  }

  @EventPattern('user_created')
  async handleUserCreated(data: Record<string, unknown>): Promise<void> {
    return;
  }
}
