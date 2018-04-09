import React, { Component, Fragment, createContext } from 'react';
import { connect } from 'react-redux';
import { setModalVisibility } from 'actions/app';
import { fetchArticles } from 'actions/articles';
import Hero from 'components/Hero';
import Layout from 'components/Layout';
import ArticlesList from 'components/ArticlesList';
import Sidebar from 'components/Sidebar';
import Article from 'components/Article';
import Modal from 'components/Modal';
import heroSrc from 'images/cover.png';
export const HomeContext = createContext();

class Home extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    const { app, articles, setModalVisibility } = this.props;
    console.log('lol', app.modalOpen);
    return (
      <HomeContext.Provider value={{ setModalVisibility }}>
        <Hero src={heroSrc} />
        <Layout>
          <ArticlesList articles={articles} />
          <Sidebar>
            { articles.map((article, index) => (
              <Article
                key={article.id}
                type="sidebar"
                data={article}
                articleIndex={`0${index + 1}`}
              />
            )) }
          </Sidebar>
        </Layout>
        { app.modalOpen
          && (
            <Modal
              collapsed={app.modalOpen}
            >
              <h2>Hey I am a modal!</h2>
            </Modal>
          )
        }
      </HomeContext.Provider>
    );
  }
}

const mapStateToProps = ({ app, articles }) => ({
  app,
  articles,
});

const mapDispatchToProps = {
  setModalVisibility,
  fetchArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
