import { Pipe, PipeTransform } from '@angular/core';
import { JobsService } from '../service/jobs.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  constructor(private jobService:JobsService){}
  transform(value: any, searchString) {
    let result = []
    if (searchString === '') {
      return value
    }
    for (let i = 0; i < value.length; i++) {
      if (value[i].position.toLowerCase().includes(searchString)) {
        result.push(value[i])
      }
      
    }
    return result;
  }

}
