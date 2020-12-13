import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], fields: string[], term: string): any[] {
    if (!term) {
      return items;
    }
    return items.filter(item => {
      for(let i in fields) {
        let field = fields[i];
        let arrayMatch = field.match(/^([0-9a-z_-]+)\[\](\.(.*))/);
        if (arrayMatch) {
          for(let subItem of item[arrayMatch[1]]) {
            let fieldValue = this.getDeepFieldValue(subItem, field)
            if (String(fieldValue).trim().toLowerCase().indexOf(term.trim().toLowerCase()) > -1) {
              return true;
            }
          }
        } else {
          let fieldValue = this.getDeepFieldValue(item, field)
          if (String(fieldValue).trim().toLowerCase().indexOf(term.trim().toLowerCase()) > -1) {
            return true;
          }
        }
      }
      return false;
    });
  }

  private getDeepFieldValue(object: Object, field:string) {
    if (!object)
      return null;

    const matches = field.match(/([0-9a-z_-]+)(\.(.*))/i);
    if (!matches) {
      return object[field];
    }
    const actualField = matches[1];
    const subObjectValue = object[actualField];
    const subObjectField = matches[3];
    return this.getDeepFieldValue(subObjectValue, subObjectField);
  }

}
