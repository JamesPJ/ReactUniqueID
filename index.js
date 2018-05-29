import React from 'react';

var id = 1;

const uniqueElementID = (BaseComponent) => {
  class ReactUniqueID extends React.Component {
    constructor(props) {
      super(props);
      
      this.ids = {};
      this.gotten = 1;
      
      this.NextHtmlFor = this.NextHtmlFor.bind(this);
    }
    
    componentWillUpdate() {
        this.gotten = 1
    }
    
    NextUid( ident ) {
        if ( !this.ids[ ident ] ) {
            this.ids = {...this.ids, ...{[ ident ]: [ 'id', ident, id++ ].join( '-' )}}
        }
            
        return this.ids[ ident ];
    }
    
    NextHtmlFor() {    
        this.gotten++;
        return this.NextUid( this.gotten - ( this.gotten % 2 ) );
    }
    render() {
      return (
        <BaseComponent
          getNextHtmlFor={this.NextHtmlFor}
          {...this.props} />
      );
    }
  }

  return ReactUniqueID;
};

export default uniqueElementID;