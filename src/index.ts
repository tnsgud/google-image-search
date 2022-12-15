import 'dotenv/config';
import qs from 'querystring';
import { Search, QueryInput } from './type';

const search: Search = async (options) => {
  const { enginId, apiKey, keyword } = options;
  const baseUrl = 'https://www.googleapis.com/customsearch/v1?';
  const queryInput: QueryInput = {
    key: apiKey,
    cx: enginId,
    q: keyword,
    searchType: 'image',
  };

  const response = await fetch(`${baseUrl}${qs.stringify(queryInput)}`);

  return response.json();
};

const test = async () => {
  const data = await search({
    enginId: `${process.env.ENGIN_ID}`,
    apiKey: `${process.env.API_KEY}`,
    keyword: '아이유',
  });

  const links = data.items.map((item) => item.link);
  console.log(links);
};

test();
