import React, { useState, useEffect } from 'react';
import className from 'classnames';
import CSSModules from 'react-css-modules';
import axios from 'axios';
import styles from './Foo.module.scss';

export interface FooProps {
  className?: string;
  prefixCls?: string;
}

const defaultProps: FooProps = {
  className: '',
  prefixCls: 'lv-foo'
};

const DEFAULT_QUERY = 'redux';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

interface a {
  hits: Array<{ objectID: string; url: string; title: string }>;
}

const useHackerNewsApi = (initialUrl: string, initialData: a) => {
  const [data, setData] = useState<{
    hits: Array<{ objectID: string; url: string; title: string }>;
  }>(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const result = await axios(url);
      setData(result.data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const doGet = (e: React.FormEvent, url: string) => {
    setUrl(url);
    e.preventDefault();
  };

  return { data, isLoading, isError, doGet };
};

const Foo: React.FC<FooProps> = props => {
  const [query, setQuery] = useState(DEFAULT_QUERY);
  const { data, isLoading, isError, doGet } = useHackerNewsApi(
    `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`,
    { hits: [] }
  );

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const classes = className(props.prefixCls, props.className, {});

  return (
    <div styleName={classes}>
      <form
        onSubmit={event =>
          doGet(event, `http://hn.algolia.com/api/v1/search?query=${query}`)
        }
      >
        <input type='text' value={query} onChange={handleQueryChange} />
        <input type='submit' value='Search' />
      </form>

      {isError && <div>Something went wrong...</div>}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Foo.defaultProps = defaultProps;

export default CSSModules(Foo, styles, {
  allowMultiple: true
});
