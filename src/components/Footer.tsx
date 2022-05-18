import React, { Dispatch, SetStateAction } from 'react';

interface FooterProps {
    nrOfArticles: number;
    startIndexArticle: number;
    articlesLength: number;
    setArticleStart: Dispatch<SetStateAction<number>>;
}

function Footer(props: FooterProps) {
    const { nrOfArticles: numberOfArticlesToDisplay,
            startIndexArticle: startDisplayIndex, 
            articlesLength,
            setArticleStart: setArticleStart } = props
    return (
        <footer className="footer">
            {startDisplayIndex > 0 &&
                <button
                    onClick={(e) => setArticleStart(startDisplayIndex - numberOfArticlesToDisplay)}
                    className="footer__link">previous</button>}
            {startDisplayIndex + numberOfArticlesToDisplay < articlesLength && 
                <button
                    onClick={(e) => setArticleStart(startDisplayIndex + numberOfArticlesToDisplay)}
                    className="footer__link footer__link--next">next</button>}
        </footer>
    );
}

export default Footer;