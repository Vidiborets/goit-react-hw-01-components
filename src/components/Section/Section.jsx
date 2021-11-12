import PropTypes from 'prop-types';
import Container from '../Container/Container';

const Section = ({ children }) => <Container>{children}</Container>;

Section.defaultProps = {
  children: [],
};

Section.protoTypes = {
  children: PropTypes.node,
};

export default Section;
