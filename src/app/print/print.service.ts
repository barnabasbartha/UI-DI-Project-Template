import {Singleton} from 'typescript-ioc';

@Singleton
export class PrintService {
   print(value: number): void {
      console.log(value);
   }
}
