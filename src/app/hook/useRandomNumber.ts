export const useRandomNumber = () => {
  const getRandomInt = (min: number, max: number) => {
    // Math.random()は0以上1未満の値を返すため、適切な範囲に変換する
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  return { getRandomInt }
}
