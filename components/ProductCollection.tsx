import React from "react";

import { Product, useFilterProductsQuery } from "@/saleor/api";
import { Pagination, ProductElement } from "@/components";

const styles = {
  grid: "grid gap-4 grid-cols-4",
  card: "bg-white border",
  summary: "px-4 py-2 border-gray-100 bg-gray-50 border-t",
  title: "block text-lg text-gray-900 truncate",
};

export const ProductCollection = () => {
  const { loading, error, data, fetchMore } = useFilterProductsQuery({
    variables: {
      filter: {},
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  if (data) {
    const products = data.products?.edges || [];
    const pageInfo = data.products?.pageInfo;
    const totalCount = data.products?.totalCount;

    const onLoadMore = () => {
      fetchMore({
        variables: {
          after: pageInfo?.endCursor,
        },
      });
    };

    return (
      <>
        <ul role="list" className={styles.grid}>
          {products?.length > 0 &&
            products.map(({ node }:any) => (
              <ProductElement key={node.id} {...(node as Product)} />
            ))}
        </ul>
        {pageInfo?.hasNextPage && (
          <Pagination
            onLoadMore={onLoadMore}
            itemCount={products.length}
            totalCount={totalCount || NaN}
          />
        )}
      </>
    );
  }

  return null;
};