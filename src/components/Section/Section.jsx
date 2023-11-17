import Title from '../Title/Title';
import PropTypes from 'prop-types';

export const Section = ({ title, children, className = '' }) => {
  return (
    <section className={`py-10 ${className}`}>
      <div className="container">
        <Title>{title}</Title>
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
