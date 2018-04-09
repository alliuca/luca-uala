import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  SubTitle,
  Title,
  Body,
  Footer,
  Actions,
} from './article.theme';
import { HomeContext } from 'containers/Home';
import User from 'components/User';
import Icon from 'components/Icon';
import Button from 'components/Button';
import avatarSrc from 'images/avatar.png';

const Article = ({ data, type, articleIndex }) => {
  const { subheading, heading, description } = data;
  return (
    <HomeContext.Consumer>
      {({ setModalVisibility }) => (
        <Container type={type} data-article-index={articleIndex}>
          <Header>
            <SubTitle>{ subheading }</SubTitle>
            <Title type={type}>
              <Link to="/">{ heading }</Link>
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
            && (
              <Button onClick={setModalVisibility}>Clicca qui</Button>
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
