import React, { Component } from 'react';
import { Container, Icon, Label } from 'semantic-ui-react';

export function parameterAccordion(WrappedComponent, title) {
  class ParameterAccordion extends Component {
    handleClick = () => {
      this.props.showAccordion(!this.props.visible);
    };

    render() {
      return (
        <>
          <Label as="a" onClick={this.handleClick}>
            <Icon
              name="dropdown"
              rotated={this.props.visible ? undefined : 'counterclockwise'}
              size="small"
            />
            {title}
          </Label>
          <Container>
            <WrappedComponent
              updateSelection={this.props.updateSelection}
              visible={this.props.visible}
              dataProvider={this.props.dataProvider}
            />
          </Container>
        </>
      );
    }
  }
  return ParameterAccordion;
}
