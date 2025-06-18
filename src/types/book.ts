export type Book = {
  kind: string;
  id: string;
  etag: string;
  volumeInfo: {
    title: string;
    subtitle?: string;
    publisher?: string;
    publishedDate?: string;
    description?: string;
    pageCount: number;
    imageLinks: {
      thumbnail?: string;
    };
    language: string;
  };
  saleInfo: {
    country: string;
    listPrice: {
      amount: number;
      currencyCode: string;
    };
  };
};
