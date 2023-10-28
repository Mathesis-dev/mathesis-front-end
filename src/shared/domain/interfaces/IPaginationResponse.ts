interface IPaginationResponse<T> {
  page?: number;
  pages: number;
  total: number;
  data: Array<T>;
}

export default IPaginationResponse;
