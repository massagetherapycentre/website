import React from 'react';

// :: (Node, Node) -> bool
// Produces true if node is a descendent of ancestor, or node is ancestor itself.
// Produces false in all other cases.
const isDescendentOf = (ancestor, node) => {
  do {
    if (node === ancestor) return true;
    node = node.parentNode;
  } while (node);
  return false;
};

// Updaters
const toggleOpen = state => ({ ...state, isOpen: !state.isOpen });

export default class Popover extends React.Component {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    window.addEventListener('click', this.closeOnClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.closeOnClickOutside);
  }

  closeOnClickOutside = event => {
    if (!this.state.isOpen) return;
    if (!isDescendentOf(this.root, event.target)) {
      this.setState(toggleOpen);
    }
  };

  render() {
    return (
      <div className="root" ref={node => (this.root = node)}>
        <div onClick={() => this.setState(toggleOpen)}>
          {this.props.launcher}
        </div>
        <div
          className="dropdown"
          style={{ display: this.state.isOpen ? 'block' : 'none' }}
        >
          {this.props.children}
        </div>
        <style jsx>{`
          .root {
            position: relative;
          }
          .dropdown {
            background: white;
            border-radius: 4px;
            box-shadow: 0 1px 3px rgba(0,0,0, 0.3);
            position: absolute;
            z-index: 1;
            top: 25px;
            left: 0;
            padding: 10px 0;
          }
        `}</style>
      </div>
    );
  }
}
