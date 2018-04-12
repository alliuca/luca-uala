import React, { Component, createContext } from 'react';
import { connect } from 'react-redux';
import { setModalVisibility } from 'actions/app';
import { fetchArticles } from 'actions/articles';
import Plx from 'react-plx';
import Header from 'components/Header';
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
    // just grab the first article for this example
    const firstArticle = articles.length > 0 ? [articles[0]] : [];

    return (
      <HomeContext.Provider value={{ setModalVisibility }}>
        <Header />
        <Hero src={heroSrc} />
        <Sidebar>
          { articles.filter(article => article.id !== firstArticle[0].id).map((article, index) => (
            <Article
              key={article.id}
              type="sidebar"
              data={article}
              articleIndex={String(index + 1).padStart(2, '0')}
            />
          )) }
        </Sidebar>
        <Plx
          parallaxData={[{
            start: 0,
            end: 240,
            properties: [
              {
                startValue: 0,
                endValue: -80,
                property: 'translateY',
              }
            ]
          }]}
        >
          <Layout>
            <Plx
              className="background"
              parallaxData={[{
                start: 440,
                end: 480,
                properties: [
                  {
                    startValue: 1152,
                    endValue: 1440,
                    property: 'width',
                  }
                ]
              }]}
            />
            <ArticlesList articles={firstArticle} />
          </Layout>
        </Plx>
        { app.modalOpen
          && (
            <Modal
              collapsed={app.modalOpen.DOMRect}
              nChildren={2}
              setModalVisibility={setModalVisibility}
            >
              <Article
                key={app.modalOpen.content.id}
                type="modal"
                data={app.modalOpen.content}
              />
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
