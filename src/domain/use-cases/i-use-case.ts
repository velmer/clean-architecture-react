export interface IUseCase<T> {
  execute(...params: any): Promise<T>;
}
