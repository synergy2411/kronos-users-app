import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name : "countryCode"
})
export class CountryCodePipe implements PipeTransform{
  transform(value: any, code : string) {
    switch (code) {
      case "USA":
        return "+1 " + value;
      case "AUS":
        return "+12 " + value;
      default:
        return "+91 " + value;
    }
  }
}

// Collection | sortPipe
// tranform(value:any[]) { return value.sort() }
