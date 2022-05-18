import React, { useState, useEffect } from 'react';
import Add from '../components/Add';
import Article, { IArticle } from '../components/Article';
import Footer from '../components/Footer';
import Modal from '../components/Modal';

function Home() {
  const [Loading, setLoading] = useState(true);
  const [isModalOpen, visibleModal] = useState(false);
  const [articles, setArticles] = useState([] as IArticle[]);
  const [startArticle, setStartArticle] = useState(0);
  const [tempArticle, articleForModal] = useState(
    {
      id: 0,
      title: '',
      tag: '',
      author: '',
      date: '',
      imgUrl: '',
      content: '',
    } as IArticle);

  const getArticlesFromServer = async () => {
    const resp = await fetch("http://localhost:4000/articles");
      
    const articles = await resp.json();
    setArticles(articles);
    setLoading(true);
  }

  useEffect(() => {getArticlesFromServer()}, []);

    return (
      <main>
        <Add visibleModal={visibleModal} articleToAdd={articleForModal} />
        {articles
          .filter((article, index) => (index >= startArticle) && (index < startArticle + 2))
          .map((article, index, articles) => {
            return (
              <Article
                key={article.id}
                article={article}
                visibleModal={visibleModal}
                articleToPreview={articleForModal}
                getArticlesFromServer={getArticlesFromServer}
              />
            )
          }
          )}
        <Footer
          nrOfArticles={2}
          startIndexArticle={startArticle}
          articlesLength={articles.length}
          setArticleStart={setStartArticle} />
        <Modal
          isModalOpen={isModalOpen}
          tempArticle={tempArticle}
          articleForModal={articleForModal}
          visibleModal={visibleModal}
          getArticlesFromServer={getArticlesFromServer}
        />
      </main>
    );
}

export default Home;

