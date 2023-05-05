const quarters: {[key: string]: number} = {
  fall: 1,
  winter: 2,
  spring: 3
}

export function compareQuarters (a: string, b: string) {
  const aScore = quarters[a.toLowerCase()] || 0
  const bScore = quarters[b.toLowerCase()] || 0

  return aScore - bScore
}
