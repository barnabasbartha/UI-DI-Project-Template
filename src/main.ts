import './main.scss';
import {Container, Inject} from 'typescript-ioc';
import {PrintManager} from './app/print/print.manager';

class Main {
   public constructor(
      @Inject private readonly foo: PrintManager,
   ) {
      console.log('Started');
   }
}

Container.get(Main);
