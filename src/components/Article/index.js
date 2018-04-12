import React, { Fragment } from 'react';
import {
  Container,
  Header,
  SubTitle,
  Title,
  Body,
  Footer,
  Gallery,
  Actions,
} from './article.theme';
import { HomeContext } from 'containers/Home';
import User from 'components/User';
import Icon from 'components/Icon';
import Button from 'components/Button';
import avatarSrc from 'images/avatar.png';

const Article = ({ data, type, articleIndex }) => {
  const { subheading, heading, description, images } = data;

  return (
    <HomeContext.Consumer>
      {({ setModalVisibility }) => (
        <Container type={type} data-article-index={articleIndex}>
          <Header>
            <SubTitle>{ subheading }</SubTitle>
            <Title type={type}>
              <a to="/">{ heading }</a>
            </Title>
          </Header>
          { type === 'full'
            && (
              <Fragment>
                <Body>{ description }</Body>
                <Footer>
                  <User name="Lorem Ipsum" avatar={avatarSrc} />
                  <Actions>
                    <Icon type="fire" style={{ width: 13 }} />
                    <Icon type="toilet-paper" style={{ width: 16 }} />
                    <Icon type="drop" style={{ width: 10 }} />
                  </Actions>
                </Footer>
              </Fragment>
            )
          }
          { type === 'sidebar'
            ? <Button onClick={(e) => setModalVisibility(e, data)}>Clicca qui</Button>
            : (
              <Fragment>
                <Gallery type={type}>
                { images.slice(0, 6).map((image, index) => (
                  <img
                    key={image.id}
                    src={image.url}
                    alt={image.id}
                    width="177"
                    height="177"
                  />
                )) }
                </Gallery>
              </Fragment>
            )
          }
        </Container>
      )}
    </HomeContext.Consumer>
  );
}

Article.defaultProps = {
  type: 'full',
};

export default Article;
