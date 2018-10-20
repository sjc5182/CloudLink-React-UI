import React from 'react'
import { Search, Grid, Header } from 'semantic-ui-react'

export default class SearchCategoryComponent extends React.Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={8}>
          <Search />
        </Grid.Column>
        <Grid.Column width={8}>
        </Grid.Column>
      </Grid>
    )
  }
}
