import { Injectable } from '@angular/core';

/* only required if there is a dependency on something else,
    @Component already includes @Injectable so doesn't need 
    @Injectable explicityly applied
*/
@Injectable()
export class EmailService {

  constructor() { }

}
