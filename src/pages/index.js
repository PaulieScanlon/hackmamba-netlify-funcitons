import React, { useState, useEffect } from 'react';

const Page = () => {
  const [gatsbyResp, setGatsbyResp] = useState(null);

  useEffect(() => {
    const getGatsby = async () => {
      const gatsbyResponse = await (await fetch('/api/get-gatsby')).json();
      setGatsbyResp(gatsbyResponse.message);
    };
    getGatsby();
  }, []);

  return (
    <main>
      <h2>gatsbyResp</h2>
      {gatsbyResp ? <pre>{gatsbyResp}</pre> : null}
    </main>
  );
};

export default Page;
