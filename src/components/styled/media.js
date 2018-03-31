import { css } from 'styled-components'

export const media = {
    modile: (...args) => css`
    @media (max-width: 500px) {
      ${ css(...args) }
    }
  `
};