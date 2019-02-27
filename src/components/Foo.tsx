import React, { useState, useEffect } from 'react';
import axios from 'axios';

export interface FooProps {}

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<{
    name: string;
    age: number;
  }>({
    name: '',
    age: 0
  });

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const result = await axios('https://api.myjson.com/bins/1bkwbc');
      setData(result.data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { isLoading, isError, data };
};

const Foo: React.FC<FooProps> = props => {
  const { data, isError, isLoading } = useFetch();

  return (
    <div>
      {isError && <div>Something go error</div>}

      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          <p>name: {data.name}</p>
          <p>age: {data.age}</p>
        </div>
      )}
    </div>
  );
};

export default Foo;
