import React, { useState, useEffect } from 'react';
import className from 'classnames';
import CSSModules from 'react-css-modules';
import axios from 'axios';
import styles from './Foo.module.scss';

export interface FooProps {
  className?: string;
  prefixCls?: string;
}

const defaultProps: Partial<FooProps> = {
  className: '',
  prefixCls: 'lv-foo'
};

const Foo: React.FC<FooProps> = props => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<{
    hits: Array<{
      objectID: string;
      url: string;
      title: string;
    }>;
  }>({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [url, setUrl] = useState(
    'http://hn.algolia.com/api/v1/search?query=redux'
  );
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

  useEffect(() => {
    document.title = `You click ${count} times`;
  });

  const handleCountClick = () => {
    setCount(count + 1);
  };

  const doGet = (e: React.FormEvent) => {
    setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`);
    e.preventDefault();
  };

  const classes = className(props.prefixCls, props.className, {});

  return (
    <div styleName={classes}>
      <p>count: {count}</p>
      <p>
        <button onClick={handleCountClick}>Add</button>
      </p>
      <hr />
      <form onSubmit={doGet}>
        <input
          type='text'
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type='submit'>Search</button>
      </form>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
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
