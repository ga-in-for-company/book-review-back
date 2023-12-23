import { Controller, Get } from '@nestjs/common';

@Controller('bestseller')
export class BestsellerController {
  @Get('/')
  async loadBestSellerListFromA() {
    try {
      const res = await fetch(
        `https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${process.env.TTBKey}&QueryType=Bestseller&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101&Cover=MidBig&OPtResult=ebookList,usedList`,
      );

      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.statusText}`);
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
