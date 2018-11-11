import React, { Component } from 'react';
import { Container, Dropdown } from 'semantic-ui-react';

export default class CompanySelect extends Component {
  componentDidMount() {
    this.props.populate([
      { key: 'a', value: 'A', text: 'CompanyA' },
      { key: 'b', value: 'B', text: 'CompanyB' },
      { key: 'c', value: 'C', text: 'CompanyC' },
      { key: 'd', value: 'D', text: 'CompanyD' }
    ]);
  }
  render() {
    return (
      <>
        {this.props.visible && (
          <Container>
            <Dropdown
              fluid
              search
              selection
              options={this.props.options}
              onChange={this.props.handleChange}
              placeholder={
                this.props.selectedItems.length === 0
                  ? 'Add company'
                  : 'Add another company'
              }
              value=""
            />
          </Container>
        )}
      </>
    );
  }
}