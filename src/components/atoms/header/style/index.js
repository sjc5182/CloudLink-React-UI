import styled from 'styled-components'
import { font, color, grid } from '../../../../globals/'

export const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  .header-text-info{
    color:${color.white};
    font-family:${font.medium};
    font-size:${grid.scale(2.75)};
    margin-bottom: ${grid.scale(1.5)};
  }
`
