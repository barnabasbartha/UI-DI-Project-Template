import {Inject, Singleton} from 'typescript-ioc';
import {PrintService} from './print.service';
import {Manager} from '../../utils/services';
import {IntervalService} from '../interval/interval.service';

@Singleton
export class PrintManager implements Manager {
   public constructor(@Inject private readonly service: PrintService,
                      @Inject private readonly interval: IntervalService) {
      this.onInit();
   }

   onInit(): void {
      this.interval.interval$.subscribe(value => this.service.print(value));
   }
}
