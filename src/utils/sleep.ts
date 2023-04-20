export default async function sleep(milliseconds: number): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/return-await
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
