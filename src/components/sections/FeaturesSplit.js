import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

//text in features split is here

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          

          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                
              <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  So easy to use!
                </div>

                <h3 className="mt-0 mb-12">
                Metrics display of queries 
                </h3>

                <p className="m-0">
                Enter the URL of the GraphQL API and type in the query you want to test. Click Run to automatically run all associated tests.
                </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={('https://user-images.githubusercontent.com/3701668/217415542-6e217696-0c54-448a-ba13-ea0a146512ce.gif')}
                  alt="gif of checking a query and endpoint"
                  width={528}
                  height={396} />
              </div>
            </div>


            <div className="split-item">

              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  circular referencing no more!
                  </div>
                <h3 className="mt-0 mb-12">
                Schema checking
                </h3>
                <p className="m-0">
                Once you click onto to the Schema page, there is an codebox for copying your schema in securely, since your schema are only saved for the session. Submit your schema for an interactive table visualization that displays any schema that allow for a circular reference that could be exploited.
                  </p>
              </div>

              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={`https://user-images.githubusercontent.com/3701668/232093775-0897182d-8c34-438c-8170-23b1a7be8565.gif`}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>



          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;