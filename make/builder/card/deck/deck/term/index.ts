import { Nest, NestInputType, api } from '~'

export function process_deckCard_deck_term(
  input: NestInputType,
): void {
  input.nest.nest.forEach((nest, index) => {
    process_deckCard_deck_term_nestedChildren({
      ...input,
      index,
      nest,
    })
  })
}

export function process_deckCard_deck_term_nestedChildren(
  input: NestInputType,
): void {
  const type = api.determineNestType(input)
  switch (type) {
    case Nest.StaticText:
      break
    default:
      api.throwError(api.generateUnhandledTermCaseError(input))
  }
}